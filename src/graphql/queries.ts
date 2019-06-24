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
    events {
      items {
        id
        raw
      }
      nextToken
    }
    ranks {
      items {
        id
        reactions
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
      events {
        nextToken
      }
      ranks {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    workspace {
      id
      accessToken
      scope
      botUserId
      botAccessToken
      cache
      events {
        nextToken
      }
      ranks {
        nextToken
      }
    }
    raw
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      raw
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
      events {
        nextToken
      }
      ranks {
        nextToken
      }
    }
    reactions
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
      reactions
    }
    nextToken
  }
}
`;
