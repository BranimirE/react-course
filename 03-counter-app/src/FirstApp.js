import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greeting }) => {
    return (
        <>
            <h1>{greeting}</h1>
            <h3>This is a sub-title</h3>
        </>
    )
}
FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

export default FirstApp;