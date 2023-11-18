import { Carousel } from "@material-tailwind/react";
 
export default function CarouselsSlide() {
  return (
    <Carousel className="rounded-xl h-80">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/June2023/SS/samsung_crystal_3000x1200._CB602489187_.jpg"
        alt="image 1"
        className="h-full w-full object-contain"
      />
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/GWHeros/June/28th/3_3000._CB602465796_.jpg"
        alt="image 2"
        className="h-full w-full object-contain"
      />
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HPC/Coop/HFS_June_DesktopHero_3000x1200._CB602502758_.jpg"
        alt="image 3"
        className="h-full w-full object-contain"
      />
    </Carousel>
  );
}