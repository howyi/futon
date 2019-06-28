import React from 'react';
import {Layout} from "element-react";

export default function FtRanking({ranks}: any) {

    console.log(ranks);

    const a = 9;

    return (
        <div>
            {ranks.map((e: any) => (
                <Layout.Col span="24" key={e.id}>
                    {e.id} <br/>
                </Layout.Col>
            ))}
        </div>
    );
};
