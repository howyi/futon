import React from 'react';
import './App.css';

import Amplify, {API, graphqlOperation, I18n} from 'aws-amplify';
import awsmobile from './aws-exports';
import {Connect, withAuthenticator} from 'aws-amplify-react';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './element-variables.scss';
import FtTop from "./routes/FtTop";
import {Layout, Loading, Menu} from "element-react";
import FtRank from "./routes/FtRank";
import {listWorkspaces} from "./graphql/queries";
import {createState} from "./graphql/mutations";
const querystring = require('querystring');

Amplify.configure(awsmobile);

class App extends React.Component {

    private async onSelect(index: string) {
        if (index === '0') {
            const response = await API.graphql(
                graphqlOperation(
                    createState,
                    { input: {redirectUrl: window.location.href.replace(/\?.*$/,"")}}
                )
            );
            // @ts-ignore
            const state = response.data.createState.id;
            const url = awsmobile.aws_cloud_logic_custom[1].endpoint + '/slack-authorize';
            const query = querystring.stringify({state});
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
                            <Menu defaultActive="2" onSelect={this.onWorkspaceSelect.bind(this)} >
                                <Connect query={graphqlOperation(listWorkspaces)}>
                                    {({data: {listWorkspaces: workspaces}, loading, error}: any) => {
                                        if (error) {
                                            return <h3><span role='img' aria-label='sob'>😭</span></h3>;
                                        }
                                        if (loading || !workspaces) {
                                            return <Loading text={I18n.get('Loading ...')}/>;
                                        }
                                        return (
                                            <div>
                                                {workspaces.items.map((e: any) => (
                                                    <Link to={"/" + e.id} key={e.id}><Menu.Item index="{e.id}">{e.name}</Menu.Item></Link>
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
