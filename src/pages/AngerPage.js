
import backgroundAnger from "../assets/images/angry.png"


function AngryPage () {
  return (
    <div
    style={{
      backgroundImage: `url(${backgroundAnger})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>

    <p> Anger page </p>

    </div>
  )
}

export default AngryPage