import './projectCard.css'

export const ProjectCard = ({name, image}) => {

    return (
        <div className="projectCard">
            <img src={image} alt={name} className='workImg'/>

        </div>
)}
