import "./toolLine.css"


export const ToolLine = ({image, title}) => {

    return (
        <div className="toolLine">
            <img src={image} />
            <div>{title}</div>
        </div>
)}
