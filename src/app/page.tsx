import Banner from "@/components/components/Banner";
import Header from "@/components/components/Header";
import HealthTips from "@/components/components/health-tips";
import { HealthChat } from "@/components/components/HealthChat";
import Services from "@/components/components/Services";
import SpecialityMenu from "@/components/components/SpecialityMenu";
import Testimonials from "@/components/components/testimonials";
import TopDoctors from "@/components/components/TopDoctors";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <Header />
      <Services/>
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
      <Testimonials/>
      <HealthTips/>
      <HealthChat />
    </main>
  );
};

export default Home;
