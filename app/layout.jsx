import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import Head from 'next/head';

export const metadata = {
  title: "Prompts",
  description: "Discover special AI prompts",
  
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Head>
            <meta name="google-site-verification" content="HHLSun5dqMxnpImy3vtilQuKX3nswR0xHmhbK6Nffi8" />
          </Head>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
