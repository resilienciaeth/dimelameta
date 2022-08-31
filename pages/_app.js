import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (

  <div className="bg-dime-2">
    <Navbar />
    <Component {...pageProps} />

  </div>
);

export default MyApp;
