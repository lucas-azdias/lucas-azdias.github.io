import { usePageLevel } from "@/components/contexts/page-level/use-page-level";
import { PageLevelContext } from "@/components/contexts/page-level/page-level-context";

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
