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
export const listWorkspaces = `query ListWorkspaces(
  $filter: ModelWorkspaceFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const me = `query Me($cognitoId: ID!) {
  me(cognitoId: $cognitoId) {
    cognitoId
    workspaceIds
  }
}
`;
