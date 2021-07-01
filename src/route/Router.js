import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Banner from "../pages/banner/Banner";
import ErrorPage from "../pages/errorpage/ErrorPage";
import HomePage from "../pages/homepage/HomePage";
import Register from "../pages/register/Register";
import Skills from "../pages/register/skills/Skills";
import List from "../pages/List-Developers/List";
import { Dviqualquer, DviSkills } from "../App";
import SucessRegister from "../pages/register/SucessRegister";

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Dviqualquer>

            <Route exact path="/">
          <Banner/>
        </Route>

        <Route exact path="/home">
          <HomePage/>
        </Route>

        <Route exact path="/register">
          <Register/>
        </Route>

           <Route exact path = "/list">
          <List/>
        </Route>
       
           <Route exact path = "/sucess">
          <SucessRegister/>
        </Route>
       
      <DviSkills>
          <Route exact path="/skill">
          <Skills/>
        
        </Route> 
      </DviSkills>

         </Dviqualquer>

     

        <Route>
          <ErrorPage/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Router;
