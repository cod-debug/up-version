import { TextMedium, TextNormal } from "../text/Text";

export default function GraduateCarouselItem({ imageSrc, fullName, position, logoSrc, logoParentClassName, logoClassName, imageHolderClassName }) {
    return(
        <>
            <div>
                <div className="w-full h-full absolute opacity-25 top-0 left-0 rounded-2xl" style={{backgroundImage: 'url(./web-assets/images/graduates/bg.png)'}}></div>
                <div className="aspect-square relative">
                    <div className="design-1"></div>
                    <div className="design-2"></div>
                    <div className="design-3"></div>
                    <div className={`image-holder ${imageHolderClassName}`} style={{backgroundImage: `url(${imageSrc})`}}></div>
                </div>
            </div>
            <div className="text-center mt-4 flex flex-col gap-4 z-10 relative text-default">
                <TextMedium className="font-bold">
                    { fullName }
                </TextMedium>
                <TextNormal>{ position }</TextNormal>
                <div className={logoParentClassName}>
                    <div className={logoClassName + " bg-no-repeat w-[100.44px] h-[50.81px] bg-center"} style={{backgroundImage: `url(${logoSrc})`}}></div>
                </div>
            </div>
        </>
    )
}