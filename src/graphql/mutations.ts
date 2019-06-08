// tslint:disable
// this is an auto generated file. This will be overwritten

export const createWorkspace = `mutation CreateWorkspace($input: CreateWorkspaceInput!) {
  createWorkspace(input: $input) {
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
export const updateWorkspace = `mutation UpdateWorkspace($input: UpdateWorkspaceInput!) {
  updateWorkspace(input: $input) {
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
export const deleteWorkspace = `mutation DeleteWorkspace($input: DeleteWorkspaceInput!) {
  deleteWorkspace(input: $input) {
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
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
