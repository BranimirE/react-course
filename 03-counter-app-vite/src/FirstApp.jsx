import PropTypes from 'prop-types';
export const FirstApp = ({title, subtitle}) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

FirstApp.defaultProps = {
  // title: 'There is not title',
  subtitle: 'There is not subtitle'
}
