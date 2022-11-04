import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Principal from "./componentes/Principal";
import Contato from "./componentes/Contato";
import Destinos from "./componentes/Destinos";
import Promos from "./componentes/Promos";

function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/index" exact component={Principal} />
                <Route path="/destinos" component={Destinos} />
                <Route path="/promos" component={Promos} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
};

export default Rotas;