// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = `subscription OnCreateWorkspace {
  onCreateWorkspace {
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
export const onUpdateWorkspace = `subscription OnUpdateWorkspace {
  onUpdateWorkspace {
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
export const onDeleteWorkspace = `subscription OnDeleteWorkspace {
  onDeleteWorkspace {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
