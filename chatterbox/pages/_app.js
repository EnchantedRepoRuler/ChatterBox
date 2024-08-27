import "@/styles/globals.css";


//INTERNAL IMPORT
import { ChatterBoxProvider } from "@/context/chatterboxcontext";
import { navbar } from "@/components/index";
const MyApp = ({ Component, pageProps }) =>  (

  <div>
    <ChatterBoxProvider>
      <navbar/>
      <Component {...pageProps} />
    </ChatterBoxProvider>
  </div>
)


export default MyApp;

