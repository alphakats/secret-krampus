import { type AppType } from "next/app";
import { api } from "~/utils/api";
import Footer from "~/pages/layout/Footer";
import Navbar from "~/pages/layout/Navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="page">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    ) 

};

export default api.withTRPC(MyApp);
