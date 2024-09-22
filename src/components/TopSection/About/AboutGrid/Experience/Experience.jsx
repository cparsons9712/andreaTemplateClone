import "./experience.css"
import { ExpRow } from "./ExpRow/ExpRow"

export const Experience = () => {

    return (
        <div className="experience">
            <h2>Experience</h2>
            <div className="experienceTable">
                <ExpRow company="Google" role="User Researcher" when="2013-2015"/>
                <ExpRow company="Airbnb" role="UX Designer" when="2015-2017"/>
                <ExpRow company="Nike" role="Product Designer" when="2018-2019"/>
                <ExpRow company="Freelance" role="Product Designer" when="Present"/>

            </div>

        </div>
)}
