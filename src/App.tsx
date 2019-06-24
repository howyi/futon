import React from 'react';
import './App.css';

import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './element-variables.scss';
import FtTop from "./routes/FtTop";
import {Layout, Menu} from "element-react";
import FtRank from "./routes/FtRank";
const querystring = require('querystring');

Amplify.configure(awsmobile);

class App extends React.Component {

    private onSelect(index: any) {
        if (index === '0') {
            // redirect
            console.log('redirect');

            const url = awsmobile.aws_cloud_logic_custom[1].endpoint + '/slack-authorize';
            const query = querystring.stringify({
                state:  window.location.href
            });

            window.location.href = url + '?' + query;
        }
        console.log(index);
    }

    public render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout.Row>
                        <Layout.Col span="4">
                            <Menu defaultActive="2" className="el-menu-vertical-demo" onSelect={this.onSelect.bind(this)} >
                                <Link to="/"><Menu.Item index="Home">Home</Menu.Item></Link>
                                <Menu.Item index="0" style={{backgroundColor: '#97a2fb', color: 'aliceblue'}}>Add Slack
                                    Workspace</Menu.Item>
                                <Link to="/111"><Menu.Item index="2">Navigator Two</Menu.Item></Link>
                                <Menu.Item index="3">Navigator Three</Menu.Item>
                            </Menu>
                        </Layout.Col>
                        <Layout.Col span="20">
                            <Switch>
                                <Route path='/:workspaceId' component={FtRank}/>
                                <Route path='/' component={FtTop}/>
                            </Switch>
                        </Layout.Col>
                    </Layout.Row>
                </BrowserRouter>
            </div>
        );
    }
}

export default withAuthenticator(App, true);
