import {Container} from "postcss";
import Link from "next/link";

export const Navigation = () => {
    return (
        <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
            <Container className="flex justify-between py-5">
                <Link href="/">
                    <Image src="/logo.png" alt="Family Guy" width={70} height={50} />
                </Link>
                <Link
                    href="/home"
                    className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
                >
                    <TbArrowBigRightFilled className="text-lg" />
                    Home
                </Link>
                <Link
                    href="/services"
                    className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
                >
                    <TbArrowBigRightFilled className="text-lg" />
                    Services
                </Link>
                <Link
                    href="/about_us"
                    className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
                >
                    <TbArrowBigRightFilled className="text-lg" />
                    Qui sommes-nous?
                </Link>
                <Link
                    href="/contact"
                    className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
                >
                    <TbArrowBigRightFilled className="text-lg" />
                    Nous contacter
                </Link>
                <Link
                    href="/signIn-up"
                    className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600"
                >
                    <TbArrowBigRightFilled className="text-lg" />
                    Explorer
                </Link>
            </Container>
        </div>
    )
}