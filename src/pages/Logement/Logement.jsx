import logements from '../../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
   //const [logement, setLogement] = useState(null);
//   useEffect(() => {
//     const foundLogement = logements.find(item => item.id === id);
//     setLogement(foundLogement);
//   }, [id]);
    const foundLogement = logements.find(item => item.id === id);
    if (!foundLogement) {
        return <Navigate to="/NotFound" />;
    } 
        return (
            <div>
            <h1>Logement</h1>
            {foundLogement ? (
                <div>
                    <img src={foundLogement.cover} alt={foundLogement.title} />
                <h2>{foundLogement.title}</h2>
                <p>{foundLogement.description}</p>
                </div>
            ) : (
                <p>Logement non trouvé</p>
            )}
            </div>
        );
    
}

export default Logement;