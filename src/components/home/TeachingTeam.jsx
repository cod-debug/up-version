import Container from "../Container";
import { TextMedium, TextNormal, TextNormal2 } from "../text/Text";

export default function TeacingTeam(){
    return (
        <Container className="my-12">
            <div className="text-center flex flex-col gap-4 max-w-[900px] mx-auto">
                <TextMedium className="text-default font-bold">Teaching Team</TextMedium>
                <TextNormal className="text-gray-2">You will participate in live sessions with a group of UX/UI instructors who are actively thriving in their careers as product designers during our Bootcamp.</TextNormal>
            </div>
            <div className="mt-8 max-w-[600px] mx-auto grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="relative">
                        <div className="teaching-team-bg"></div>
                        <img src="/web-assets/images/carmen-samson.png" alt="Carmen Samson" className="h-[300px] -scale-x-100 mx-auto" />
                    </div>
                    <div className="text-center mt-4 flex flex-col gap-2">
                        <TextNormal2 className="font-bold">Carmeli Samson</TextNormal2>
                        <TextNormal>UI/UX Designer, Project Manager</TextNormal>
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <div className="teaching-team-bg second"></div>
                        <img src="/web-assets/images/rein-selorio.png" alt="Carmen Samson" className="h-[300px] -scale-x-100 mx-auto" />
                    </div>
                    <div className="text-center mt-4 flex flex-col gap-2">
                        <TextNormal2 className="font-bold">Rein Selorio</TextNormal2>
                        <TextNormal>Lead, UI/UX Designer</TextNormal>
                    </div>
                </div>
            </div>
        </Container>
    )
}