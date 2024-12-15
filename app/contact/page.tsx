"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-bl">
            <Header />

            <main className="w-full h-full z-10 main-content mb-4 mt-4">
                <div className="grid grid-cols-3 w-full h-full items-center">
                    <div className="col-start-2 col-end-3 w-full h-[50vh] shadow-xl shadow-background bg-lbl rounded-2xl border-4 border-foreground flex flex-col items-center justify-start p-4">
                        <h2 className="text-5xl text-nuto mb-4">Contact Us</h2>
                        <hr className="w-3/4 border-t-2 border-nutw my-8 mx-auto" />
                        <p className="text-2xl text-nuto">
                            Business Inquiries:{" "}
                            <a
                                href="mailto:management@nutorious.gg"
                                className="text-nutw hover:text-nuta underline"
                            >
                                thisismyyjam@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
