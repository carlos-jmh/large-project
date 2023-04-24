/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
      id
      title
      houseHoldId
      foreverTask
      listId
      List {
        id
        title
        description
        houseHoldId
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
      }
      itemId
      Item {
        id
        title
        description
        completed
        listId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        itemTaskId
      }
      completeSourceOnComplete
      eventHandlerId
      EventHandler {
        id
        frequency
        calendarId
        taskId
        sourceDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventHandlerTaskId
      }
      completed
      pointValue
      HouseHold {
        id
        name
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        houseHoldCalendarId
        houseHoldChatRoomId
      }
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
      completed
      prevEventId
      nextEventId
      eventHandlerId
      calendarId
      EventHandler {
        id
        frequency
        calendarId
        taskId
        sourceDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventHandlerTaskId
      }
      Calendar {
        id
        houseHoldId
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
    }
  }
`;
export const onUpdateCalendar = /* GraphQL */ `
  subscription OnUpdateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onUpdateCalendar(filter: $filter) {
      id
      Events {
        nextToken
        startedAt
      }
      EventHandlers {
        nextToken
        startedAt
      }
      houseHoldId
      HouseHold {
        id
        name
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        houseHoldCalendarId
        houseHoldChatRoomId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateHouseHold = /* GraphQL */ `
  subscription OnUpdateHouseHold(
    $filter: ModelSubscriptionHouseHoldFilterInput
  ) {
    onUpdateHouseHold(filter: $filter) {
      id
      name
      owners
      Lists {
        nextToken
        startedAt
      }
      Tasks {
        nextToken
        startedAt
      }
      HouseHoldMembers {
        nextToken
        startedAt
      }
      Calendar {
        id
        houseHoldId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ChatRoom {
        id
        houseHoldId
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
      houseHoldChatRoomId
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
      id
      title
      description
      completed
      listId
      List {
        id
        title
        description
        houseHoldId
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
      }
      Task {
        id
        title
        houseHoldId
        foreverTask
        listId
        itemId
        completeSourceOnComplete
        eventHandlerId
        completed
        pointValue
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
      itemTaskId
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
      id
      title
      description
      completed
      listId
      List {
        id
        title
        description
        houseHoldId
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
      }
      Task {
        id
        title
        houseHoldId
        foreverTask
        listId
        itemId
        completeSourceOnComplete
        eventHandlerId
        completed
        pointValue
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
      itemTaskId
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
      id
      title
      description
      completed
      listId
      List {
        id
        title
        description
        houseHoldId
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
      }
      Task {
        id
        title
        houseHoldId
        foreverTask
        listId
        itemId
        completeSourceOnComplete
        eventHandlerId
        completed
        pointValue
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
      itemTaskId
    }
  }
`;
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($filter: ModelSubscriptionListFilterInput) {
    onCreateList(filter: $filter) {
      id
      title
      description
      houseHoldId
      completed
      Items {
        nextToken
        startedAt
      }
      HouseHold {
        id
        name
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        houseHoldCalendarId
        houseHoldChatRoomId
      }
      Task {
        id
        title
        houseHoldId
        foreverTask
        listId
        itemId
        completeSourceOnComplete
        eventHandlerId
        completed
        pointValue
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
      listTaskId
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($filter: ModelSubscriptionListFilterInput) {
    onUpdateList(filter: $filter) {
      id
      title
      description
      houseHoldId
      completed
      Items {
        nextToken
        startedAt
      }
      HouseHold {
        id
        name
        owners
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        houseHoldCalendarId
        houseHoldChatRoomId
      }
      Task {
        id
        title
        houseHoldId
        foreverTask
        listId
        itemId
        completeSourceOnComplete
        eventHandlerId
        completed
        pointValue
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
      listTaskId
    }
  }
`;
export const onAddUserToHouseHold = /* GraphQL */ `
  subscription OnAddUserToHouseHold($cognitoUsername: String!) {
    onAddUserToHouseHold(cognitoUsername: $cognitoUsername) {
      id
      points
      owner
      nickname
      userProfileId
      houseHoldId
      HouseHoldDisplayInfo {
        id
        name
      }
      cognitoUsername
    }
  }
`;
export const onNewItemCreated = /* GraphQL */ `
  subscription OnNewItemCreated($listId: String!) {
    onNewItemCreated(listId: $listId) {
      id
      title
      description
      completed
      listId
      List {
        id
        title
        description
        houseHoldId
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
      }
      Task {
        id
        title
        houseHoldId
        foreverTask
        listId
        itemId
        completeSourceOnComplete
        eventHandlerId
        completed
        pointValue
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
      itemTaskId
    }
  }
`;
export const onItemUpdated = /* GraphQL */ `
  subscription OnItemUpdated($listId: String!) {
    onItemUpdated(listId: $listId) {
      id
      title
      description
      completed
      listId
      List {
        id
        title
        description
        houseHoldId
        completed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
      }
      Task {
        id
        title
        houseHoldId
        foreverTask
        listId
        itemId
        completeSourceOnComplete
        eventHandlerId
        completed
        pointValue
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
      itemTaskId
    }
  }
`;
