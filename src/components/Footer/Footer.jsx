import PropTypes from 'prop-types';

const Footer = ({ year }) => {
  return (
    <>
      <footer>
        <p>{year} All right reserved</p>
      </footer>
    </>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired
};

export default Footer;
