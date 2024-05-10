import PropTypes from 'prop-types';
import style from './card.module.css';

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
        <div className={style.container}>
          <div className={style.profile__wrapper}>
            <div>
              <img
                src={`src/images/${character.id}.jpeg`}
                alt=""
                className={style.profile__avatar}
              />
            </div>
            <div className={style.profile__name}>
              <h3>{character.name}</h3>
            </div>
            <div className="profile__status">
              <p>{character.status}</p>
            </div>
            <div className={style.profile__information}>
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
