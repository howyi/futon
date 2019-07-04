// tslint:disable
// this is an auto generated file. This will be overwritten

export const echo = `query Echo($workspaceId: String) {
  echo(workspaceId: $workspaceId)
}
`;
export const getWorkspace = `query GetWorkspace($id: ID!) {
  getWorkspace(id: $id) {
    id
    name
    botUserId
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
export const listWorkspaces = `query ListWorkspaces(
  $filter: ModelWorkspaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      botUserId
      cache
      ranks {
        nextToken
      }
    }
    nextToken
  }
}
`;
