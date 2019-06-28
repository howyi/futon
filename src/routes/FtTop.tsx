import React from 'react';
import awsmobile from "../aws-exports";
import {Button, Layout, Loading} from "element-react";
import {Connect} from "aws-amplify-react";
import {graphqlOperation, I18n} from "aws-amplify";
import {listEvents} from "../graphql/queries";

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
                <Connect query={graphqlOperation(listEvents)}>
                    {({data: {listEvents: events}, loading, error}: any) => {
                        if (error) {
                            return <h3><span role='img' aria-label='sob'>😭</span></h3>;
                        }
                        if (loading || !events) {
                            return <Loading text={I18n.get('Loading ...')}/>;
                        }
                        return <ListWorkspace events={events} />;
                    }}
                </Connect>
            </div>
        )
    }
};
