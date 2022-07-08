import type { NextPage } from "next";
import { Hero } from "../components/hero";
import { Footer } from "../components/footer";
import { ListFeature, MainFeature } from "../components/feature";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <MainFeature />
      <ListFeature />
      <Footer />
    </>
  );
};

export default Home;
