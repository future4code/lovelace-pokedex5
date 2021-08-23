import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../pages/HomePage"
import Pokedex from "../pages/PokedexPage"
import Detail from '../pages/DetailPage'
import Error from "../pages/ErrorPage"

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/pokedex'>
                    <Pokedex />
                </Route>

                <Route exact path='/details/:id'>
                    <Detail />
                </Route>

                <Route exact path=''>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router