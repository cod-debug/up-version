import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Container from "../components/Container";
import { TextMedium, TextNormal } from "../components/text/Text";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      partialVisibilityGutter: 30,  // Increased gutter for both sides
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 30,  // Increased gutter for both sides
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30,   // Adjust for smaller devices
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,   // Adjust for smaller devices
    }
};

export default function Projects(){
    window.scroll(0, 0);
    return (
        <div className="mt-12" id="projects">
            <Container className="py-4 px-2 md:px-48 text-center flex flex-col gap-4">
                <TextMedium className="font-bold text-default">Our Student Projects</TextMedium>
                <TextNormal className="text-gray-2">
                    Discover our students' hands-on UX design projects, showcasing their process from research and wireframing to prototyping and design flow. Each case study highlights their approach to solving real-world challenges, offering insights into user-centered design and problem-solving at every stage. 
                    <br />
                    <br />
                    Explore how our students transform ideas into intuitive, user-friendly experiences.
                </TextNormal>
            </Container>
            <div>
                <Carousel 
                    className="py-16"
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    centerMode={true} // This enables partial visibility on both sides
                    focusOnSelect={true} // Optional: focus on the selected item
                >
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src="/web-assets/images/projects/project-1.jpeg" alt="Project 1" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src="/web-assets/images/projects/project-2.jpeg" alt="Project 2" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src="/web-assets/images/projects/project-3.jpeg" alt="Project 3" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}
