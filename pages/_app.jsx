import React from 'react'
import { DokzProvider, GithubLink, ColorModeSwitch, DokzBlogProvider } from 'dokz'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { Link } from 'landing-blocks'
import NextLink from 'next/link';
import { useRouter } from 'next/router'

const order = {
    'index.mdx': true,
    'blog': false,
    // more: {
    //     index: true,
    // }
}

export default function App(props) {
    const { Component, pageProps } = props
    const router = useRouter()
    const pathname = router?.pathname || ''
    if (!pathname) {
        throw new Error('pathname undefined')
    }
    if (pathname.startsWith('/blog')) {
        return (
            <ChakraProvider resetCSS>
                <DokzBlogProvider
                    blogRootPath='pages/blog'
                    headerLogo={<NextLink href='/'><a><img src='/sitecore-radar-48.png' width='48px' alt='Sitecore Radar Logo'/></a></NextLink>}
                    animate
                    headTitlePrefix='Dokz Blog - '
                    githubUrl='SoulcodeAgency/SitecoreRadar'
                    branch='main'
                    headerItems={[
                        <Link href='/'>Home</Link>,
                        <GithubLink
                            key='0'
                            url='https://github.com/SoulcodeAgency/SitecoreRadar'
                        />,
                        <ColorModeSwitch key='1' />,
                    ]}
                >
                    <Component {...pageProps} />
                </DokzBlogProvider>
            </ChakraProvider>
        )
    }
    return (
        <ChakraProvider resetCSS>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Fira+Code'
                    rel='stylesheet'
                    key='google-font-Fira'
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <DokzProvider
                headerLogo={<NextLink href='/'><a><img src='/sitecore-radar-48.png' width='48px' alt='Sitecore Radar Logo'/></a></NextLink>}
                animate
                githubUrl='SoulcodeAgency/SitecoreRadar'
                branch='main'
                headerItems={[
                    <Link href='/blog'>Blog</Link>,
                    <GithubLink
                        key='0'
                        url='https://github.com/SoulcodeAgency/SitecoreRadar'
                    />,
                    <ColorModeSwitch key='1' />,
                ]}
                sidebarOrdering={order}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </ChakraProvider>
    )
}
