import React from 'react';
import awsmobile from "../aws-exports";
import {Button, Layout} from "element-react";

export default class FtTop extends React.Component {
    public render() {

        const ListWorkspace = ({events}: any) => (
            <div>
            {events.items.map((e: any) => (
                <Layout.Col span="24" key={e.id}>
                    {e.id} <br/>
                    e.
                </Layout.Col>
            ))}
            </div>
        );

        return (
            <div>
                ｵ
                <Button type="primary"
                        plain>{awsmobile.aws_cloud_logic_custom[0].endpoint}/{awsmobile.aws_cloud_logic_custom[0].name}</Button>
            </div>
        )
    }
};
