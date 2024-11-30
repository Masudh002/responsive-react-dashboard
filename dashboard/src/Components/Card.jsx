import PropTypes from 'prop-types';
const Card = ({ value,icon,title}) => {
  return (
    <div className=' bg-white text-black p-4 rounded-lg shadow-md flex items-center space-x-6
      dark:bg-gray-900 dark:text-white'>
        <div className=' text-3xl text-gray-500'>{icon}</div>
        <div>
            <h1 className=' text-lg font-semibold'>{title}</h1>
            <p className=' text-xl'>{value}</p>
        </div>
    </div>
  )
}
// PropTypes validation
Card.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allows string or number for value
    icon: PropTypes.node.isRequired, // icon should be a React node (e.g., JSX element)
    title: PropTypes.string.isRequired, // title should be a string
  };

export default Card
