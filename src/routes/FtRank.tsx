import React from 'react';
import {getWorkspace} from "../graphql/queries";
import {Loading} from "element-react";
import {Connect} from "aws-amplify-react";
import {graphqlOperation, I18n} from "aws-amplify";
import FtRanking from "../components/FtRanking";

export default function FtRank(props: any) {
    return (
        <div>
            <Connect query={graphqlOperation(getWorkspace, {id: props.match.params.workspaceId})}>
                {({data: {getWorkspace: workspace}, loading, error}: any) => {
                    if (error) {
                        return <h3><span role='img' aria-label='sob'>😭</span></h3>;
                    }
                    if (loading || !workspace) {
                        return <Loading text={I18n.get('Loading ...')}/>;
                    }
                    return (
                        <div>
                            <FtRanking ranks={workspace.ranks.items} rawCache={workspace.cache}/>
                        </div>
                    );
                }}
            </Connect>
        </div>
    );
};

// export default FtRank;
