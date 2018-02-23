import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>Meteor-Link-Shortening example</div>
    )
}

Meteor.startup(() =>
    ReactDOM.render(<App />, document.querySelector('.container'))
)