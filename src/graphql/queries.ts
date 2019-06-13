// tslint:disable
// this is an auto generated file. This will be overwritten

export const getWorkspace = `query GetWorkspace($id: ID!) {
  getWorkspace(id: $id) {
    id
    token
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
        slackUserId
        emoji
        count
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
      token
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
      token
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
        token
      }
      raw
    }
    nextToken
  }
}
`;
export const getRank = `query GetRank($slackUserId: ID!, $count: Int!) {
  getRank(slackUserId: $slackUserId, count: $count) {
    id
    workspace {
      id
      token
      events {
        nextToken
      }
      ranks {
        nextToken
      }
    }
    slackUserId
    emoji
    count
  }
}
`;
export const listRanks = `query ListRanks(
  $slackUserId: ID
  $count: ModelIntKeyConditionInput
  $filter: ModelRankFilterInput
  $limit: Int
  $nextToken: String
) {
  listRanks(
    slackUserId: $slackUserId
    count: $count
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      workspace {
        id
        token
      }
      slackUserId
      emoji
      count
    }
    nextToken
  }
}
`;
