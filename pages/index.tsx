import type { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Supporters from "../components/Supporters";
import SocialMedia from "../components/SocialMedia";
import Feature from "../components/Feature";
import Technology from "../components/Product/Technology";
import HallOfFame from "../components/HallOfFame";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen p-0 m-0 scroll-smooth">
      <NavBar />
      <HallOfFame />
      <Intro />
      <Feature />
      <Products />
      <Technology />
      <SocialMedia />
      <Supporters />
      <Footer />
    </div>
  );
};

export default Home;
