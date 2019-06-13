// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = `subscription OnCreateWorkspace {
  onCreateWorkspace {
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
        reactions
      }
      nextToken
    }
  }
}
`;
export const onUpdateWorkspace = `subscription OnUpdateWorkspace {
  onUpdateWorkspace {
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
        reactions
      }
      nextToken
    }
  }
}
`;
export const onDeleteWorkspace = `subscription OnDeleteWorkspace {
  onDeleteWorkspace {
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
        reactions
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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
export const onCreateRank = `subscription OnCreateRank {
  onCreateRank {
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
    reactions
  }
}
`;
export const onUpdateRank = `subscription OnUpdateRank {
  onUpdateRank {
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
    reactions
  }
}
`;
export const onDeleteRank = `subscription OnDeleteRank {
  onDeleteRank {
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
    reactions
  }
}
`;
