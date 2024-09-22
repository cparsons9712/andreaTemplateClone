import "./serviceLine.css"
import { StarFour } from "@phosphor-icons/react";

export const ServiceLine= ({text}) => {

    return (
        <div className="serviceLine">
            <StarFour size={16} color="#BEA6E8" weight="fill" />

            <span className="lIText">{text}</span>

        </div>
)}
