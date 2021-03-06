import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';
import { mediaStyles } from 'components/window-width';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<meta charSet='utf-8' />
					{/* <link rel='preconnect' href='https://use.typekit.net/cub6off.css' /> */}
					<link rel='stylesheet' href='https://use.typekit.net/cub6off.css' />
					<style type='text/css' dangerouslySetInnerHTML={{ __html: mediaStyles }} />
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=UA-${process.env.GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
						}}
					/>
				</Head>
				<body className='root transition-colors duration-1000 transform ease-in-out'>
					<script src='public/noflash.js' />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// https://github.com/vercel/next.js/issues/9160
// https://gitlab.com/kachkaev/website-frontend/blob/ec20c3bfec24cde40d80194bcad5ba69b308a5ef/src/pages/_document.tsx#L31
// <link rel='stylesheet' href='https://use.typekit.net/sbg1kws.css' />
// <link rel='stylesheet' href='https://use.typekit.net/hzg4mdi.css' />
// <link rel='stylesheet' href='https://use.typekit.net/lxd3fak.css' />
// https://web.dev/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools
//preconnect, preload, dns-prefetch --> rel="x"
