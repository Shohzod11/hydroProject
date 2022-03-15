import { Route, Routes } from 'react-router-dom'
import ActivitiesType from "./Containers/ActivitiesType"
import KorporativQomita from './pages/Korporativ'
import MainHeader from './components/MainHeader'
import TopHeader from './components/TopHeader'
import Article from './Containers/Article'
import { AboutPage } from './About/About'
import { ContactPage } from './Contact/Contact'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import './App.css'
import TexnikHeader from './Containers/TexnikHeader'
import TexnikaTable from './Containers/TexnikaTable'
import Iqtisodiy from './pages/Iqtisodiy'
import NewsPage from './pages/News'
import TexnikaVideo from './Containers/TexnikaVideo'
import TexnikaFoto from './Containers/TexnikaFoto'
function App() {
  return (
    <div className="App">
      <TopHeader />
      <MainHeader />
      {/* Iltimos about ni Route ga o`ramanglar!!! */}
      <AboutPage />
      <NewsPage/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="korporativ" element={<KorporativQomita />} />
        <Route path='iqtisodiy' element={<Iqtisodiy />} />
        <Route path="activitiesPage" >
          <Route path="activities" element={<ActivitiesType />} />
          <Route path="past-activities" element={<ActivitiesType type={"Yakunlar"} />} />
          <Route path="present-activities" element={<ActivitiesType type={"Hozirda"} />} />
          <Route path="future-activities" element={<ActivitiesType type={"Kelgusida"} />} />
          <Route path="article" element={<Article />} />
        </Route>
        <Route path="texnika" element={<><TexnikHeader /><TexnikaTable /><TexnikaVideo /><TexnikaFoto /></>} />
        
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
