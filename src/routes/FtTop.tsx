import React from 'react';
import awsmobile from "../aws-exports";
import {Button} from "element-react";

const FtTop = () => {
    return (
        <div>
            <div>
                ｵ

                <Button type="primary" plain>{awsmobile.aws_cloud_logic_custom[0].endpoint}/{awsmobile.aws_cloud_logic_custom[0].name}</Button>
            </div>
        </div>
    )
};


export default FtTop;
