import './workTable.css'
import { ProjectCard } from './ProjectCard/ProjectCard'
import { SortDescending } from '@phosphor-icons/react'



export const WorkTable = () => {

    return (
        <div className="workTable">
            <ProjectCard name="Moon" image="https://framerusercontent.com/images/4VKqyXX1fcugFHuEe4lGBSmgOa4.jpg?lossless=1" catagory={["Product Design,", "Brand Design"]}/>

            <ProjectCard name="Shining" image="https://framerusercontent.com/images/trc0KLRa4LnYkFJO9d8V2nIHTw.jpg?scale-down-to=2048&lossless=1" catagory={["Product Design,", "Brand Design"]}/>

            <ProjectCard name="Wisdom" image="https://framerusercontent.com/images/FKkmLeLxvkoUfZIAUBSPP1Gwz58.jpg?lossless=1" catagory={["Product Design,", "Brand Design"]}/>

            <ProjectCard name="Miracle" image="https://framerusercontent.com/images/FRWuper0hmhPJ2lEoJJfq377v50.jpg?lossless=1" catagory={["Product Design,", "Brand Design"]}/>


        </div>
)}
