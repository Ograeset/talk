console.clear()

const W = 75
const H = W

function Draggable(props) {
  const {width=W,height=H,bg=randColor(),children,onDragStart,onDragEnd,value} = props
  const style = {width,height,backgroundColor:bg,marginLeft:'auto',marginRight:'auto'}
  
  function handleDragStart(e) {
    if (typeof(onDragStart)==='function') onDragStart(e,value)
  }
  
  function handleDragEnd(e) {
    if (typeof(onDragEnd)==='function') onDragEnd(e)
  }
  
  return (
    <div onDragStart={handleDragStart} onDragEnd={handleDragEnd} className="rounded shadow" style={style} draggable><div>{children}</div>{(!!value||value===0)&&<h1 className="text-center text-white text-shadow">{value}</h1>}</div>
  )
}

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

const TITLE = 'ReactJS: Draggable and Droppable'
const LEAD = ''
const DEG = randInt(360)
const BG = [randColor(),randColor()]

function App() {
  
  const [r,setR] = React.useState(randInt())
  const [value,setValue] = React.useState()
  const [list,setList] = React.useState([])
  
  function handleDragStart(e,v) {
    setValue(v)
  }
  
  function handleDragEnd(e) {
    setValue()
  }
  
  function handleDragOver(e) {
    
  }
  
  function handleDrop(e) {
    if (typeof(value)==='number') {
      setList([...list,value])
      setR(randInt())
    }
  }
  
  return (
    <FlexContainer deg={DEG} bg={BG}>
      <div className="container">
        <div className="h1 text-center text-white text-shadow">{TITLE}</div>
        <p className="lead text-center text-light text-shadow">{LEAD}</p>
        <div className="p-3 bg-white rounded shadow">
          <div className="text-center mb-3">Currently dragging {(!!value||value===0)?value:'nothing'}</div>
          <div className="row">
            <div className="col-3">
              <Draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} value={r}>
                <div className="text-center text-white text-shadow">Drag me</div>
              </Draggable>
            </div>
            <div className="col-9">
              <Droppable onDrop={handleDrop} onDragOver={handleDragOver}>
                <div className="text-center text-white text-shadow">{list.length>0?'You have dropped':'You may drop something into me'}</div>
                <div className="h3 text-center text-white text-shadow">{list.join(', ')}</div>
              </Droppable>
            </div>
          </div>
        </div>
      </div>
    </FlexContainer>
  )
}

function FlexContainer(props) {
  const {children,deg=randInt(360),bg,style={}} = props
  if (Array.isArray(bg)&&bg.length>0) {
    style.background = `linear-gradient(${deg}deg,${bg.join(',')})`
  }
  return (
    <div className="d-flex align-content-center align-items-center justify-content-center flex-wrap w-100 v-100 vh-100" style={style}>{children}</div>
  )
}

function Details(props) {
  const {summary='details',children,className=''} = props
  return (
    <details className={className}><summary>{summary}</summary><div className="mt-3 animated faster slideInDown">{children}</div></details>
  )
}

function PreCode(props) {
  const {ugly,className='',children} = props
  
  if (typeof(children)==='object'&&children!==null) {
    if (ugly) {
      return (
        <PreCode {...props}>{JSON.stringify(children)}</PreCode>
      )
    }
    return (
      <PreCode {...props}>{JSON.stringify(children,null,2)}</PreCode>
    )
  }
  
  return (
    <pre className={`p-3 bg-dark text-white rounded shadow ${className}`}><code>{children}</code></pre>
  )
}

function randInt(n=10) {
  return Math.floor(Math.random()*n)
}

function randColor() {
  return `#${[...Array(3).keys()].map(e=>(randInt(238)+17).toString(16)).join('')}`
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);