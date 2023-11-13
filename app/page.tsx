import Image from "next/image";
import Carousel from "./ui/components/Carousel/Carousel";
import Promotions from "./ui/components/Promotions/Promotions";
import Showcase from "./ui/components/Showcase/Showcase";

export default function Home() {
  return (
    <div className="w-100">
      <Showcase />
      <Promotions />
      <Carousel />
    </div>
  );
}
