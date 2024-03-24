import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Explore from './Explore';
import About from './About';
import Forum from './Forum';
import CreatePost from './CreatePost';
import ShowPost from './ShowPost';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreatePost />
      <About />
      <Explore />
      <Home />
      <ShowPost />
    </div>
  );
}

export default App;
