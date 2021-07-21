import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom"
import Header from '../components/Header/Header'
import { AddRecipiesPage } from '../pages/AddRecipiesPage/AddRecipiesPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RecipieDetailPage } from '../pages/RecipieDetailPage/RecipieDetailPage'
import { RecipieListPage } from '../pages/RecipiesListPage/RecipieListPage'
import { SingUpPage } from '../pages/SingUpPage/SingUpPage'

const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/singup">
                    <SingUpPage/>
                </Route>
                <Route exact path="/">
                    <RecipieListPage/>
                </Route>
                <Route exact path="/addreceita">
                    <AddRecipiesPage/>
                </Route>
                <Route exact path="/detalhe:id">
                    <RecipieDetailPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
             </Switch>
        </BrowserRouter>
    )
}

export default Router
