import  { Navbar }  from './components/Navbar.js'
import { Hero } from './components/Hero.js';
import { Card } from './components/Card.js';
import bigData from './data.js'

function App() {
  const cards = bigData.map(data => {
    return <Card
              key={data.id}
              {...data}
            />
})

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <div className='cards-list'>
        {cards}
      </div>
      
    </div>
  );
}

export default App;
