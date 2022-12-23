import "./App.css";
import CarouselBody from "./Carousel/CarouselBody";
import Footer from "./Footerpart/Footer";
import "./NavigationBar/NavBars"
import NavBars from "./NavigationBar/NavBars";


function App() {
  return (
    <div>
      <NavBars />
      <CarouselBody />
      <Footer />
    </div>
  );
}

export default App;
