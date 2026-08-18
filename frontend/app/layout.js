import "./globals.css";
import Header from '../components/Header.js/page';
import Footer from '../components/footer.js/page';
import Preloader from '../components/Preloader/Preloader';

export default function RootElement({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
