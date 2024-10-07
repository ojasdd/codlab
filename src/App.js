import './App.css';
import Header from './header';
import Paragraph from './info';
import CardLayout from './Card';
import Footer from './footer';
import './style.css'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// other pages
import ShellSort from './topics/sorting/shell sort/ShellSort'; 

function App() {
  return (
    <Router>
      <div className='app'>
        
        
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <Paragraph />
              <CardLayout />
              <Footer/>
            </div>
          } />
          <Route path="/shellsort" element={<ShellSort />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;