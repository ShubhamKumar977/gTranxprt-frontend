import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/gTranxprt-frontend"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            exact
            path="/gTranxprt-fronend"
            element={
              <>
                {' '}
                <Home />{' '}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
