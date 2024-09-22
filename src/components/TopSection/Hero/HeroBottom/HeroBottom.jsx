import "./heroBottom.css"
import { CallToAction } from "./CallToAction/callToAction"
import { HeroImage } from "./HeroImage/HeroImage"
import { SocialLinks } from "./SocialLinks/SocialLinks"

export const HeroBottom = () => {

    return (
        <div className="heroBottom">
            <CallToAction />
            <HeroImage />
            <SocialLinks />

        </div>
)}
