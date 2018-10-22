import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { envService } from 'services';

envService.load().then(() => render(<App />, document.getElementById('root')));
