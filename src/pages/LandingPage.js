
import DraggableComponent from '../components/DraggableComponent';
import backgroundImage from '../assets/images/rainbow.png';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div
      className="LandingPage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h2
        classname="theQuestion"
        style={{
          color: "white"
        }}
        >Hur känner du dig just nu?</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Link to="/anger">
          <DraggableComponent
            image={require('../assets/images/angry.png')}
            emotionValue={1}
          />
          </Link>
          <Link to="/sadness">
          <DraggableComponent
            image={require('../assets/images/sad.png')}
            emotionValue={2}
          />
          </Link>
          <DraggableComponent
            image={require('../assets/images/happy.png')}
            emotionValue={3}
          />
          <DraggableComponent
            image={require('../assets/images/curious.png')}
            emotionValue={4}
          />
          <DraggableComponent
            image={require('../assets/images/disgusted.png')}
            emotionValue={5}
          />
          <DraggableComponent
            image={require('../assets/images/embarassed.png')}
            emotionValue={6}
          />
          <DraggableComponent
            image={require('../assets/images/hate.jpg')}
            emotionValue={7}
          />
          <DraggableComponent
            image={require('../assets/images/resent.png')}
            emotionValue={8}
          />
          <DraggableComponent
            image={require('../assets/images/surprised.png')}
            emotionValue={9}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
