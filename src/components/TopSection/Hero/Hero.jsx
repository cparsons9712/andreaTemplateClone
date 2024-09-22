import "./hero.css"
import { HeroTop } from "./HeroTop/HeroTop"
import { HeroBottom } from "./HeroBottom/HeroBottom"


export const Hero = () => {

    return (
        <div className="hero">

            <HeroTop />
            <HeroBottom />

        </div>
)}
