// tslint:disable
// this is an auto generated file. This will be overwritten

export const getWorkspace = `query GetWorkspace($id: ID!) {
  getWorkspace(id: $id) {
    id
    name
    events {
      items {
        id
        raw
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
      name
      events {
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
      name
      events {
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
        name
      }
      raw
    }
    nextToken
  }
}
`;
