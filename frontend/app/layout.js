import "./globals.css";
import Header from '../components/Header.js/page';
import Footer from '../components/footer.js/page';

export default function RootElement({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
