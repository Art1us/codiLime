import React,{ useState }  from "react";
import './App.css'
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import MiddleSection from "./components/MiddleSection/MiddleSection";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import BottomSection from "./components/BottomSection/BottomSection";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";


function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
      <div className="app" data-theme={theme}>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <HeroBanner />
        <MiddleSection />
        <QuoteSection />
        <BottomSection />
        <Subscribe />
        <Footer />
      </div>
  );
}

export default App;
