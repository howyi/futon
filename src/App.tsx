import React from 'react';
import './App.css';

import Amplify, {graphqlOperation, I18n} from 'aws-amplify';
import awsmobile from './aws-exports';
import {Connect, withAuthenticator} from 'aws-amplify-react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './element-variables.scss';
import FtTop from "./routes/FtTop";
import {Layout, Loading, Menu} from "element-react";
import FtRank from "./routes/FtRank";
import {listWorkspaces} from "./graphql/queries";
const querystring = require('querystring');

Amplify.configure(awsmobile);

class App extends React.Component {

    private onSelect(index: string) {
        if (index === '0') {
            const url = awsmobile.aws_cloud_logic_custom[1].endpoint + '/slack-authorize';
            const query = querystring.stringify({
                state:  window.location.href
            });
            window.location.href = url + '?' + query;
        }
    }
    private onWorkspaceSelect(index: string) {
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
                            </Menu>
                            <Menu defaultActive="2" className="el-menu-vertical-demo" onSelect={this.onWorkspaceSelect.bind(this)} >
                                <Connect query={graphqlOperation(listWorkspaces)}>
                                    {({data: {listWorkspaces: workspaces}}: any) => {
                                        if (!workspaces) {
                                            return <Loading text={I18n.get('Loading ...')}/>;
                                        }
                                        return (
                                            <div>
                                                {workspaces.items.map((e: any) => (
                                                    <Link to={"/" + e.id} key={e.id}><Menu.Item index="{e.id}">{e.id}</Menu.Item></Link>
                                                ))}
                                            </div>
                                        );
                                    }}
                                </Connect>
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
