import React, { memo } from "react";
import { renderRoutes } from 'react-router-config'
import { HashRouter } from "react-router-dom";
import store from "./store";
import {Provider } from "react-redux";

import Header from "./components/music_header";
import Footer from "./components/music_footer";
import routes from "./router";

const App = memo(function () {
  return (
    <div>
      <Provider store={ store }>
        <HashRouter>
          <Header/>
          { renderRoutes(routes) }
          <Footer/>
        </HashRouter>
      </Provider>
    </div>
  )
})

export default App;
