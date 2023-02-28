/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEventHandler = /* GraphQL */ `
  subscription OnCreateEventHandler(
    $filter: ModelSubscriptionEventHandlerFilterInput
  ) {
    onCreateEventHandler(filter: $filter) {
      id
      frequency
      sourceDate
      Events {
        items {
          id
          date
          author
          eventhandlerID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEventHandler = /* GraphQL */ `
  subscription OnUpdateEventHandler(
    $filter: ModelSubscriptionEventHandlerFilterInput
  ) {
    onUpdateEventHandler(filter: $filter) {
      id
      frequency
      sourceDate
      Events {
        items {
          id
          date
          author
          eventhandlerID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEventHandler = /* GraphQL */ `
  subscription OnDeleteEventHandler(
    $filter: ModelSubscriptionEventHandlerFilterInput
  ) {
    onDeleteEventHandler(filter: $filter) {
      id
      frequency
      sourceDate
      Events {
        items {
          id
          date
          author
          eventhandlerID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
      id
      date
      author
      eventhandlerID
      calendarID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
      id
      date
      author
      eventhandlerID
      calendarID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
      id
      date
      author
      eventhandlerID
      calendarID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCalendar = /* GraphQL */ `
  subscription OnCreateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onCreateCalendar(filter: $filter) {
      id
      Events {
        items {
          id
          date
          author
          eventhandlerID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCalendar = /* GraphQL */ `
  subscription OnUpdateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onUpdateCalendar(filter: $filter) {
      id
      Events {
        items {
          id
          date
          author
          eventhandlerID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCalendar = /* GraphQL */ `
  subscription OnDeleteCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onDeleteCalendar(filter: $filter) {
      id
      Events {
        items {
          id
          date
          author
          eventhandlerID
          calendarID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateHouseHold = /* GraphQL */ `
  subscription OnCreateHouseHold(
    $filter: ModelSubscriptionHouseHoldFilterInput
  ) {
    onCreateHouseHold(filter: $filter) {
      id
      Lists {
        items {
          id
          title
          description
          householdID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          listEventHandlerId
        }
        nextToken
        startedAt
      }
      Calendar {
        id
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      houseHoldCalendarId
    }
  }
`;
export const onUpdateHouseHold = /* GraphQL */ `
  subscription OnUpdateHouseHold(
    $filter: ModelSubscriptionHouseHoldFilterInput
  ) {
    onUpdateHouseHold(filter: $filter) {
      id
      Lists {
        items {
          id
          title
          description
          householdID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          listEventHandlerId
        }
        nextToken
        startedAt
      }
      Calendar {
        id
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      houseHoldCalendarId
    }
  }
`;
export const onDeleteHouseHold = /* GraphQL */ `
  subscription OnDeleteHouseHold(
    $filter: ModelSubscriptionHouseHoldFilterInput
  ) {
    onDeleteHouseHold(filter: $filter) {
      id
      Lists {
        items {
          id
          title
          description
          householdID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          listEventHandlerId
        }
        nextToken
        startedAt
      }
      Calendar {
        id
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      houseHoldCalendarId
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
      id
      title
      description
      EventHandler {
        id
        frequency
        sourceDate
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      listID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      itemEventHandlerId
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
      id
      title
      description
      EventHandler {
        id
        frequency
        sourceDate
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      listID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      itemEventHandlerId
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
      id
      title
      description
      EventHandler {
        id
        frequency
        sourceDate
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      listID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      itemEventHandlerId
    }
  }
`;
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($filter: ModelSubscriptionListFilterInput) {
    onCreateList(filter: $filter) {
      id
      title
      description
      householdID
      Items {
        items {
          id
          title
          description
          listID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          itemEventHandlerId
        }
        nextToken
        startedAt
      }
      EventHandler {
        id
        frequency
        sourceDate
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      listEventHandlerId
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($filter: ModelSubscriptionListFilterInput) {
    onUpdateList(filter: $filter) {
      id
      title
      description
      householdID
      Items {
        items {
          id
          title
          description
          listID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          itemEventHandlerId
        }
        nextToken
        startedAt
      }
      EventHandler {
        id
        frequency
        sourceDate
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      listEventHandlerId
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($filter: ModelSubscriptionListFilterInput) {
    onDeleteList(filter: $filter) {
      id
      title
      description
      householdID
      Items {
        items {
          id
          title
          description
          listID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          itemEventHandlerId
        }
        nextToken
        startedAt
      }
      EventHandler {
        id
        frequency
        sourceDate
        Events {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      listEventHandlerId
    }
  }
`;
