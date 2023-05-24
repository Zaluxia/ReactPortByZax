/*import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './App.css'
import './button.css'
export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>('');
    const handleNavItemClick = (sectionId: string) => {
        setActiveSection(sectionId);
      
        // Scroll to the clicked section
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scroll({
            top: sectionElement.offsetTop,
            behavior: 'smooth',
          });
        }
      };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      // Find the section currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.5) {
          currentSection = section.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
        
  return (
    <nav className='navbar'> <div className='nar-text'><div className='nav-text'><h3>I AM ZAX</h3></div> 
    <div className="btn-group">
        <a href="#home" className="btn-flip" data-back="HOME" data-front="HOME"  onClick={() => handleNavItemClick('home')}
              style={{ color: activeSection === 'home' ? '#89abe3ff' : 'inherit' }}
           > </a>
          <a href="#about" className="btn-flip" data-back="ABOUT" data-front="ABOUT" onClick={() => handleNavItemClick('about')}
              style={{ color: activeSection === 'about' ? '#89abe3ff' : 'inherit' }}></a>
          <a href="#education" className="btn-flip" data-back="EDUCATION" data-front="EDUCATION" onClick={() => handleNavItemClick('education')}
              style={{ color: activeSection === 'education' ? '#89abe3ff' : 'inherit' }}></a>
          <a href="#skills" className="btn-flip" data-back="SKILLS" data-front="SKILLS"onClick={() => handleNavItemClick('skills')}
              style={{ color: activeSection === 'skills' ? '#89abe3ff' : 'inherit' }}></a>
          <a href="#contact" className="btn-flip" data-back="CONTACT" data-front="CONTACT"onClick={() => handleNavItemClick('contact')}
              style={{ color: activeSection === 'contact' ? '#89abe3ff' : 'inherit' }}></a>
        </div> 
        </div>
        </nav>
  )
}*/

import React, { useEffect, useState } from 'react';
import './Component/Navbar.css'
import { FiAlignCenter, FiX } from "react-icons/fi";


interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  section1Ref: React.RefObject<HTMLDivElement>;
  section2Ref: React.RefObject<HTMLDivElement>;
  section3Ref: React.RefObject<HTMLDivElement>;
  section4Ref: React.RefObject<HTMLDivElement>;
  section5Ref: React.RefObject<HTMLDivElement>;
  // Add more refs for other sections as needed
}



function Navbar({ scrollToSection, section1Ref, section2Ref, section3Ref, section4Ref, section5Ref }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (section1Ref.current && section1Ref.current.getBoundingClientRect().top < 0) {
        setActiveSection('section1');
      } else if (section2Ref.current && section2Ref.current.getBoundingClientRect().top < 0) {
        setActiveSection('section2');
      } else if (section3Ref.current && section3Ref.current.getBoundingClientRect().top < 0) {
        setActiveSection('section3');
      } else if (section4Ref.current && section4Ref.current.getBoundingClientRect().top < 0) {
        setActiveSection('section4');
      } else if (section5Ref.current && section5Ref.current.getBoundingClientRect().top < 0) {
        setActiveSection('section3');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [section1Ref, section2Ref, section3Ref, section4Ref, section5Ref]);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className='navbar'>
      <div className='nav-text1'><h3>I AM ZAX</h3></div>
      <div className="btn-group">
        <a href="#home" className="btn-flip" data-back="HOME" data-front="HOME" onClick={() => scrollToSection(section1Ref)}
          style={{ color: activeSection === 'home' ? '#89abe3ff' : 'inherit' }}
        > </a>
        <a href="#about" className="btn-flip" data-back="ABOUT" data-front="ABOUT" onClick={() => scrollToSection(section2Ref)}
          style={{ color: activeSection === 'about' ? '#89abe3ff' : 'inherit' }}></a>
        <a href="#education" className="btn-flip" data-back="EDUCATION" data-front="EDUCATION" onClick={() => scrollToSection(section3Ref)}
          style={{ color: activeSection === 'education' ? '#89abe3ff' : 'inherit' }}></a>
        <a href="#skills" className="btn-flip" data-back="SKILLS" data-front="SKILLS" onClick={() => scrollToSection(section4Ref)}
          style={{ color: activeSection === 'skills' ? '#89abe3ff' : 'inherit' }}></a>
        <a href="#contact" className="btn-flip" data-back="CONTACT" data-front="CONTACT" onClick={() => scrollToSection(section5Ref)}
          style={{ color: activeSection === 'contact' ? '#89abe3ff' : 'inherit' }}></a>
      </div>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? (
          <FiX />
        ) : <FiAlignCenter />}
      </div>

    </nav>
  );
}

export default Navbar;
