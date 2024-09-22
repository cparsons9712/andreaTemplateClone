import "./aboutGrid.css"
import { Introduction } from "./Introduction/Introduction"
import { Services } from "./Services/Services"
import { Tools } from "./Tools/Tools"
import { Experience } from "./Experience/Experience"

export const AboutGrid = () => {

    return (
        <div className="aboutGrid">
            <Introduction />
            <Services />
            <Tools />
            <Experience />
        </div>
)}
