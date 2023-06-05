import DraggableComponent from "../components/DraggableComponent";
import Droppable from "../components/Droppable";
import backgroundImage from '../assets/images/rainbow.png';
function LandingPage() {
  return(

<div className="LandingPage"
style={{
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
}}

>
  
      <DraggableComponent image={require("../assets/images/angry.png")} emotionValue={1}/>
      <DraggableComponent image={require("../assets/images/sad.png")} emotionValue={2}/>
      <DraggableComponent image={require("../assets/images/happy.png")} emotionValue={3}/>
      <DraggableComponent image={require("../assets/images/curious.png")} emotionValue={4}/>
      <DraggableComponent image={require("../assets/images/disgusted.png")} emotionValue={5}/>
      <DraggableComponent image={require("../assets/images/embarassed.png")} emotionValue={6}/>
      <DraggableComponent image={require("../assets/images/hate.jpg")} emotionValue={7}/>
      <DraggableComponent image={require("../assets/images/resent.png")} emotionValue={8}/>
      <DraggableComponent image={require("../assets/images/surprised.png")} emotionValue={9}/>
      </div>
  )
}
      export default LandingPage;