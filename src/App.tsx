import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './element-variables.scss';
import FtTop from "./routes/FtTop";

Amplify.configure(awsmobile);

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={FtTop}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App, true);
