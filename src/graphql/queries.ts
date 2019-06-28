// tslint:disable
// this is an auto generated file. This will be overwritten

export const echo = `query Echo($workspaceId: String) {
  echo(workspaceId: $workspaceId)
}
`;
export const getWorkspace = `query GetWorkspace($id: ID!) {
  getWorkspace(id: $id) {
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
export const listWorkspaces = `query ListWorkspaces(
  $filter: ModelWorkspaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getRank = `query GetRank($id: ID!) {
  getRank(id: $id) {
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
export const listRanks = `query ListRanks(
  $filter: ModelRankFilterInput
  $limit: Int
  $nextToken: String
) {
  listRanks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      workspace {
        id
        accessToken
        scope
        botUserId
        botAccessToken
        cache
      }
      emoji
      users
    }
    nextToken
  }
}
`;
