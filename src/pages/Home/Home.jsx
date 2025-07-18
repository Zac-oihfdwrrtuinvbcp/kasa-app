import Banner from '../../components/Banner/Banner'
import banner1 from '../../assets/banner1.jpg'
import Card from '../../components/Card/Card'
import './Home.scss'

import logements from '../../data/logements.json'

function Home() {

  return (
    <main>
        <Banner
          imageUrl={banner1}
          title="Chez vous, partout et ailleurs"
        />
      <div className="home__card-container">
        {logements.map((logement) => (
          <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover}/>
        ))}
      </div>

    </main>
  )
}

export default Home
