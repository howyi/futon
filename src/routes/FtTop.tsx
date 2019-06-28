import React from 'react';
import awsmobile from "../aws-exports";
import {Button, Layout} from "element-react";

export default class FtTop extends React.Component {
    public render() {
        return (
            <div>
                <Button type="primary" plain>
                    {awsmobile.aws_cloud_logic_custom[0].endpoint}/{awsmobile.aws_cloud_logic_custom[0].name}
                </Button>
            </div>
        )
    }
};
