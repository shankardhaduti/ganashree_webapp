<<<<<<< HEAD
import Menu from '../components/Menu';
import About from '../components/About';
import Product from '../components/Product';
=======
import { AppProps } from "next/app";
>>>>>>> 3093ab84801430d7c483c22dd007efa3c0756ded

import "../styles/main.css";

<<<<<<< HEAD
function App(){
  return(
    <>
    <Menu/>
    <About/>
    <Product/>
    </>
    
  )
}
export default App;
=======
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
>>>>>>> 3093ab84801430d7c483c22dd007efa3c0756ded
