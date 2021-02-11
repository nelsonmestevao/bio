import Head from "next/head";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

import { social } from "../data/config.yml";

export default ({ meta, children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{meta?.title || "Hello"} • Nelson Estevão</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/img/wave.gif" type="image/gif" />
    </Head>

    <div className="avatar">
      <Image
        src="/img/me.png"
        alt="Nelson Estevão"
        width="700"
        height="700"
      />
    </div>

    <div className="content">
      {children}
      <SocialIcons social={social} />
    </div>
  </>
);
