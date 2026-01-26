import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { CssVarsProvider, CssBaseline, GlobalStyles } from "@mui/joy";

import { Loading } from "@/components/loading";
import { router } from "@/router";

function App() {
    return (
        <CssVarsProvider>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    // CSS object styles
                    html: {
                        // ...
                    },
                    body: {
                        // ...
                    },
                }}
            />
            <Suspense fallback={<Loading isFixed={true} />}>
                <RouterProvider router={router} />
            </Suspense>
        </CssVarsProvider>
    );
}

export default App;
