import Image from "next/image";
import Link from "next/link";
import Logo from "./img/logo.svg";
import SearchBar from "@components/Search/SearchBar";
import { Container } from "./style";

const Header = () => {

    return (
        <Container>
            <Link href="/">
                <Image src={Logo} alt="Logo Moviefinder" height={30} width={182} />
            </Link>
            <SearchBar />
        </Container>
    )
}

export default Header;