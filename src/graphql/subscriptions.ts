// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = `subscription OnCreateWorkspace {
  onCreateWorkspace {
    id
    accessToken
    scope
    botUserId
    botAccessToken
    cache
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
    accessToken
    scope
    botUserId
    botAccessToken
    cache
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
    accessToken
    scope
    botUserId
    botAccessToken
    cache
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
      accessToken
      scope
      botUserId
      botAccessToken
      cache
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
      accessToken
      scope
      botUserId
      botAccessToken
      cache
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
      accessToken
      scope
      botUserId
      botAccessToken
      cache
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
      accessToken
      scope
      botUserId
      botAccessToken
      cache
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
      accessToken
      scope
      botUserId
      botAccessToken
      cache
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
      accessToken
      scope
      botUserId
      botAccessToken
      cache
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
