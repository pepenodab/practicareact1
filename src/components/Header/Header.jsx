import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title, subtitle }) => {
  return (
    <>
      <h2>{title}</h2>
      <h5>{subtitle}</h5>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
