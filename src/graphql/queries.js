/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEventHandler = /* GraphQL */ `
  query GetEventHandler($id: ID!) {
    getEventHandler(id: $id) {
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
export const listEventHandlers = /* GraphQL */ `
  query ListEventHandlers(
    $filter: ModelEventHandlerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventHandlers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEventHandlers = /* GraphQL */ `
  query SyncEventHandlers(
    $filter: ModelEventHandlerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventHandlers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const eventsByEventhandlerID = /* GraphQL */ `
  query EventsByEventhandlerID(
    $eventhandlerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByEventhandlerID(
      eventhandlerID: $eventhandlerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const eventsByCalendarID = /* GraphQL */ `
  query EventsByCalendarID(
    $calendarID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByCalendarID(
      calendarID: $calendarID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCalendar = /* GraphQL */ `
  query GetCalendar($id: ID!) {
    getCalendar(id: $id) {
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
export const listCalendars = /* GraphQL */ `
  query ListCalendars(
    $filter: ModelCalendarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalendars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCalendars = /* GraphQL */ `
  query SyncCalendars(
    $filter: ModelCalendarFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCalendars(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getHouseHold = /* GraphQL */ `
  query GetHouseHold($id: ID!) {
    getHouseHold(id: $id) {
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
export const listHouseHolds = /* GraphQL */ `
  query ListHouseHolds(
    $filter: ModelHouseHoldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouseHolds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Lists {
          nextToken
          startedAt
        }
        Calendar {
          id
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
      nextToken
      startedAt
    }
  }
`;
export const syncHouseHolds = /* GraphQL */ `
  query SyncHouseHolds(
    $filter: ModelHouseHoldFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHouseHolds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Lists {
          nextToken
          startedAt
        }
        Calendar {
          id
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
      nextToken
      startedAt
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        EventHandler {
          id
          frequency
          sourceDate
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
      nextToken
      startedAt
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        EventHandler {
          id
          frequency
          sourceDate
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
      nextToken
      startedAt
    }
  }
`;
export const itemsByListID = /* GraphQL */ `
  query ItemsByListID(
    $listID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByListID(
      listID: $listID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        EventHandler {
          id
          frequency
          sourceDate
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
      nextToken
      startedAt
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
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
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        householdID
        Items {
          nextToken
          startedAt
        }
        EventHandler {
          id
          frequency
          sourceDate
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
      nextToken
      startedAt
    }
  }
`;
export const syncLists = /* GraphQL */ `
  query SyncLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        householdID
        Items {
          nextToken
          startedAt
        }
        EventHandler {
          id
          frequency
          sourceDate
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
      nextToken
      startedAt
    }
  }
`;
export const listsByHouseholdID = /* GraphQL */ `
  query ListsByHouseholdID(
    $householdID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listsByHouseholdID(
      householdID: $householdID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        householdID
        Items {
          nextToken
          startedAt
        }
        EventHandler {
          id
          frequency
          sourceDate
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
      nextToken
      startedAt
    }
  }
`;
