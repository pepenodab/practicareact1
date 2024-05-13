import PropTypes from 'prop-types';
import style from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faComment,
  faPerson,
  faMars,
  faVenus,
  faLocationDot,
  faCalendarDay
} from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

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

  const isAlive = character.status == 'Alive' ? 'isAlive' : 'isDead';
  const isHuman = character.species == 'Human' ? faPerson : faRedditAlien;
  const isMale = character.gender == 'Male' ? faMars : faVenus;

  return (
    <>
      <div className="profile">
        <div className={style.container}>
          <div className={style.profile__wrapper}>
            <div className={style.profile__id}>
              <div>
                <img
                  src={`src/images/${character.id}.jpeg`}
                  className={style.profile__avatar}
                />
              </div>
              <div>
                <div className={style.profile__name}>
                  <h3>{character.name}</h3>
                </div>
                <div className={`${style.profile__status} ${style[isAlive]}`}>
                  <p>
                    <b>{character.status}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className={style.profile__information}>
              <p>
                <FontAwesomeIcon icon={isHuman} className={style.icons} />
                <b>{character.species}</b>
              </p>
              <p>
                <FontAwesomeIcon icon={isMale} className={style.icons} />
                <b>{character.gender}</b>
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} className={style.icons} />
                <b>{character.location}</b>
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarDay} className={style.icons} />
                <b>{newDate(character.created)}</b>
              </p>
            </div>
            <div className={style.profile__buttons}>
              <button className={style.button_profile_background}>
                <a href="#" className={style.button_profile}>
                  <FontAwesomeIcon icon={faUser} /> Perfil
                </a>
              </button>
              <button className={style.button_contact_background}>
                <a href="#" className={style.button_contact}>
                  <FontAwesomeIcon icon={faComment} /> Contacto
                </a>
              </button>
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
