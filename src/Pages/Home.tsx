import About from '../components/partials/About/About';
import BmiCalc from '../components/partials/BMI/BmiCalc';
import Blog from '../components/partials/Blog/Blog';
import ChooseUs from '../components/partials/ChooseUs/ChooseUs';
import CtaBanner from '../components/partials/CtaBanner/CtaBanner';
import Featured from '../components/partials/Featured/Featured';
import Footer from '../components/structure/Footer/Footer';
import Gallery from '../components/partials/Gallery/GalleryHome';
import Hero from '../components/partials/Hero/Hero';
import Pricing from '../components/partials/Pricing/Pricing';
import Testimonials from '../components/partials/Testimonials/Testimonials';
import Trainers from '../components/partials/Trainers/Trainers';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <Blog />
      <CtaBanner />
      <Footer />
    </>
  );
}

export default Home;
