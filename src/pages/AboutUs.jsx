import Container from "../components/Container";
import { TextMedium, TextNormal } from "../components/text/Text";

export default function AboutUs(){
    window.scroll(0, 0);
    return (
        <div className="mt-12" id="projects">
            <Container className="py-4 px-8 md:px-48 text-center flex flex-col gap-4">
                <TextMedium className="font-bold text-default">About Us</TextMedium>
                <TextNormal className="text-gray-2">
                    At UPversion, we're more than just a group of creatives—we're a collaborative force dedicated to crafting exceptional experiences. Our student projects showcase the heart of our design process, from UX research and wireframing to prototyping and design flow. Each case study reflects our commitment to solving real-world challenges through user-centered design, blending creativity with strategy to design.
                </TextNormal>
            </Container>
            <Container className="py-8 px-8 md:py-8 md:px-52">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <TextMedium className="text-primary font-bold">VISION</TextMedium>
                        <TextNormal className="text-gray-2">Our vision is to redefine visual communication through creativity, innovation, and storytelling. We aim to inspire, empower, and transform lives by crafting designs that evoke emotion and leave an indelible mark on humanity.</TextNormal>
                    </div>
                    <div>
                        <img src="/web-assets/images/vision.png" alt="vision" className="w-1/2 md:w-3/4 mx-auto" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-4">
                    <div className="order-1 md:order-2">
                        <img src="/web-assets/images/mission.png" alt="vision" className="w-1/2 md:w-3/4 mx-auto" />
                    </div>
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <TextMedium className="text-primary font-bold">MISSION</TextMedium>
                        <TextNormal className="text-gray-2">We empower businesses and individuals through innovative design solutions, crafting bespoke creations that drive tangible results. Our approach is rooted in trust and collaboration, fostering long-term partnerships to continually meet evolving needs.</TextNormal>
                    </div>
                </div>
            </Container>
            <div className="text-center py-10">
                <strong className="text-default">Partnered with</strong>
                <img src="/web-assets/images/optek-logo-color.png" alt="optek logo color" className="w-[180px] mx-auto mt-4" />
            </div>
        </div>
    )
}