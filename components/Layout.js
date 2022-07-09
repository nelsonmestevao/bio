import Head from 'next/head';
import Image from 'next/image';
import SocialIcons from '~/components/SocialIcons';

import { social } from '~/data/config.yml';

const Layout = ({ meta, children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>{meta?.title || 'Hello'} • Nelson Estevão</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/img/wave.gif" type="image/gif" />
    </Head>

    <div className="avatar">
      <Image
        src="/img/profile.jpg"
        alt="Nelson Estevão"
        width="500"
        height="500"
      />
    </div>

    <div className="content">
      {children}
      <SocialIcons social={social} />
    </div>
  </>
);

export default Layout;
