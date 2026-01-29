import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { CssVarsProvider, CssBaseline, GlobalStyles } from "@mui/joy";

import { Loading } from "@/components/loading";
import { router } from "@/router";
import { theme, defaultMode, globalStyles } from "@/theme";

function App() {
    return (
        <CssVarsProvider theme={theme} defaultMode={defaultMode}>
            <CssBaseline />
            <GlobalStyles
                styles={globalStyles}
            />
            <Suspense fallback={<Loading isFixed={true} />}>
                <RouterProvider router={router} />
            </Suspense>
        </CssVarsProvider>
    );
}

export default App;
