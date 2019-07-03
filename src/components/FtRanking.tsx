import React from 'react';
import {Table} from "element-react";

export default function FtRanking({ranks, rawCache}: any) {
    const cache = JSON.parse(JSON.parse(rawCache));
    console.log(cache);

    const columns = [
        {
            label: "#",
            prop: "rank",
            width: 50
        },
        {
            label: "🍐",
            prop: "count",
            width: 50
        },
        // {
        //     label: "",
        //     prop: "icon",
        //     width: 180
        // },
        {
            label: "ユーザ",
            prop: "user"
        }
    ];

    ranks.sort(function(a: any, b: any) {
        if (a.count < b.count) {
            return 1;
        } else {
            return -1;
        }
    });

    let i = 1;
    ranks.map((e: any) => {
        e.rank = i;
        i++;
        const user = cache.users.members.find((v: any) => v.id === e.userId);
        console.log(user);
        e.icon = user.profile.image_72;
        e.user = user.real_name || user.name;
        console.log(e);
    });


    return (
        <div>
            <Table
                style={{width: '100%'}}
                columns={columns}
                data={ranks}
            />
        </div>
    );
};
