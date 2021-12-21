import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Application from './components/application';
import Assessment from './components/assessment';
import Discussion from './components/discussion';
import Home from './components/home';
import Login from './components/login';
import Suggestion from './components/suggestion';
import React from 'react';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/application" element={<Application/>} />
          <Route exact path="/assessment" element={<Assessment/>} />
          <Route exact path="/discussion" element={<Discussion/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/suggestion" element={<Suggestion/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
