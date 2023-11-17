import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = props => {
  const { title, children } = props;

  return (
    <section className={css.section}>
      <h2 className={css.header}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
