import PropTypes from 'prop-types'

const Error = ({message}) => {
    return (
        <div role="alert">
          <p>Whoops, something went wrong. Error: {message}</p>
        </div>
      );
    }
    
    Error.propTypes = {
      message: PropTypes.string.isRequired,
    };

    export default Error