import "./globals.css";
import Header from '../components/Header.js/page'
import Footer from '../components/footer.js/page' 
export default function RootElement({children}){
  return(
    <>
     <html>
        <body>
          <Header></Header>
          {children}
          <Footer></Footer>

        </body>
     </html>
    </>
  )
}
