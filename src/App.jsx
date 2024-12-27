import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Header';
import MainPage from './MainPage';
import Features from './Features';
import Enterprise from './Enterprise';

function App() {
  return (
      <Router>


        <Header />
        
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/Features' element={<Features />} />
          <Route path='/Enterprise' element={<Enterprise />} />
        </Routes>
        
        {/* <Footer /> */}

      </Router>
  );
}

export default App;

