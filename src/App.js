import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import MiddleSection from "./components/MiddleSection/MiddleSection";
import QuoteSection from './components/QuoteSection/QuoteSection'
import BottomSection from './components/BottomSection/BottomSection'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
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
