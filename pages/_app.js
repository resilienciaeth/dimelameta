import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <div className="bg-dime-1">
    <Navbar />
    <Component {...pageProps} className="bg-dime-2" />

  </div>
);

export default MyApp;
