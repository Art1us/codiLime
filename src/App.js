import React, { useState } from "react";
import "./App.css";

import {
  Header,
  HeroBanner,
  MiddleSection,
  QuoteSection,
  BottomSection,
  Subscribe,
  Footer,
} from "./components";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app" data-theme={theme}>
      <Header toggleTheme={toggleTheme} theme={theme} />
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
