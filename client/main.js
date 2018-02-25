import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import { Links } from '../imports/collections/links';


const App = () => {
    return (
        <div>
            <AppHeader />
            <LinkForm />
            <LinkList />
        </div>
    )
}

Meteor.startup(() =>
    ReactDOM.render(<App />, document.querySelector('.container'))
)