import Sesctiontitle from "../../../ComPonent/SectionTitle/Sesctiontitle";
import Banner from "../Banner/Banner";
import FeaturedSection from "../FeaturedSeciton/FeaturedSection";
import TrendingProduct from "../TrendingProduct/TrendingProduct";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto -z-10">
      <Banner></Banner>
      <Sesctiontitle heading={"Featured Products"}></Sesctiontitle>
      <FeaturedSection></FeaturedSection>
      <TrendingProduct></TrendingProduct>
    </div>
  );
};

export default Home;
