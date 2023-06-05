import React from 'react';

const W = 75
const H = W

function Droppable(props) {
  const {width=W*2,height=H*2,bg=randColor(),children,onDragOver,onDrop} = props
  const style = {width,height,backgroundColor:bg,marginLeft:'auto',marginRight:'auto'}
  function handleDragOver(e) {
    e.preventDefault()
    if (typeof(onDragOver)==='function') onDragOver(e)
  }
  function handleDrop(e) {
    e.preventDefault()
    if (typeof(onDrop)==='function') onDrop(e)
  }
  return (
    <div style={style} onDragOver={handleDragOver} onDrop={handleDrop} className="rounded shadow">{children}</div>
  )
}

function randColor() {
  return `#${[...Array(3).keys()].map(e=>(randInt(238)+17).toString(16)).join('')}`
}

function randInt(n=10) {
  return Math.floor(Math.random()*n)
}

export default Droppable;
