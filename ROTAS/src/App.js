import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from './Pagina/Pagina1.js'
import Submenu1 from './Pagina/Pagina2.js'
import Submenu2 from './Pagina/Pagina3.js'
import Submenu3 from './Pagina/Pagina4.js'


function App() {
  return (
       <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/pacaembu" component={Submenu1} />
        <Route exact path="/capri" component={Submenu2} />
        <Route exact path="/modelo" component={Submenu3} />
      </Switch>      
      </BrowserRouter>
  )
}

export default App;
