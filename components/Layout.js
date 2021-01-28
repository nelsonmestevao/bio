import Head from 'next/head'
import Image from 'next/image'
import SocialIcons from "./SocialIcons"

import social from '../data/social.json'

const Layout = ({ meta, children }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>{meta?.title || "Hello"} • Nelson Estevão</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/img/wave.gif" type="image/gif" />
        </Head>

        <div className="avatar">
            <Image src="/img/profile.png" alt="Nelson Estevão" width="1500" height="1500" />
        </div>

        <div className="content">
            {children}

            <SocialIcons twitter={social.twitter} linkedin={social.linkedin} github={social.github} gitlab={social.gitlab} />
        </div>
    </>
)

export default Layout