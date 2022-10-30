import "./App.css";
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Features from "./components/Features"
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Team from "./components/Team"
import Contact from "./components/Contact"
import "./App.css";

function App() {
  
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About}/>
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
}

export default App;
