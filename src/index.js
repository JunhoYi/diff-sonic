import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support

import { IntlProvider, addLocaleData } from 'react-intl'
import ko from 'react-intl/locale-data/ko'
import message from './message/ko' 

addLocaleData([...ko])
const defaultLang = localStorage.getItem('lang') || 'ko'

ReactDOM.render(
    <IntlProvider locale={defaultLang} messages={message[defaultLang]}>
            <App />
    </IntlProvider>
, document.getElementById('root'));