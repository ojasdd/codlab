import React, { useState } from "react";
import Header from './header';
import SortingVisualizer from './Demo'; 
import Pretest from "./pretest";
import Posttest from "./posttest";
import Sidebar from "./Sidebar";
import Introduction from "./Introduction";
import Concept from "./Concept";
import Algorithm from "./Algorithm";

const Tab = ({ label, onClick, isActive }) => (
  <button 
    onClick={onClick} 
    style={{
      padding: "10px 20px",
      cursor: "pointer",
      backgroundColor: isActive ? "#007BFF" : "#f1f1f1",
      color: isActive ? "#fff" : "#000",
      border: "none",
      // outline: "none",
      borderBottom: isActive ? "2px solid #007BFF" : "none",
      fontWeight: isActive ? "bold" : "normal",
      marginLeft: "10px",
      borderRadius: "15px",
      height: "40px"
    }}>
    {label}
  </button>
);

const TabContent = ({ children }) => (
  <div style={{border: "1px solid #ccc", marginTop: "211px",marginLeft: "281px",width: "90%" }}>
    {children}
  </div>
);

const ShellSort = () => {
  const [activeTab, setActiveTab] = useState("Introduction");

  return (
    <div style={{  margin: "0 auto", textAlign: "center" }}>
      <Header />
      <div id="head2">
        <h1 id="topic">Shell Sort</h1>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px", width: "1000px",padding: "20px" }}>
          <Tab label="Introduction" onClick={() => setActiveTab("Introduction")} isActive={activeTab === "Introduction"} />
          <Tab label="Pretest"      onClick={() => setActiveTab("Pretest")} isActive={activeTab === "Pretest"} />
          <Tab label="Concept"      onClick={() => setActiveTab("Concept")} isActive={activeTab === "Concept"} />
          <Tab label="Algorithm"    onClick={() => setActiveTab("Algorithm")} isActive={activeTab === "Algorithm"} />
          <Tab label="Demo"         onClick={() => setActiveTab("Demo")} isActive={activeTab === "Demo"} />
          <Tab label="Posttest"     onClick={() => setActiveTab("Posttest")} isActive={activeTab === "Posttest"} />
        </div>
      </div>
      <div id="main"> 
        <Sidebar />
      
      <TabContent>
        {activeTab === "Introduction" && <div><Introduction /></div>}
        {activeTab === "Pretest" && <div><Pretest/></div>}
        {activeTab === "Concept" && <div><Concept /></div>}
        {activeTab === "Algorithm" && <div><Algorithm /></div>}
        {activeTab === "Demo" && <div><SortingVisualizer /></div>}
        {activeTab === "Posttest" && <div><Posttest/></div>}
      </TabContent>
      </div>
    </div>
  );
};

export default ShellSort;
