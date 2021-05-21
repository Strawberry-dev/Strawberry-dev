import Head from "next/head";
import Header from "../components/Header";
import Body from "../components/Body";
import FooterBackground from "../components/FooterBackground";

export default function Home() {
    return (
        <div>
            <Head id="top">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/aos@next/dist/aos.css"
                />

                <title>Strawberry (SBERRY)</title>
            </Head>

            <Header />
            <Body />
            <FooterBackground />

            <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
            <script>AOS.init();</script>
        </div>
    );
}
