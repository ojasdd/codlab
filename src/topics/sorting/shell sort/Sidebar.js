import React from 'react';
import '../../topics.css';

const Sidebar =() =>{
    return(
        <div id="sidebar">
        <p>other topics</p>
        <div id="menu">
          <button className="topics"><p>Hashing</p></button>
          <button className="topics"><p>Linked List</p></button>
          <button className="topics"><p>Stack and Queue</p></button>
          <button className="topics"><p>Trees</p></button>
          <button className="topics"><p>Graphs</p></button>
        </div>
      </div>
    );
}

export default Sidebar;