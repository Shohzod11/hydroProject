import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import SimpleReactLightbox from 'simple-react-lightbox'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Scroller from './Containers/Scroller'
import store from './_redux/redux-store'
import App from './App'
import 'mdb-ui-kit/css/mdb.min.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import "antd/dist/antd.css"
import './index.css'

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
      <SimpleReactLightbox>
        <Scroller />
        <App />
      </SimpleReactLightbox>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
