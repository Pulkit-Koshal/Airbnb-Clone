import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import StoryCard from "./components/StoryCard"
import data from "./assets/data"
function App() {
  const cardIn = data.map((items)=>{
    return <StoryCard
    key = {items.id}
    items = {items}
    />
  });
  
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardIn}
      </section>
    </>
  )
}

export default App
