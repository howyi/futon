// tslint:disable
// this is an auto generated file. This will be overwritten

export const createWorkspace = `mutation CreateWorkspace($input: CreateWorkspaceInput!) {
  createWorkspace(input: $input) {
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
        slackUserId
        emoji
        count
      }
      nextToken
    }
  }
}
`;
export const updateWorkspace = `mutation UpdateWorkspace($input: UpdateWorkspaceInput!) {
  updateWorkspace(input: $input) {
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
        slackUserId
        emoji
        count
      }
      nextToken
    }
  }
}
`;
export const deleteWorkspace = `mutation DeleteWorkspace($input: DeleteWorkspaceInput!) {
  deleteWorkspace(input: $input) {
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
        slackUserId
        emoji
        count
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
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
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
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
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
export const createRank = `mutation CreateRank($input: CreateRankInput!) {
  createRank(input: $input) {
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
    slackUserId
    emoji
    count
  }
}
`;
export const updateRank = `mutation UpdateRank($input: UpdateRankInput!) {
  updateRank(input: $input) {
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
    slackUserId
    emoji
    count
  }
}
`;
export const deleteRank = `mutation DeleteRank($input: DeleteRankInput!) {
  deleteRank(input: $input) {
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
    slackUserId
    emoji
    count
  }
}
`;
