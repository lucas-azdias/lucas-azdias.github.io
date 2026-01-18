import { type JSX, Suspense, lazy } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import { Loading } from "@/components/loading";
import { ErrorPage } from "@/components/error-page";

// Type for the path tree structure
interface PagePathNode {
    path: string
    children: PagePathNode[]
    element?: JSX.Element
    indexElement?: JSX.Element
}

// Recursively captures page paths
const pagePaths = import.meta.glob("@/pages/**/*.tsx");

// Base structure of the path tree
const pagePathsTree: PagePathNode = { path: "", children: [] };

// Helper function for lazy-load + Suspense wrapper
function lazyElement(importer: () => Promise<{ default: React.ComponentType }>): JSX.Element {
    const Element = lazy(importer);
    return (
        <Suspense fallback={<Loading isFixed={true} />}>
            <Element />
        </Suspense>
    );
}

// Build the page tree
Object.entries(pagePaths).forEach(([key, importer]) => {
    // Lazily load the default component for each path
    const element = lazyElement(importer as () => Promise<{ default: React.ComponentType }>);

    // Format the path into the desired structure
    const path = key
        .replace(/^\/src\/pages\/+/, "") // Remove the "./src/pages/" prefix
        .replace(".tsx", ""); // Remove ".tsx" extension

    // Split into folder/file parts
    const parts = path.split("/");

    const filename = parts.pop() ?? ""; // Get the file name (index, layout, etc.)
    const pathParts = parts; // Folder path where the file is located

    // Start building the tree from the root level
    let currentNode = pagePathsTree;

    // Navigate and build the tree until the last folder
    pathParts.forEach((part) => {
        let nextNode = currentNode.children.find(n => n.path === part);
        if (!nextNode) {
            nextNode = { path: part, children: [] };
            currentNode.children.push(nextNode);
        }
        currentNode = nextNode;
    });

    // Decide what to do with the file based on its name
    if (filename === "layout") {
        // If it's "layout.tsx", set the base route element
        currentNode.element = element;
    }
    else if (filename === "index") {
        // If it's "index.tsx", set the default route inside the base
        currentNode.indexElement = element;
    }
    else {
        // Otherwise, it's a regular sub-route
        currentNode.children.push({ path: filename, children: [], element: element });
    }
});

// Convert the tree into the required JSON route format
function buildRoutes(node: PagePathNode): RouteObject {
    const children: RouteObject[] = [];

    if (node.indexElement) {
        children.push({ index: true, element: node.indexElement });
    }

    for (const child of node.children) {
        children.push(buildRoutes(child));
    }

    const route: RouteObject = {
        path: node.path || undefined,
        element: node.element,
        children: children.length > 0 ? children : undefined,
        errorElement: <ErrorPage />,
    };

    return route;
}

// Create the routes and export for use with RouterProvider
const routes = [buildRoutes(pagePathsTree)];

export const router = createBrowserRouter(routes);
