"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="relative grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
            <Header />

            <main className="w-full z-10 main-content flex flex-col items-center px-8">
                <div className="max-w-4xl w-full bg-bl shadow-xl rounded-2xl border-4 border-nutw p-8 text-nutw">
                    <h1 className="text-5xl text-lbl mb-6 text-center">Privacy Policy</h1>
                    <hr className="border-t-2 border-nutw mb-6" />
                    <section className="mb-6">
                        <h2 className="text-3xl text-lbl mb-2">Introduction</h2>
                        <p className="text-lg text-white">
                            ThisIsMyJam is committed to protecting your privacy. This Privacy Policy explains how I collect, use, and safeguard your personal information.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-3xl text-lbl mb-2">Information We Collect</h2>
                        <p className="text-lg text-white">
                            I only collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other details you provide.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-3xl text-lbl mb-2">How We Use Your Information</h2>
                        <p className="text-lg text-white">
                            Your information is used to improve my services, respond to inquiries, and send updates about my platform.
                        </p>
                    </section>
                    <section className="mb-6">
                        <h2 className="text-3xl text-lbl mb-2">Your Data Protection Rights</h2>
                        <p className="text-lg text-white">
                            You have the right to access, update, or delete your personal information at any time.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-3xl text-lbl mb-2">Contact Information</h2>
                        <p className="text-lg text-white">
                            For any questions or concerns regarding this Privacy Policy, please email me at{" "}
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
