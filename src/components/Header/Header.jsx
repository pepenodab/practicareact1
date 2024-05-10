import PropTypes from 'prop-types';
import style from './header.module.css';

const Header = ({ title, subtitle }) => {
  return (
    <>
      <header className={style.header}>
        <h2 className={style.header__title}>{title}</h2>
        <p className={style.header__subtitle}>{subtitle}</p>
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
