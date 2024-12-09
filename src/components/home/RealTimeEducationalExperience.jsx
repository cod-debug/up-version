import { FadeInRight } from "../animations/Animations";
import Container from "../Container";
import { TextMedium, TextNormal, TextNormal2 } from "../text/Text";

const educational_experiences = [
    {
        title: 'Online Classes',
        description: 'An interactive and dynamic educational process.',
        image_src: '/web-assets/images/classes.jpg',
    },
    {
        title: 'Case Studies',
        description: 'Bootcamp will help you build a portfolio that is suitable for employment.',
        image_src: '/web-assets/images/case-studies.jpg',
    },
    {
        title: 'Personal Feedback',
        description: 'Our team will provide you detailed comments on your work each week in Figma.',
        image_src: '/web-assets/images/personal-feedback.jpg',
    },
    {
        title: 'Job-ready Portfolio',
        description: 'We will assist you in developing your own portfolio.',
        image_src: '/web-assets/images/job-ready-portfolio.jpg',
    },
    {
        title: 'Interview Practice',
        description: 'To be sure you are ready for your new path, we will perform a mock interview.',
        image_src: '/web-assets/images/interview-practice.jpg',
    },
    {
        title: 'Certificate',
        description: 'Upon finishing the course, you will receive a signed copy of our certificate.',
        image_src: '/web-assets/images/certificates.jpg',
    }
];

export default function RealTimeEducationalExperience(){
    return(
        <Container className="mt-12">
            <div className="bg-black text-white p-12 rounded-2xl">
                <div className="flex flex-col gap-6 text-center max-w-[800px] mx-auto">
                    <TextMedium className="font-bold">An Interactive, Real-time Educational Experience</TextMedium>
                    <TextNormal>Experience learning through hands-on activities in our live sessions. Our live classes offer an active learning methodology to help you remember and apply significant ideas.</TextNormal>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
                        {
                            educational_experiences.map((item) => (
                                <div className="grid grid-cols-1 md:grid-cols-12 bg-white w-full rounded-xl overflow-hidden gap-4" key={item.title}>
                                    <div className="md:col-span-4">
                                        <div className="flex border w-full min-h-64 md:min-h-0 h-full rounded-xl bg-cover bg-no-repeat bg-right" style={{backgroundImage: `url(${item.image_src})`}}>
                                            <span className="sr-only">background image</span>
                                        </div>
                                    </div>
                                    <div className="md:col-span-8 flex items-center">
                                        <div className="text-default flex flex-col gap-4 py-6 px-4 md:px-0">
                                            <TextNormal2 className="font-bold">{ item.title }</TextNormal2>
                                            <TextNormal>{ item.description }</TextNormal>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </Container>
    )
}