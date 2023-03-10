import { type AppType } from "next/app";
import { api } from "~/utils/api";
import Footer from "~/pages/layout/Footer";
import Navbar from "~/pages/layout/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className="my-0 mx-auto max-w-3xl text-center">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
    ) 

};

export default api.withTRPC(MyApp);
