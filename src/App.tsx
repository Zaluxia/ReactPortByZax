import React, { RefObject, useEffect, useRef, useState } from 'react';
import './App.css';
import './Switch.css';
import './button.css'
import Text from './Text';
import Person from './2.png';
import Person1 from './stand.jpg';
import ReactTypingEffect from 'react-typing-effect';
import logo1 from './logo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { Stage, Layer, Line, Circle, Rect } from 'react-konva'
import Navbar from './Navbar';
import ShowS from './ShowS';

function App() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  // Add more refs for other sections as needed

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonClick = (sectionRef: React.RefObject<HTMLDivElement>) => {
    scrollToSection(sectionRef);
  };
  /*
         <Navbar /> 
    */
         const [title, setTitle] = useState("I AM ZAX");

         useEffect(() => {
           // This will run when the page first loads and whenever the title changes
           document.title = title;
         }, [title]);

  return (
      <div className='grid' >
      <Navbar scrollToSection={scrollToSection} section1Ref={section1Ref} section2Ref={section2Ref} 
      section3Ref={section3Ref} section4Ref={section4Ref} section5Ref={section5Ref}/>
      

        <div className="image-wrapper">
          <img src={Person} alt=" " className="grid-img" />
         
        </div>

<div className='grid-info'>
  <div className='grid-text'>
        <div ref={section1Ref}>
            <div className='grid-text1'>
              <br />
              <br />
              <br />
              <div className='text-with-shadow'> <h1 style={{ fontSize: '55px' }} >Ratthapon <br /> Thawa</h1></div>
             
          
              <ReactTypingEffect
                text={["Web Developer.", "Programmer."]}
                displayTextRenderer={(text) => {
                  return (
                    <h1>
                      {text.split('').map((char, i) => {
                        return (
                          <span
                            style={{ color: '#8585da' }}
                          >{char}</span>
                        );
                      })}
                    </h1>
                  );
                }}
                speed={100}
                eraseSpeed={200}
                cursorClassName="custom-cursor"
                className='typewriter'
              />
              <h2 >I'am Zax</h2>
              <div className='grid-text2'>I'm looking work place for Cooperative Education
                Program. I'm ready to learn and improve new skills. I
                want work experience to increase skills that I already
                have. For now I use React.js and Node.js for create my
                own website.</div>
                <br />
            <button className='button1' onClick={() => handleButtonClick(section5Ref)}><h1> CONTACT ME </h1></button>
              <br />
              <br />
            </div>
          </div>

          <div ref={section2Ref}>
          <br />
          <br />
          <hr />
          <div className='grid-text1' >
          
              <h1 style={{ fontSize: '50px', }}> About Me</h1>
              <div className='grid-text2'>I'm a undergraduate student of KMUTNB.I have learn about JAVA,C,SQL,HTML and JAVAC in classroom.And
                I learn React JavaScript by use it in final project.I can use VSCode,NetBean and Mathlab. </div>
              <div className='about'>
                <div className='contect-head'><h4>AGE:</h4></div>
                <div className='contect'><h4>23</h4></div>
                <div className='contect-head'><h4>PHONE:</h4></div>
                <div className='contect'><h4>0926867508</h4></div>
                <div className='contect-head'><h4>ADDRESS:</h4></div>
                <div className='contect'><h4>Phachi,Ayutthaya</h4></div>
                <div className='contect-head'><h4>EMAIL:</h4></div>
                <div className='contect'><h4>zax_ratthapon@hotmail.com</h4></div>
              </div>
            </div>
          </div>

          <div ref={section3Ref}>
            <br />
            <br />
            <hr />

            <div className='grid-text1' >
              <h1 style={{ fontSize: '50px', }}>Education</h1>
              <h3>King Mongkut's university of technology north Bangkok.</h3>
              <h3>2018-present.</h3>
              <div className='about1'>

                  <div className='ed-head'><h4>Faculty:</h4></div>
                <div className='education'><h4>The College of Industrial Technology (CIT).</h4></div>
                <div className='ed-head'><h4>Bachelor:</h4></div>
                <div className='education'><h4>Electronics Engineering Technology (EnET).</h4></div>
                <div className='ed-head'><h4>Major:</h4></div>
                <div className='education'><h4>Electronics Engineering Technology (Computer).</h4></div>
                <div className='ed-head'><h4>GPA:</h4></div>
                <div className='education'> <h4>2.25</h4> </div>
              </div>
            </div>
          </div>

          <div ref={section4Ref}>
            <br />
            <br />
            <hr />

            <ShowS />
          </div>
          <br />
          <hr />

          <div ref={section5Ref}>
            <div className='grid-text1' >
              <h1 style={{ fontSize: '50px', }}>Contact</h1>
              <div className='about'>
                <div className='contect-head'><h4>AGE:</h4></div>
                <div className='contect'><h4>23</h4></div>
                <div className='contect-head'><h4>PHONE:</h4></div>
                <div className='contect'><h4>0926867508</h4></div>
                <div className='contect-head'><h4>ADDRESS:</h4></div>
                <div className='contect2'><h4>5,Moo 4,Sub-district Donyanang,District Phachi,Ayutthaya</h4></div>
                <div className='contect1'><h4>5,Moo 4, <br /> Sub-district Donyanang, <br /> District Phachi, <br /> Ayutthaya</h4></div>
                <div className='contect-head'><h4>EMAIL:</h4></div>
                <div className='contect'><h4>zax_ratthapon@hotmail.com</h4></div>
              </div>
            </div>
          </div>

          <br />
          <hr />
        </div>
        </div>
        
      </div>

  );
}

/*
        <div className='App-header' >
            <label className="switch">
              <input type="checkbox" id="toggleSwitch" onClick={BGSwitch} />
              <span className="slider round"></span>
            </label>
          </div>
*/

export default App;
