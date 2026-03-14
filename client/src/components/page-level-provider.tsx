import { createContext, useContext } from "react";

const PageLevelContext = createContext(0);

export function usePageLevel() {
    return useContext(PageLevelContext);
}

export function PageLevelProvider(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    const level = usePageLevel();

    return (
        <PageLevelContext.Provider value={level + 1}>
            {children}
        </PageLevelContext.Provider>
    );
}
