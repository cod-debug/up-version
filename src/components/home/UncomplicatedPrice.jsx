import ActionVerified from "../Icons/ActionVerified";
import { TextMedium, TextMedium2, TextNormal, TextNormal2 } from "../text/Text";

const be_a_certified_ui_ux_designer = [
    'Certified UI/UX Bootcamp',
    'Online UI/UX Design Class',
    'Live UI/UX Workshops',
    'Create a series of UI/UX Case Studies',
    'Lunch a job-ready Portfolio',
    'Group Support and Feedback',
    '1:1 Feedback'
]

export default function UncomplicatedPrice(){
    return(
        <div className="px-4 my-12">
            <div className="flex flex-col gap-4">
                <TextMedium2 className="font-bold text-default">Straightforward and uncomplicated price</TextMedium2>
                <TextNormal className="gray-2">We take pleasure in being accessible and reasonably priced, in contrast to other courses that hide their costs. Our online Bootcamp pricing is completely clear.</TextNormal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-4 md:gap-8 md:items-center">
                <div className="relative">
                    <div className="absolute bottom-4 left-7">
                        <img src="/web-assets/images/plant-1.png" alt="Plant 1" className="w-24" />
                    </div>
                    <div className="absolute bottom-4 right-7">
                        <img src="/web-assets/images/plant-2.png" alt="Plant 1" className="w-24" />
                    </div>
                    <div className="bg-white p-6 border border-gray-3 w-3/4 mx-auto shadow-md rounded-2xl relative z-10">
                        <div className="flex flex-col gap-5">
                            <TextNormal2 className="font-bold">Upfront Payment</TextNormal2>
                            <div className="flex gap-4">
                                <TextNormal2 className="line-through">Php 25,000</TextNormal2>
                                <TextNormal2>Php 17,000</TextNormal2>
                            </div>
                        </div>
                        <div className="py-4 mt-2 border-b border-gray-5">
                            <div className="grid grid-cols-2">
                                <TextNormal className="gray-4">12-16 week Bootcamp</TextNormal>
                                <TextNormal className="text-right">Php 25,000</TextNormal>
                            </div>
                        </div>
                        <div className="py-4 border-b border-gray-5">
                            <div className="grid grid-cols-2 items-center">
                                <button className="bg-primary-lighter w-fit px-3 py-1 text-primary-darker rounded-xl shadow-md">
                                    Save Today
                                </button>
                                <TextNormal className="text-right">-Php 8,000</TextNormal>
                            </div>
                        </div>
                        <div className="py-4 mt-2 border-b border-gray-5">
                            <div className="grid grid-cols-2">
                                <TextNormal className="gray-4 font-bold">Total</TextNormal>
                                <TextNormal className="text-right font-bold">Php 17,000</TextNormal>
                            </div>
                        </div>
                        <div className="px-2 mt-8">
                            <button className="bg-dark-gray-2 text-white w-full px-2 py-4 rounded-lg">
                                <TextNormal2 className="font-bold">Enroll Now</TextNormal2>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <TextMedium className="font-bold text-primary-2">Be a certified UI/UX Designer</TextMedium>
                    <div className="mt-6 flex flex-col gap-4">
                        {
                            be_a_certified_ui_ux_designer.map((item) => (
                                <div className="text-gray-6 flex gap-2 items-center" key={item}>
                                    <ActionVerified />
                                    <TextNormal2>{item}</TextNormal2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}