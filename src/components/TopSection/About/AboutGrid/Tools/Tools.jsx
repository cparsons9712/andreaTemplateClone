import "./tools.css"
import { ToolLine } from "./ToolLine/ToolLine"

export const Tools = () => {

    return (
        <div className="tools">
            <div className="toolTitle"> Tools I Specialize in</div>
            <div className="toolItems">
                <div className="column">
                    <ToolLine image="https://framerusercontent.com/images/ehLP8mZkO2ftK4i3EqvjWRLRPQI.png?scale-down-to=512" title="Figma"/>
                    <ToolLine image="https://framerusercontent.com/images/hJOHiLkks19qoiWIahROzWcplvk.png?scale-down-to=512" title="Photoshop"/>
                    <ToolLine image="https://framerusercontent.com/images/yfYHsFsBtUUcgeTdCWuTgm63U.png" title="Notion"/>
                </div>

                <div className="column">
                    <ToolLine image="https://framerusercontent.com/images/hBVaEEI2ZL8BAPW9pPn6Mt36BU.png" title="Framer"/>
                    <ToolLine image="https://framerusercontent.com/images/qezqFQ2rKEiDsA0HhFy2fhIY84.png?scale-down-to=512" title="Illustrator"/>
                </div>
            </div>

        </div>
)}
