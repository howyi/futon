import React from 'react';
import {Tabs} from "element-react";

export default function FtRanking({ranks, rawCache}: any) {

    if (!rawCache) {
        // どうのこうの
    }

    // なんで？
    const cache = JSON.parse(JSON.parse(rawCache));
    console.log(cache);

    return (
        <div>
            <Tabs onTabClick={ (tab) => console.log(tab.props.name) }>
            {ranks.map((e: any) => (
                <Tabs.Pane label={':' + e.emoji + ':'} name={e.emoji} key={e.id}>
                    {e.users}
                </Tabs.Pane>
            ))}
            </Tabs>
        </div>
    );
};
