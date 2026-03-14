import { useContext } from "react";

import { PageLevelContext } from "@/components/contexts/page-level/page-level-context";

export function usePageLevel() {
    return useContext(PageLevelContext);
}
