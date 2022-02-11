import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greeting, subtitle }) => {
    return (
        <>
            <h1>{greeting}</h1>
            <h3>{subtitle}</h3>
        </>
    )
}
FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'This is a sub-title'
}

export default FirstApp;