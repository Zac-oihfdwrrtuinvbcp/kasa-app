import './Card.scss';
import { Link } from 'react-router-dom';

function Card({ id, cover, title }) {
    return (
        <div className="card">
            <Link to={`/logement/${id}`} className="card__link">
                <div className="card__image-container">
                    <img src={cover} alt={title} className="card__image" />
                </div>
                <h2 className="card__title">{title}</h2>
            </Link>
        </div>
    );
}
export default Card;