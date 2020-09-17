import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderAccounts = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId),
    );
    serviceWorker.unregister();
};

window.unmountAccounts = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Accounts-container')) {
    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.unregister();
}