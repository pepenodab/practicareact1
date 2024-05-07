import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ character }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const newDate = (oldDate) => {
    const date = new Date(oldDate);
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="profile__wrapper">
            <div className="profile__avatar">
              <img src={`src/images/${character.id}.jpeg`} alt="" />
            </div>
            <div className="profile__h3">
              <h3>{character.name}</h3>
            </div>
            <div className="profile__status">
              <p>{character.status}</p>
            </div>
            <div className="profile__learnmore">
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <p>{character.location}</p>
              <p>{newDate(character.created)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  character: PropTypes.object
};

export default Card;
