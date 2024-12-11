import Container from "./Container";
import FacebookIcon from "./Icons/FacebookIcon";
import WebsiteIcon from "./Icons/WebsiteIcon";

export default function Footer(){
    return(
        <div className="bg-[#0D0D0D] text-white">
            <Container className="px-2 md:px-0">
                <div className="flex justify-between items-center">
                    <div className="flex items-center ">
                        <img src="/web-assets/logo-white.png" alt="White" className="w-[150px]" />
                        <div>
                            <p>Copyright &copy; 2024. All rights reserved.</p>
                            <p>Powered by: OPTekSolution</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <FacebookIcon size="25" />
                            <a href="https://www.facebook.com/upversionph" target="_blank">facebook.com/upversionph</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <WebsiteIcon size="25" />
                            <a href="https://upversion.com" target="_blank">upversion.com</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}