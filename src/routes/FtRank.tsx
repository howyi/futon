import React from 'react';
import {listRanks} from "../graphql/queries";
import {Loading} from "element-react";
import {Connect} from "aws-amplify-react";
import {graphqlOperation, I18n} from "aws-amplify";
import FtRanking from "../components/FtRanking";

export default function FtRank(props: any) {

    console.log(props.match.params.workspaceId);

    return (
        <div>
            u!!!!!
            <Connect query={graphqlOperation(listRanks)}>
                {({data: {listRanks: ranks}, loading, error}: any) => {
                    if (error) {
                        return <h3><span role='img' aria-label='sob'>😭</span></h3>;
                    }
                    if (loading || !ranks) {
                        return <Loading text={I18n.get('Loading ...')}/>;
                    }
                    // console.log(ranks);
                    return (
                        <div>
                            <FtRanking ranks={ranks.items}/>
                        </div>
                    );
                }}
            </Connect>
        </div>
    );
};

// export default FtRank;
