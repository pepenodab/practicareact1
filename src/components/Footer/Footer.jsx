import PropTypes from 'prop-types';
import style from './footer.module.css';

const Footer = ({ year }) => {
  return (
    <>
      <footer className={style.footer}>
        <p>{year} All right reserved</p>
      </footer>
    </>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired
};

export default Footer;
