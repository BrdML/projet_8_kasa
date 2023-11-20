import FetchLogement from '../../utils/hook';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Stars from '../../components/RatingStars';
import Tags from '../../components/Tags';
import Collapse from '../../components/Collapse';
import './index.scss';

/**
 * Composant Logement - Page qui affiche les détails d'un logement.
 * @returns {JSX.Element} Le composant de la page de détails du logement.
 */
function Logement() {
    const url = '/data/logements.json';
    const { logementData } = FetchLogement(url);
    const { id } = useParams();
    const filteredLogements = logementData.filter((logement) => logement.id === id);
    const navigate = useNavigate();
    
  
    console.log('id =',id)
    console.log('filteredLogements =',filteredLogements)

    if (!filteredLogements || filteredLogements.length === 0) {
      navigate('/error');
    }
    
    return (
      <div>
        {filteredLogements && filteredLogements.map((logement, index) => (
          <main className='logement' key={index}>
            <Carousel images={logement.pictures} alt={logement.title} />
    
            <div className='logement__infos'>
              <div className='logement__text'>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
                <Tags tags={logement.tags}/>
              </div>
              <div className='host'>
                <div className='host__name'>
                  <span>{logement.host.name}</span>
                  <img className='host__img' src={logement.host.picture} alt="photo hote logement" />
                </div>
                <Stars numberOfStars={logement.rating}/>
              </div>
            </div>

            <div className='collapse_container'>
              <Collapse title='Description' text={logement.description}/>
              <Collapse title='Équipements' text={logement.equipments}/>
            </div>
          </main>
        ))}
      </div>
    )
}

export default Logement;