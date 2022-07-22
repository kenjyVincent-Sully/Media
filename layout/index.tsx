import React from 'react';
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import Logo from "./img/logo.svg";
import SearchBar from "@components/Search";
import { Container } from "./style";
import styles from "@styles/Home.module.css";

export const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Test Prisma Media</title>
                <meta name="description" content="Test technique React" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Link href="/">
                    <Image src={Logo} alt="Logo Moviefinder" height={30} width={182} />
                </Link>
                <SearchBar />
            </Container>
            {children}
        </div>
    );
}
