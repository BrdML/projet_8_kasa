import React from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import FetchLogement from '../../utils/hook';
import './index.scss';

/**
 * Composant About - Page à propos.
 * @returns {JSX.Element} Le composant de la page à propos.
 */
function About() {
  const url = '/data/abouts.json';
  const { logementData } = FetchLogement(url);

  return (
    <main className='about'>
      <Banner />
     
      <div className='about__container'>
      {logementData && logementData.map((about, index) => (
        <Collapse key={index} title={about.title} text={about.content}/>
      ))}
      </div>
    </main>
  )
}

export default About;