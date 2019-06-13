import React from 'react';
import awsmobile from "../aws-exports";
import {Button, Layout, Loading, Menu} from "element-react";
import {Connect} from "aws-amplify-react";
import {graphqlOperation, I18n} from "aws-amplify";
import {listEvents} from "../graphql/queries";

export default class FtTop extends React.Component {

    private onOpen() {

    }

    private onClose() {

    }

    public render() {
        return (
            <Layout.Row>
                <Layout.Col span="4">
                    <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)}
                          onClose={this.onClose.bind(this)} theme="dark">
                        <Menu.SubMenu index="1" title="Navigator One">
                            <Menu.ItemGroup title="Group One">
                                <Menu.Item index="1-1">Option 1</Menu.Item>
                                <Menu.Item index="1-2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Group Two">
                                <Menu.Item index="1-3">Option 3</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                        <Menu.Item index="2">Navigator Two</Menu.Item>
                        <Menu.Item index="3">Navigator Three</Menu.Item>
                    </Menu>
                </Layout.Col>
                <Layout.Col span="20">
                    <div>
                        ｵ
                        <Button type="primary"
                                plain>{awsmobile.aws_cloud_logic_custom[0].endpoint}/{awsmobile.aws_cloud_logic_custom[0].name}</Button>
                        <Connect query={graphqlOperation(listEvents)}>
                            {({ data: { listEvents: events } }: any) => {
                                if (!events) {
                                    return <Loading text={I18n.get('Loading ...')} />;
                                }
                                return (
                                    <div>
                                        {events.items.map((e: any) => (
                                            <Layout.Col span="24">
                                                {e.id} <br/>
                                                e.
                                            </Layout.Col>
                                        ))}
                                    </div>
                                );
                            }}
                        </Connect>
                    </div>
                </Layout.Col>
            </Layout.Row>
        )
    }
};
