/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkspaceInput = {
  id?: string | null,
  name: string,
};

export type UpdateWorkspaceInput = {
  id: string,
  name?: string | null,
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

export type ModelWorkspaceFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
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

export type CreateWorkspaceMutationVariables = {
  input: CreateWorkspaceInput,
};

export type CreateWorkspaceMutation = {
  createWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
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
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
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
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
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
      name: string,
      events:  {
        __typename: "ModelEventConnection",
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
      name: string,
      events:  {
        __typename: "ModelEventConnection",
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
      name: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};

export type GetWorkspaceQueryVariables = {
  id: string,
};

export type GetWorkspaceQuery = {
  getWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
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
      events:  {
        __typename: "ModelEventConnection",
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
      name: string,
      events:  {
        __typename: "ModelEventConnection",
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
        name: string,
      },
      raw: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateWorkspaceSubscription = {
  onCreateWorkspace:  {
    __typename: "Workspace",
    id: string,
    name: string,
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
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
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
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
    events:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        raw: string,
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
      name: string,
      events:  {
        __typename: "ModelEventConnection",
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
      name: string,
      events:  {
        __typename: "ModelEventConnection",
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
      name: string,
      events:  {
        __typename: "ModelEventConnection",
        nextToken: string | null,
      } | null,
    },
    raw: string,
  } | null,
};
