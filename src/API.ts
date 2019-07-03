/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkspaceInput = {
  id?: string | null,
  name: string,
  registeredCognitoIds: Array< string >,
  accessToken: string,
  scope: string,
  botUserId: string,
  botAccessToken: string,
  cache: string,
};

export type UpdateWorkspaceInput = {
  id: string,
  name?: string | null,
  registeredCognitoIds?: Array< string > | null,
  accessToken?: string | null,
  scope?: string | null,
  botUserId?: string | null,
  botAccessToken?: string | null,
  cache?: string | null,
};

export type DeleteWorkspaceInput = {
  id?: string | null,
};

export type CreateStateInput = {
  id?: string | null,
  cognitoId: string,
  redirectUrl: string,
};

export type UpdateStateInput = {
  id: string,
  cognitoId?: string | null,
  redirectUrl?: string | null,
};

export type DeleteStateInput = {
  id?: string | null,
};

export type CreateRankInput = {
  id?: string | null,
  userId: string,
  count: number,
  workspaceId: string,
};

export type UpdateRankInput = {
  id: string,
  userId?: string | null,
  count?: number | null,
  workspaceId?: string | null,
};

export type DeleteRankInput = {
  id?: string | null,
};

export type ModelWorkspaceFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  registeredCognitoIds?: ModelIDFilterInput | null,
  accessToken?: ModelStringFilterInput | null,
  scope?: ModelStringFilterInput | null,
  botUserId?: ModelStringFilterInput | null,
  botAccessToken?: ModelStringFilterInput | null,
  cache?: ModelStringFilterInput | null,
  and?: Array< ModelWorkspaceFilterInput | null > | null,
  or?: Array< ModelWorkspaceFilterInput | null > | null,
  not?: ModelWorkspaceFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStateFilterInput = {
  id?: ModelIDFilterInput | null,
  cognitoId?: ModelIDFilterInput | null,
  redirectUrl?: ModelStringFilterInput | null,
  and?: Array< ModelStateFilterInput | null > | null,
  or?: Array< ModelStateFilterInput | null > | null,
  not?: ModelStateFilterInput | null,
};

