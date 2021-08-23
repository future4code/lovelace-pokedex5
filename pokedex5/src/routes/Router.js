import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import PokedexPage from "../pages/PokedexPage"
import DetailPage from '../pages/DetailPage'
import ErrorPage from "../pages/ErroPage"

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/pokedex'>
                    <PokedexPage />
                </Route>

                <Route exact path='/details/:id'>
                    <DetailPage />
                </Route>

                <Route exact path=''>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router