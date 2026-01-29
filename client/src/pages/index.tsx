import { Typography } from "@mui/joy";

import { BookSummary } from "@/components/page-elements/book-summary";

export default function Webpage() {
    return (
        <>
            {/* Title */}
            <Typography level="h1" sx={{ lineHeight: 1 }}>
                Lucas
                <br />
                Dias
            </Typography>

            {/* Subtitle */}
            <Typography level="h3" sx={{ mt: 3 }}>
                Desenvolvedor
            </Typography>

            <BookSummary />
        </>
    );
}
