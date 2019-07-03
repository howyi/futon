// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = `subscription OnCreateWorkspace {
  onCreateWorkspace {
    id
    name
    registeredCognitoIds
    accessToken
    scope
    botUserId
    botAccessToken
    cache
    ranks {
      items {
        id
        userId
        count
      }
      nextToken
    }
  }
}
`;
export const onUpdateWorkspace = `subscription OnUpdateWorkspace {
  onUpdateWorkspace {
    id
    name
    registeredCognitoIds
    accessToken
    scope
    botUserId
    botAccessToken
    cache
    ranks {
      items {
        id
        userId
        count
      }
      nextToken
    }
  }
}
`;
export const onDeleteWorkspace = `subscription OnDeleteWorkspace {
  onDeleteWorkspace {
    id
    name
    registeredCognitoIds
    accessToken
    scope
    botUserId
    botAccessToken
    cache
    ranks {
      items {
        id
        userId
        count
      }
      nextToken
    }
  }
}
`;
export const onCreateState = `subscription OnCreateState {
  onCreateState {
    id
    cognitoId
    redirectUrl
  }
}
`;
export const onUpdateState = `subscription OnUpdateState {
  onUpdateState {
    id
    cognitoId
    redirectUrl
  }
}
`;
export const onDeleteState = `subscription OnDeleteState {
  onDeleteState {
    id
    cognitoId
    redirectUrl
  }
}
`;
export const onCreateRank = `subscription OnCreateRank {
  onCreateRank {
    id
    workspace {
      id
      name
      registeredCognitoIds
      accessToken
      scope
      botUserId
      botAccessToken
      cache
      ranks {
        nextToken
      }
    }
    userId
    count
  }
}
`;
export const onUpdateRank = `subscription OnUpdateRank {
  onUpdateRank {
    id
    workspace {
      id
      name
      registeredCognitoIds
      accessToken
      scope
      botUserId
      botAccessToken
      cache
      ranks {
        nextToken
      }
    }
    userId
    count
  }
}
`;
export const onDeleteRank = `subscription OnDeleteRank {
  onDeleteRank {
    id
    workspace {
      id
      name
      registeredCognitoIds
      accessToken
      scope
      botUserId
      botAccessToken
      cache
      ranks {
        nextToken
      }
    }
    userId
    count
  }
}
`;
