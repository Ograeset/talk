

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import AngerPage from './pages/AngerPage'
import HappyPage from './pages/HappyPage'
import Hatepage from './pages/HatePage'
import SurprisedPage from './pages/SurprisedPage'
import ShamePage from './pages/ShamePage'
import SadPage from './pages/SadPage'
import DisgustedPage from './pages/DisgustedPage'
import ResentPage from './pages/ResentPage'
import CuriousPage from './pages/CuriousPage'


function App() {
  return (
    
      <Router>
        <div className="App">
          <div className="content">
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/happy" element={<HappyPage/>}/>
              <Route path="/hate" element={<Hatepage />}/>
              <Route path="/anger" element={<AngerPage />}/>
              <Route path="/surprise" element={<SurprisedPage />}/>
              <Route path="/shame" element={<ShamePage />}/>
              <Route path="/sadness" element={<SadPage />}/>
              <Route path="/resent" element={<ResentPage />}/>
              <Route path="/disgust" element={<DisgustedPage />}/>
              <Route path="/curious" element={<CuriousPage />}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

export default App;
  