import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = props => {
  const { message } = props;

  return (
    <div>
      <span className={css.message}>{message}</span>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
