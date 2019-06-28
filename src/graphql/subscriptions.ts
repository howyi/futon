// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = `subscription OnCreateWorkspace {
  onCreateWorkspace {
    id
    accessToken
    scope
    botUserId
    botAccessToken
    cache
    ranks {
      items {
        id
        emoji
        users
      }
      nextToken
    }
  }
}
`;
export const onUpdateWorkspace = `subscription OnUpdateWorkspace {
  onUpdateWorkspace {
    id
    accessToken
    scope
    botUserId
    botAccessToken
    cache
    ranks {
      items {
        id
        emoji
        users
      }
      nextToken
    }
  }
}
`;
export const onDeleteWorkspace = `subscription OnDeleteWorkspace {
  onDeleteWorkspace {
    id
    accessToken
    scope
    botUserId
    botAccessToken
    cache
    ranks {
      items {
        id
        emoji
        users
      }
      nextToken
    }
  }
}
`;
export const onCreateRank = `subscription OnCreateRank {
  onCreateRank {
    id
    workspace {
      id
      accessToken
      scope
      botUserId
      botAccessToken
      cache
      ranks {
        nextToken
      }
    }
    emoji
    users
  }
}
`;
export const onUpdateRank = `subscription OnUpdateRank {
  onUpdateRank {
    id
    workspace {
      id
      accessToken
      scope
      botUserId
      botAccessToken
      cache
      ranks {
        nextToken
      }
    }
    emoji
    users
  }
}
`;
export const onDeleteRank = `subscription OnDeleteRank {
  onDeleteRank {
    id
    workspace {
      id
      accessToken
      scope
      botUserId
      botAccessToken
      cache
      ranks {
        nextToken
      }
    }
    emoji
    users
  }
}
`;
