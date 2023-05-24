import React from 'react'
import './App.css'
import './Component/Skills.css'
import { Stage, Layer, Line, Circle, Rect } from 'react-konva'


export default function ShowS() {
    return (
        <>
        <div className='grid-text1' >
            <h1 style={{ fontSize: '50px', }}>Language Skills</h1>
            <h3 style={{ color: '#8585da' }}>Read and write</h3>
            <div className='LSkills'>
                <div><h4>Thai</h4></div>
                <div> <h4>English</h4></div>
            </div>
        </div>
            <br />
            <hr />


            <div className='grid-text1' >
                <h1 style={{ fontSize: '50px', }}>Coding Skills</h1>
                <div className='item1'>*Rank of Skills wills show how that skills I good more than another skills. </div>
                <div><h4>JAVA</h4>
                    <div className='skills-dot'>
                      <div className='skills-text'> <div className='begin'>Beginner</div> <div className='ep'>Expert</div> </div> 
                    <div className='item1'>
                      <Stage width={1000} height={35}>
                    <Layer>
                      <Circle x={30} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={80} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={130} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={180} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={230} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={280} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={330} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={380} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={430} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={480} y={20} radius={8} fill="#373b40" stroke="black" />
                    </Layer>
                  </Stage></div>
                    </div>
                </div>
                <div><h4>JAVASCRIPT</h4>
                    <div className='skills-dot'>
                    <div className='skills-text'> <div className='begin'>Beginner</div> <div className='ep'>Expert</div> </div> 
                    <div className='item1'>
                      <Stage width={1000} height={35}>
                    <Layer>
                      <Circle x={30} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={80} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={130} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={180} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={230} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={280} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={330} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={380} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={430} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={480} y={20} radius={8} fill="#373b40" stroke="black" />
                    </Layer>
                  </Stage></div>
                    </div>
                </div>
                <div><h4>HTML</h4>
                    <div className='skills-dot'>
                       <div className='skills-text'> <div className='begin'>Beginner</div> <div className='ep'>Expert</div> </div> 
                    <div className='item1'><Stage width={1000} height={35}>
                    <Layer>
                      <Circle x={30} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={80} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={130} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={180} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={230} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={280} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={330} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={380} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={430} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={480} y={20} radius={8} fill="#373b40" stroke="black" />
                    </Layer>
                  </Stage></div>
                    </div>
                </div>
                <div><h4>CSS</h4>
                    <div className='skills-dot'> <div className='skills-text'> <div className='begin'>Beginner</div> <div className='ep'>Expert</div> </div> 
                    <div className='item1'><Stage width={1000} height={35}>
                    <Layer>
                      <Circle x={30} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={80} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={130} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={180} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={230} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={280} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={330} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={380} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={430} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={480} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Rect
                        x={230}
                        y={9}
                        width={20}
                        height={22}
                        fill="#373b40"
                      />
                      <Circle x={230} y={20} radius={8} stroke="black" />
                    </Layer>
                  </Stage></div>
                    </div>
                </div>
                <div><h4>PHP</h4>
                    <div className='skills-dot'> <div className='skills-text'> <div className='begin'>Beginner</div> <div className='ep'>Expert</div> </div> 
                    <div className='item1'><Stage width={1000} height={35}>
                    <Layer>
                      <Circle x={30} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={80} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={130} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={180} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={230} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={280} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={330} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={380} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={430} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={480} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Rect
                        x={330}
                        y={9}
                        width={20}
                        height={22}
                        fill="#373b40"
                      />
                      <Circle x={330} y={20} radius={8} stroke="black" />
                    </Layer>
                  </Stage></div>
                    </div>
                </div>
                <div><h4>C</h4>
                    <div className='skills-dot'> <div className='skills-text'> <div className='begin'>Beginner</div> <div className='ep'>Expert</div> </div> 
                    <div className='item1'>
                      <Stage width={1000} height={35}>
                    <Layer>
                      <Circle x={30} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={80} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={130} y={20} radius={8} fill="#8585da" stroke="black" />
                      <Circle x={180} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={230} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={280} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={330} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={380} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={430} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Circle x={480} y={20} radius={8} fill="#373b40" stroke="black" />
                      <Rect
                        x={330}
                        y={9}
                        width={20}
                        height={22}
                        fill="#373b40"
                      />
                      <Circle x={330} y={20} radius={8} stroke="black" />
                    </Layer>
                  </Stage></div>
                    </div>
                </div>

                <h1 style={{ fontSize: '50px', }}>Program</h1>
                <div><h4>VScode</h4></div>
                <div><h4>NETbean</h4></div>
                <div><h4>Arduino</h4></div>
                <div><h4>MATLAB</h4></div>
            </div>
            </>

    )
}
