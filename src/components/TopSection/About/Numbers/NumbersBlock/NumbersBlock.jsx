import "./numbersBlock.css"


export const NumbersBlock = ({number, measure, item}) => {

    return (
        <div className="numbersBlock">
            <div className="numberLine"><span className="largeNum">{number}<span className="largeMeasure">{measure}</span></span></div>
            <div className="numberItem">{item}</div>

        </div>
)}
