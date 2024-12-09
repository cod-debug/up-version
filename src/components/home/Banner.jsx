import { TextLarge, TextNormal } from "../text/Text";
import CustomVideo from "../video/CustomVideo";

export default function Banner(){
    return (
        <div className="relative overflow-hidden rounded-3xl">
            <div className="-z-10 absolute">
                <CustomVideo src="./web-assets/videos/banner.mp4" />
            </div>
            <div className="h-full w-full flex items-center px-24 bg-black/80 text-white relative">
                <div className="grid grid-cols-12 w-full">
                    <div className="col-span-12 md:col-span-6 py-[2rem] md:py-[5rem] lg:py-[14rem]">
                        <img alt="logo square" src="./web-assets/logo-square.png" className="block md:hidden w-1/4" />
                        <TextLarge className="font-bold">Level Up Your Career Become a <span className="text-primary-light">UI/UX Designer</span></TextLarge>
                        <TextNormal className="mt-4">Transform your design mindset and craft unforgettable user experiences with our UX course. Dive deep into the principles of user-centered design and unleash your creative potential.</TextNormal>
                    </div>
                </div>
                <img alt="logo square" src="./web-assets/logo-square.png" className="hidden md:block w-[60%] absolute md:-right-[6%] md:-bottom-[40%] lg:-right-[8%] lg:-bottom-[30%]" />
            </div>
        </div>
    )
}