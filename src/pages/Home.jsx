import Container from "../components/Container";
import Banner from "../components/home/Banner";
import ChangeYourLife from "../components/home/ChangeYourLife";
import FurtherInquiries from "../components/home/FurtherInquiries";
import OnlineSchedule from "../components/home/OnlineSchedule";
import OurGraduates from "../components/home/OurGraduates";
import RealTimeEducationalExperience from "../components/home/RealTimeEducationalExperience";
import TeacingTeam from "../components/home/TeachingTeam";
import UncomplicatedPrice from "../components/home/UncomplicatedPrice";

export default function Home(){
    window.scroll(0, 0);
    return(
        <>
            <Container>
                <Banner />
                <ChangeYourLife />
                <RealTimeEducationalExperience />
                <TeacingTeam />
            </Container>
            <OnlineSchedule />
            <Container>
                <UncomplicatedPrice />
            </Container>
            <Container>
                <OurGraduates />
            </Container>
            <Container>
                <FurtherInquiries />
            </Container>
        </>
    )
}