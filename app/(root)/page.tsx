
import HeroSection from "./components/heroSection"
import CardComponent from "./components/CardComponent";


export default function Home() {
  return (
    <div className=" text-white min-h-screen flex flex-col">
      
       <HeroSection/>
       <CardComponent/>
    </div>
  );
}