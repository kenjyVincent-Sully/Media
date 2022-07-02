import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.svg";

const Header = () => {

    return (
        <div>
            <Link href="/">
                <Image src={Logo} alt="Logo Moviefinder" height={30} width={182} />
            </Link>
        </div>
    )
}

export default Header;