import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom"

import { PostDetail } from '../pages/PostDetail/PostDetail'
import { PostList } from '../pages/PostList/PostList'
import  SignIn from '../pages/SignIn/SignIn' 
import { Error } from '../pages/Error/Error'
import { AddPost } from '../pages/AddPost/AddPost'
import Header from '../components/Header/Header'
import LoginPage from '../pages/Login/LoginPage'

const Router = () => {
    return (
       <BrowserRouter>
       <Header/>
       <Switch>
           <Route exact path="/login">
               <LoginPage/>
           </Route>
           <Route exact path="/signin">
               <SignIn/>
           </Route>
           <Route exact path="/">
               <PostList/>
           </Route>
           <Route exact path="/addpost">
               <AddPost/>
           </Route>
           <Route exact path="/post/:id">
               <PostDetail/>
           </Route>
           <Route exact path="">
               <Error/>
           </Route>
       </Switch>
       </BrowserRouter>
    )
}


export default Router