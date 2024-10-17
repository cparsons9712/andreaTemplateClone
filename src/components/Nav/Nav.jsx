import "./Nav.css";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Nav = () => {

    useEffect(() => {
        const navbar = document.getElementById('navbar');

        gsap.to(navbar, {
          scrollTrigger: {
            trigger: "#target",
            start: "top top", // Starts when #targetSection hits the top of the viewport
            onEnter: () => navbar.classList.add("scrolled"),
            onLeaveBack: () => navbar.classList.remove("scrolled"),
          },
        });
      }, []); // Empty dependency array to run only once

    return (
    <div className="navContainer" id="navbar">
        <div className="navLeft">Andrea</div>
        <div className="navRight">
            <div className="link">Home</div>
            <div className="link">Work</div>
            <div className="link">Contact</div>
        </div>
    </div>

    )}
