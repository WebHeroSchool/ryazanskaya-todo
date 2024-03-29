import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Application } from './components/application/application';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('root')
);
