import "./numbers.css"
import { NumbersBlock } from "./NumbersBlock/NumbersBlock"

export const Numbers = () => {

    return (
        <div className="numbers">
            < NumbersBlock number={"150"} measure = {"+"} item={'Clients'}/>
            < NumbersBlock number={"200"} measure = {"+"} item={'Projects'}/>
            < NumbersBlock number={"100"} measure = {"%"} item={'Client Satisfaction'}/>

        </div>
)}
