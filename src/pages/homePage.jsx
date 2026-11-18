import Advert from "../components/Advert";
import Description from "../components/description";
import Header from "../components/header";
import Purpose from "../components/purpose";
import Usage from "../components/usage";
import Explore from "../components/explore"
import Faqs from "../components/faqs";
import Amount from "../components/pricing";
import Review from "../components/review";
import Footer from "../components/footer";

function HomePage() {
  return (
    <div className="bg-[#EBF8ED] min-h-screen">
      <Header />
      <Advert/>
      <Description/>
      <Purpose/>
      <Usage/>
      <Explore/>
      <Faqs/>
      <Amount/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default HomePage;
