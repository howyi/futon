// tslint:disable
// this is an auto generated file. This will be overwritten

export const createWorkspace = `mutation CreateWorkspace($input: CreateWorkspaceInput!) {
  createWorkspace(input: $input) {
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
export const updateWorkspace = `mutation UpdateWorkspace($input: UpdateWorkspaceInput!) {
  updateWorkspace(input: $input) {
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
export const deleteWorkspace = `mutation DeleteWorkspace($input: DeleteWorkspaceInput!) {
  deleteWorkspace(input: $input) {
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
export const createRank = `mutation CreateRank($input: CreateRankInput!) {
  createRank(input: $input) {
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
export const updateRank = `mutation UpdateRank($input: UpdateRankInput!) {
  updateRank(input: $input) {
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
export const deleteRank = `mutation DeleteRank($input: DeleteRankInput!) {
  deleteRank(input: $input) {
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
