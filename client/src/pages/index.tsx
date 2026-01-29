import { Typography } from "@mui/joy";

import { BookSummary } from "@/components/page-elements/book-summary";

export default function Webpage() {
    return (
        <>
            {/* Title */}
            <Typography level="h1" sx={{ lineHeight: 1, mb: 2 }}>
                Lucas
                <br />
                Dias
            </Typography>

            {/* Subtitle */}
            <Typography level="h4" sx={{ mb: 2 }}>
                Desenvolvedor
            </Typography>

            <BookSummary />
        </>
    );
}
