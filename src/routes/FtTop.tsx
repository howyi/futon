import React from 'react';
import awsmobile from "../aws-exports";
import {Button, Layout, Loading} from "element-react";
import {Connect} from "aws-amplify-react";
import {graphqlOperation, I18n} from "aws-amplify";
import {listEvents} from "../graphql/queries";

export default class FtTop extends React.Component {
    public render() {
        return (
            <div>
                ｵ
                <Button type="primary"
                        plain>{awsmobile.aws_cloud_logic_custom[0].endpoint}/{awsmobile.aws_cloud_logic_custom[0].name}</Button>
                <Connect query={graphqlOperation(listEvents)}>
                    {({data: {listEvents: events}}: any) => {
                        if (!events) {
                            return <Loading text={I18n.get('Loading ...')}/>;
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
        )
    }
};
