import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ character }) => {
  const characters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      created: '2017-11-04T18:48:46.250Z'
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      created: '2017-11-04T18:50:21.651Z'
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T19:09:56.428Z'
    },
    {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T19:22:43.665Z'
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: 'Abadango',
      location: 'Abadango',
      created: '2017-11-04T19:50:28.250Z'
    },
    {
      id: 13,
      name: 'Alien Googah',
      status: 'Dead',
      species: 'Alien',
      gender: 'Male',
      origin: 'unknown',
      location: 'Earth (Replacement Dimension)',
      created: '2017-11-04T20:33:30.779Z'
    }
  ];
  if (character == characters.name) {
    return (
      <>
        <div></div>
      </>
    );
  } else {
    return;
  }
};

Card.propTypes = {
  character: PropTypes.object
};

export default Card;
