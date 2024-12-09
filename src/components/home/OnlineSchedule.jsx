import { TextLarge, TextNormal } from "../text/Text";

export default function OnlineSchedule(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-12 first-letter:grid-cols-12 bg-primary px-12 mt-32">
            <div className="col-span-4 relative">
                <div className="md:absolute md:bottom-0">
                    <img src="/web-assets/images/clock.png" alt="Clock" className="w-full md:-mt-28" />
                </div>
            </div>
            <div className="col-span-8 text-white flex flex-col justify-center gap-4 py-12 text-center md:text-left">
                <TextLarge className="font-bold">Online Schedule</TextLarge>
                <TextNormal>Classes run Monday to Friday, with additional career mentoring, on-demand seminars, and feedback on your work available throughout the week. We recommend dedicating 5 hours a week for homework.</TextNormal>
            </div>
        </div>
    )
}