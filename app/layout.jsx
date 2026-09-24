import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
    title: "Simply Smart Enrichment",
    description:
        "Simply Smart Enrichment provides Mathematics, Science and STEAM programmes for Primary, Secondary and Junior College students in Singapore.",

};

export default function RootLayout({ children }) {

    return (

        <html lang="en">

            <body>

                <ScrollToTop />

                <Navbar />

                {children}

                <Footer />

                <WhatsAppButton />

            </body>

        </html>

    );

}