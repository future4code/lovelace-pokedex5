import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
import DetailPage from '../pages/DetailPage/DetailPage'
import ErrorPage from "../pages/ErroPage/ErrorPage"

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