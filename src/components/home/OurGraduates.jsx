import Carousel from "react-multi-carousel";
import { TextLarge, TextNormal2 } from "../text/Text";
import GraduateCarouselItem from "./GraduateCarouselItem";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}

export default function OurGraduates(){
    return(
        <div className="my-24">
            <div className="flex flex-col gap-4 text-center px-4 md:px-10">
                <TextLarge className="font-bold text-default">About Us</TextLarge>
                <TextNormal2 className="text-gray-2">At UPversion, we're more than just a group of creatives—we're a collaborative force dedicated to crafting exceptional experiences. Our student projects showcase the heart of our design process, from UX research and wireframing to prototyping and design flow. Each case study reflects our commitment to solving real-world challenges through user-centered design, blending creativity with strategy to d</TextNormal2>
            </div>
            <div className="py-2">
                <Carousel responsive={responsive} infinite className="py-8">
                    <div className="p-4">
                        <div className="carousel-item py-12 px-4 
                            bg-cover bg-center 
                            rounded-2xl overflow-hidden relative 
                            border border-transparent 
                            hover:border hover:border-[#12DF4C] hover:shadow-lg
                            hover:scale-110
                            ease-in transition-all duration-200">
                            <GraduateCarouselItem
                                imageSrc="./web-assets/images/graduates/scarlet.jpeg"
                                fullName="Scarlet Palada"
                                position="UI/UX Designer"
                                logoSrc="./web-assets/images/graduates/moji.png"
                                logoClassName="shadow-lg w-1/3 mx-auto rounded-xl h-[50px] overflow-hidden bg-cover"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="carousel-item py-12 px-4 
                            bg-cover bg-center 
                            rounded-2xl overflow-hidden relative 
                            border border-transparent 
                            hover:border hover:border-[#12DF4C] hover:shadow-lg
                            hover:scale-110
                            ease-in transition-all duration-200">
                            <GraduateCarouselItem 
                                imageSrc="./web-assets/images/graduates/sharlene.jpeg"
                                fullName="Sharlene Lucero"
                                position="UI/UX Designer"
                                logoSrc="./web-assets/images/graduates/unicap.png"
                                logoParentClassName="shadow-lg bg-white mx-auto px-2 rounded-xl"
                                logoClassName="bg-contain"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="carousel-item py-12 px-4 
                            bg-cover bg-center 
                            rounded-2xl overflow-hidden relative 
                            border border-transparent 
                            hover:border hover:border-[#12DF4C] hover:shadow-lg
                            hover:scale-110
                            ease-in transition-all duration-200">
                            <GraduateCarouselItem 
                                imageSrc="./web-assets/images/graduates/ericka.jpeg"
                                fullName="Kim Longden"
                                position="UI/UX Designer"
                                logoSrc="./web-assets/images/graduates/mims.png"
                                logoClassName="shadow-lg w-1/3 mx-auto rounded-xl h-[50px] overflow-hidden bg-cover"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="carousel-item py-12 px-4 
                            bg-cover bg-center 
                            rounded-2xl overflow-hidden relative 
                            border border-transparent 
                            hover:border hover:border-[#12DF4C] hover:shadow-lg
                            hover:scale-110
                            ease-in transition-all duration-200">
                            <GraduateCarouselItem 
                                imageSrc="./web-assets/images/graduates/kim.jpeg"
                                fullName="Kim Longden"
                                position="UI/UX Designer"
                                imageHolderClassName="bg-left"
                                logoSrc="./web-assets/images/graduates/rankfinity.jpeg"
                                logoParentClassName="shadow-lg bg-[#000000] mx-auto px-2 rounded-xl overflow-hidden"
                                logoClassName="bg-cover overflow-hidden"
                            />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}