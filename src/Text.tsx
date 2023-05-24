import React from 'react'
import { Stage, Layer, Line, Circle, Rect } from 'react-konva'

export default function Text() {
  return (
    <Stage width={1000} height={35}>
                    <Layer>
                      <Circle x={30} y={20} radius={8} fill="#89abe3ff" stroke="black" />
                      <Circle x={80} y={20} radius={8} fill="#89abe3ff" stroke="black" />
                      <Circle x={130} y={20} radius={8} fill="#89abe3ff" stroke="black" />
                      <Circle x={180} y={20} radius={8} fill="#89abe3ff" stroke="black" />
                      <Circle x={230} y={20} radius={8} fill="#89abe3ff" stroke="black" />
                      <Circle x={280} y={20} radius={8} fill="#89abe3ff" stroke="black" />
                      <Circle x={330} y={20} radius={8} fill="#89abe3ff" stroke="black" />
                      <Circle x={380} y={20} radius={8} fill="rgb(248, 239, 237)" stroke="black" />
                      <Circle x={430} y={20} radius={8} fill="rgb(248, 239, 237)" stroke="black" />
                      <Circle x={480} y={20} radius={8} fill="rgb(248, 239, 237)" stroke="black" />
                      <Rect
                        x={330}
                        y={9}
                        width={20}
                        height={22}
                        fill="rgb(248, 239, 237)"
                      />
                      <Circle x={330} y={20} radius={8} stroke="black" />
                    </Layer>
                  </Stage>
  )
}
