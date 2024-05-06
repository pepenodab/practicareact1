import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ year }) => {
  return (
    <>
      <h5>{year} All right reserved</h5>
    </>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired
};

export default Footer;
