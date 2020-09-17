import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderHouses = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId),
    );
    serviceWorker.unregister();
};

window.unmountHouses = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Houses-container')) {
    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.unregister();
}