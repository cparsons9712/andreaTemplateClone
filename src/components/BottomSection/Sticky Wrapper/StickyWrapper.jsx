import './stickyWrapper.css'
import { ArrowUpRight } from '@phosphor-icons/react'

export const StickyWrapper = () => {

    return (
        <div className="stickyWrapper">
            <div className='footer'>
                <div className='contactCTA'>
                    <div className='footerCTA'>GET IN TOUCH</div>
                    <ArrowUpRight size={120} weight="bold" className="dynamicIcon"/>
                </div>

                <div className="footerLinks">
                    <div className='link socials'>Twitter</div>
                    <div className='link socials'>Behance</div>
                    <div className='link socials'>Dribble</div>
                </div>
            </div>

        </div>
)}
