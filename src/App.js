import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import userData from "./data.js"
import './App.css';

function App() {
  const card = userData.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )


  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {card}
      </section>
    </div>
  );
}

export default App;
