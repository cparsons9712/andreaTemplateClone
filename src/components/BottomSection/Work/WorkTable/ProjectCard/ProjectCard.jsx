import './projectCard.css'
import { ArrowElbowDownRight } from '@phosphor-icons/react';

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
                    <div className='catagoryList'>
                        {categories.map((element, index) => (
                            <div key={index}>{element} </div>
                        ))}
                    </div>
                </div>

                <div className='elbowArrow'><ArrowElbowDownRight size={32} /></div>

                
            </div>

        </div>
)}
