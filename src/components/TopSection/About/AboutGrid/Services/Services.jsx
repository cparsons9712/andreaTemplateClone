import "./services.css"
import { ServiceLine } from "./ServiceLine/ServiceLine"

export const Services= () => {

    return (
        <div className="services">
            <h2>My Services</h2>
            <div>
            <ServiceLine text="Product Design" />
            <ServiceLine text="User Research" />
            <ServiceLine text="Concept Development" />
            <ServiceLine text="User Experience Design" />
            </div>
        </div>
)}
