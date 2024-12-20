"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TOC() {
    return (
        <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
            <Header />

            <main className="w-full z-10 main-content flex flex-col items-center px-8 mb-2">
                <div className="max-w-4xl w-full bg-bl shadow-xl rounded-2xl border-4 border-nutw p-8 text-nutw">
                    <h1 className="text-5xl text-lbl mb-6 text-center">Terms and Conditions</h1>
                    <hr className="border-t-2 border-nutw mb-6" />
                    <section className="mb-6">
                        <h2 className="text-3xl text-lbl mb-2">Introduction</h2>
                        <p className="text-lg text-white">
                            Welcome to ThisIsMyJam! By accessing or using my website, you agree to be bound by the following terms and conditions. Please read them carefully.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-3xl text-lbl mb-2">Use of Our Website</h2>
                        <p className="text-lg text-white">
                            You are permitted to use this website for personal purposes and in accordance with these terms. Unauthorized use of this website may give rise to a claim for damages or be a criminal offense.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-3xl text-lbl mb-2">Changes to These Terms</h2>
                        <p className="text-lg text-white">
                            ThisIsMyJam reserves the right to revise these terms at any time. By continuing to use our website, you agree to any such changes.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-3xl text-lbl mb-2">Contact Information</h2>
                        <p className="text-lg text-white">
                            If you have any questions about these Terms and Conditions, please contact me at{" "}
                            <a
                                href="mailto:Kimberly@thepoulinfamily.com"
                                className="text-white hover:text-gray-400 underline"
                            >
                                Kimberly@thepoulinfamily.com
                            </a>
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
