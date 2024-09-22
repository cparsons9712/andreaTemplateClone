import "./expRow.css"


export const ExpRow = ({company, role, when}) => {

    return (
        <div className="expRow">
            <div className="company">
                {company}
            </div>
            <div className="role">
                {role}
            </div>
            <div className="when">
                {when}
            </div>


        </div>
)}
