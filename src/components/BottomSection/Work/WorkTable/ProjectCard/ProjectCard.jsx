import './projectCard.css'

export const ProjectCard = ({name, image, catagory}) => {
    const categories = Array.isArray(catagory) ? catagory : [];


    return (
        <div className="projectCard">
            <img src={image} alt={name} className='workImg'/>
            <div className='projectInfo'>
                <div className="projectTitleWrapper">
                    <div className='projectTitle'>{name}</div>
                    <div className='projectYear'>2024</div>
                </div>

                <div className="catagories">
                    {categories.map((element, index) => (
                        <div key={index}>{element} </div>
                    ))}
                </div>
            </div>

        </div>
)}
