/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkspaceInput = {
  id?: string | null,
  token: string,
};

export type UpdateWorkspaceInput = {
  id: string,
  token?: string | null,
};

export type DeleteWorkspaceInput = {
  id?: string | null,
};

export type CreateEventInput = {
  id?: string | null,
  raw: string,
  workspaceId: string,
};

export type UpdateEventInput = {
  id: string,
  raw?: string | null,
  workspaceId?: string | null,
};

export type DeleteEventInput = {
  id?: string | null,
};

export type CreateRankInput = {
  id?: string | null,
  slackUserId: string,
  emoji: string,
  count: number,
  workspaceId: string,
};

export type UpdateRankInput = {
  id: string,
  slackUserId: string,
  emoji?: string | null,
  count: number,
  workspaceId?: string | null,
};

export type DeleteRankInput = {
  slackUserId: string,
  count: number,
};

export type ModelWorkspaceFilterInput = {
  id?: ModelIDFilterInput | null,
  token?: ModelStringFilterInput | null,
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

export type ModelEventFilterInput = {
  id?: ModelIDFilterInput | null,
  raw?: ModelStringFilterInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRankFilterInput = {
  id?: ModelIDFilterInput | null,
  slackUserId?: ModelIDFilterInput | null,
  emoji?: ModelStringFilterInput | null,
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
    token: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        slackUserId: string,
        emoji: string,
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
    token: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        slackUserId: string,
        emoji: string,
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
    token: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        slackUserId: string,
        emoji: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
};

export type CreateEventMutation = {
  createEvent:  {
    __typename: "Event",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
};

export type UpdateEventMutation = {
  updateEvent:  {
    __typename: "Event",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
};

export type DeleteEventMutation = {
  deleteEvent:  {
    __typename: "Event",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
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
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    slackUserId: string,
    emoji: string,
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
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    slackUserId: string,
    emoji: string,
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
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    slackUserId: string,
    emoji: string,
    count: number,
  } | null,
};

export type GetWorkspaceQueryVariables = {
  id: string,
};

export type GetWorkspaceQuery = {
  getWorkspace:  {
    __typename: "Workspace",
    id: string,
    token: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        slackUserId: string,
        emoji: string,
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
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent:  {
    __typename: "Event",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      workspace:  {
        __typename: "Workspace",
        id: string,
        token: string,
      },
      raw: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRankQueryVariables = {
  slackUserId: string,
  count: number,
};

export type GetRankQuery = {
  getRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    slackUserId: string,
    emoji: string,
    count: number,
  } | null,
};

export type ListRanksQueryVariables = {
  slackUserId?: string | null,
  count?: ModelIntKeyConditionInput | null,
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
        token: string,
      },
      slackUserId: string,
      emoji: string,
      count: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWorkspaceSubscription = {
  onCreateWorkspace:  {
    __typename: "Workspace",
    id: string,
    token: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        slackUserId: string,
        emoji: string,
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
    token: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        slackUserId: string,
        emoji: string,
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
    token: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    ranks:  {
      __typename: "ModelRankConnection",
      items:  Array< {
        __typename: "Rank",
        id: string,
        slackUserId: string,
        emoji: string,
        count: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent:  {
    __typename: "Event",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent:  {
    __typename: "Event",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent:  {
    __typename: "Event",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};

export type OnCreateRankSubscription = {
  onCreateRank:  {
    __typename: "Rank",
    id: string,
    workspace:  {
      __typename: "Workspace",
      id: string,
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    slackUserId: string,
    emoji: string,
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
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    slackUserId: string,
    emoji: string,
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
      token: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
      ranks:  {
        __typename: "ModelRankConnection",
        nextToken: string | null,
      } | null,
    },
    slackUserId: string,
    emoji: string,
    count: number,
  } | null,
};
