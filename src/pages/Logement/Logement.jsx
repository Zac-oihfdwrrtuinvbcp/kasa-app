import logements from "../../data/logements.json";
import { useParams, Navigate } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import Tags from "../../components/Tags/Tags";
import User from "../../components/User/User";
import Rating from "../../components/Rating/Rating";
import "./Logement.scss";

function Logement() {
  const { id } = useParams();

  const foundLogement = logements.find((item) => item.id === id);
  if (!foundLogement) {
    return <Navigate to="/NotFound" />;
  }
  return (
    <div>
        <div className="logement">
          <Gallery images={foundLogement.pictures} />
          <div className="logement__details">
            <div className="logement__details__info">
              <h2 className="logement__details__title">{foundLogement.title}</h2>
              <p className="logement__details__location">{foundLogement.location}</p>
              <Tags tags={foundLogement.tags} />
            </div>
            <div className="logement__details__user">
              <User user={foundLogement.host} />
              <Rating value={foundLogement.rating} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Logement;
