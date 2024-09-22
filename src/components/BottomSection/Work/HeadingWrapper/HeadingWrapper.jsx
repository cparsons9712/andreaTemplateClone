import './headingWrapper.css';
import { StarFour } from "@phosphor-icons/react";


export const HeadingWrapper = () => {


    return (
        <div className="headingWrapper">

          <StarFour size={24} color="#BEA6E8" weight="fill" />

            <div className='workHeading marque'>

                <div className='marquee__content'>
                    <div>Featured Work</div>
                    <div>Featured Work</div>
                    <div>Featured Work</div>
                    <div>Featured Work</div>
                    <div>Featured Work</div>

                </div>
                <div className='marquee__content aria-hidden="true" '>
                    <div>Featured Work</div>
                    <div>Featured Work</div>
                    <div>Featured Work</div>
                    <div>Featured Work</div>
                    <div>Featured Work</div>

                </div>

            </div>

        {/* //     <div className="workHeading" >
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //     </div>
        //     <div className="workHeading" aria-hidden="true" >
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //         <span className="scrollText">Featured Work</span>
        //     </div> */}
        </div>
    //     <div class="marquee">
    //     <ul class="marquee__content">
    //       <li>1</li>
    //       <li>2</li>
    //       <li>3</li>
    //       <li>4</li>
    //       <li>5</li>
    //       <li>6</li>
    //     </ul>

    //     <ul aria-hidden="true" class="marquee__content">
    //       <li>1</li>
    //       <li>2</li>
    //       <li>3</li>
    //       <li>4</li>
    //       <li>5</li>
    //       <li>6</li>
    //     </ul>
    //   </div>
    );
};
