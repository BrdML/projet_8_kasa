import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import FetchLogement from '../../utils/hook';
import './index.scss';

/**
 * Composant Home - Affiche la page d'accueil avec une bannière et une galerie de cartes.
 * @returns {JSX.Element} Le composant de la page d'accueil.
 */
function Home() {

  const url = '/data/logements.json';
  const { logementData, error } = FetchLogement(url);
  // console.log(logementData)

  if (error) {
    return <div>Une erreur s'est produite </div>;
  }

  return (
    <main className='home'>
      <Banner />
      <div className='home__gallery'>
        {logementData && logementData.map((logement, index) => (
          <Card picture={logement.cover} title={logement.title} key={logement.id} id={logement.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home;