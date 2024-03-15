import Image from "next/image";
import Footer from "../footer";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 home">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <h3><a href="/">Home</a></h3>
                </div>
            </div>

            <div className="intro-section">
                {/* <Image
                    src="/2021-profile.png"
                    alt="Vercel Logo"
                    className="profile-pic"
                    width={100}
                    height={100}
                    priority
                />
                <h1 className={`mb-1 text-2xl font-light`}>Michael Morgan</h1>
                <h1 className={`mb-3 text-3xl font-semibold`}>Full Stack Developer</h1>
                <h3 className={`mb-3 font-regular max-w-[55ch]`}>
                    Hi! I'm Michael, and I've been developing websites and apps for over 9 years.
                    With a background in design and a passion for coding, I love to create beautiful and functional digital experiences.
                </h3> */}
            </div>
            <Footer />

        </main>
    );
}
