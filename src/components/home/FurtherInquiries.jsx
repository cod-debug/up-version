import { TextMedium, TextNormal } from "../text/Text";

export default function FurtherInquiries(){
    return(
        <div className="bg-gradient-to-r from-[#111111] to-[#2D2D2D] text-white p-12 mb-8 rounded-lg">
            <div className="flex items-center gap-12">
                <div className="flex-grow flex flex-col gap-2">
                    <TextMedium>Have further inquiries?</TextMedium>
                    <TextNormal>You can reach us by message if you have any more inquiries regarding our bootcamp.</TextNormal>
                </div>
                <div className="flex-grow">
                    <button className="text-center bg-white text-default px-12 py-2 rounded mx-auto">Send message</button>
                </div>
            </div>
        </div>
    )
}