import PropTypes from 'prop-types';

function Header(props) {
  const { name } = props;
  return (
    <div className="TodoList Header">
      {/* <h1>{props.name}</h1> */}
      <h1>{name}</h1>
    </div>
  );
}

Header.defaultProps = {
  name: '기본 이름',
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Header;