export type ModelRankFilterInput = {
  id?: ModelIDFilterInput | null,
  userId?: ModelStringFilterInput | null,
  count?: ModelIntFilterInput | null,
  and?: Array< ModelRankFilterInput | null > | null,
  or?: Array< ModelRankFilterInput | null > | null,
  not?: ModelRankFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateWorkspaceMutationVariables = {
  input: CreateWorkspaceInput,
};

export type CreateWorkspaceMutation = {
  createWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    registeredCognitoIds: Array< string >,
    accessToken: string,
    scope: string,
    botUserId: string,
    botAccessToken: string,
    cache: string,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        userId: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateWorkspaceMutationVariables = {
  input: UpdateWorkspaceInput,
};

export type UpdateWorkspaceMutation = {
  updateWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    registeredCognitoIds: Array< string >,
    accessToken: string,
    scope: string,
    botUserId: string,
    botAccessToken: string,
    cache: string,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        userId: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteWorkspaceMutationVariables = {
  input: DeleteWorkspaceInput,
};

export type DeleteWorkspaceMutation = {
  deleteWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    registeredCognitoIds: Array< string >,
    accessToken: string,
    scope: string,
    botUserId: string,
    botAccessToken: string,
    cache: string,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        userId: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateStateMutationVariables = {
  input: CreateStateInput,
};

export type CreateStateMutation = {
  createState:  {
    __typename: "State",
    id: string,
    cognitoId: string,
    redirectUrl: string,
  } | null,
};

export type UpdateStateMutationVariables = {
  input: UpdateStateInput,
};

export type UpdateStateMutation = {
  updateState:  {
    __typename: "State",
    id: string,
    cognitoId: string,
    redirectUrl: string,
  } | null,
};

export type DeleteStateMutationVariables = {
  input: DeleteStateInput,
};

export type DeleteStateMutation = {
  deleteState:  {
    __typename: "State",
    id: string,
    cognitoId: string,
    redirectUrl: string,
  } | null,
};

export type CreateRankMutationVariables = {
  input: CreateRankInput,
};

export type CreateRankMutation = {
  createRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
    count: number,
  } | null,
};

export type UpdateRankMutationVariables = {
  input: UpdateRankInput,
};

export type UpdateRankMutation = {
  updateRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
    count: number,
  } | null,
};

export type DeleteRankMutationVariables = {
  input: DeleteRankInput,
};

export type DeleteRankMutation = {
  deleteRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
    count: number,
  } | null,
};

export type EchoQueryVariables = {
  workspaceId?: string | null,
};

export type EchoQuery = {
  echo: string | null,
};

export type GetWorkspaceQueryVariables = {
  id: string,
};

export type GetWorkspaceQuery = {
  getWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    registeredCognitoIds: Array< string >,
    accessToken: string,
    scope: string,
    botUserId: string,
    botAccessToken: string,
    cache: string,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        userId: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListWorkspacesQueryVariables = {
  filter?: ModelWorkspaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkspacesQuery = {
  listWorkspaces:  {
    __typename: "ModelWorkspaceConnection",
    items:  Array< {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStateQueryVariables = {
  id: string,
};

export type GetStateQuery = {
  getState:  {
    __typename: "State",
    id: string,
    cognitoId: string,
    redirectUrl: string,
  } | null,
};

export type ListStatesQueryVariables = {
  filter?: ModelStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStatesQuery = {
  listStates:  {
    __typename: "ModelStateConnection",
    items:  Array< {
      __typename: "State",
      id: string,
      cognitoId: string,
      redirectUrl: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRankQueryVariables = {
  id: string,
};

export type GetRankQuery = {
  getRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
    count: number,
  } | null,
};

export type ListRanksQueryVariables = {
  filter?: ModelRankFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRanksQuery = {
  listRanks:  {
    __typename: "ModelRankConnection",
    items:  Array< {
      __typename: "Rank",
      id: string,
      workspace:  {
        __typename: "Workspace",
        id: string,
        name: string,
        registeredCognitoIds: Array< string >,
        accessToken: string,
        scope: string,
        botUserId: string,
        botAccessToken: string,
        cache: string,
      },
      userId: string,
      count: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWorkspaceSubscription = {
  onCreateWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    registeredCognitoIds: Array< string >,
    accessToken: string,
    scope: string,
    botUserId: string,
    botAccessToken: string,
    cache: string,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        userId: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateWorkspaceSubscription = {
  onUpdateWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    registeredCognitoIds: Array< string >,
    accessToken: string,
    scope: string,
    botUserId: string,
    botAccessToken: string,
    cache: string,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        userId: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteWorkspaceSubscription = {
  onDeleteWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    registeredCognitoIds: Array< string >,
    accessToken: string,
    scope: string,
    botUserId: string,
    botAccessToken: string,
    cache: string,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        userId: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateStateSubscription = {
  onCreateState:  {
    __typename: "State",
    id: string,
    cognitoId: string,
    redirectUrl: string,
  } | null,
};

export type OnUpdateStateSubscription = {
  onUpdateState:  {
    __typename: "State",
    id: string,
    cognitoId: string,
    redirectUrl: string,
  } | null,
};

export type OnDeleteStateSubscription = {
  onDeleteState:  {
    __typename: "State",
    id: string,
    cognitoId: string,
    redirectUrl: string,
  } | null,
};

export type OnCreateRankSubscription = {
  onCreateRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
    count: number,
  } | null,
};

export type OnUpdateRankSubscription = {
  onUpdateRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
    count: number,
  } | null,
};

export type OnDeleteRankSubscription = {
  onDeleteRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      name: string,
      registeredCognitoIds: Array< string >,
      accessToken: string,
      scope: string,
      botUserId: string,
      botAccessToken: string,
      cache: string,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    userId: string,
    count: number,
  } | null,
};
