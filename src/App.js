import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import VideoPage from "./Components/VideoPage.jsx";
import AboutMePage from "./Components/AboutMePage.jsx";
import MyServicesPage from "./Components/MyServicesPage.jsx";
import ContactPage from "./Components/ContactPage.jsx";

const navItems = [
  'Home',
  'About Me',
  'My Services',
  'Contact'
]

function App() {

  return (
      <>
        <div className='flex flex-col'>
          <NavBar items={navItems}/>
          <VideoPage />
          <AboutMePage />
          <MyServicesPage />
          <ContactPage />
          <Footer/>
        </div>
      </>
  )
}

export default App
