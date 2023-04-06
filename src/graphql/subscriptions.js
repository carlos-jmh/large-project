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
          deleteSourceOnComplete
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
      itemId
      Item {
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
          deleteSourceOnComplete
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
      deleteSourceOnComplete
      eventHandlerId
      EventHandler {
        id
        frequency
        calendarId
        Calendar {
          id
          houseHoldId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Events {
          nextToken
          startedAt
        }
        Task {
          id
          title
          houseHoldId
          foreverTask
          listId
          itemId
          deleteSourceOnComplete
          eventHandlerId
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
          deleteSourceOnComplete
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
      itemId
      Item {
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
          deleteSourceOnComplete
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
      deleteSourceOnComplete
      eventHandlerId
      EventHandler {
        id
        frequency
        calendarId
        Calendar {
          id
          houseHoldId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Events {
          nextToken
          startedAt
        }
        Task {
          id
          title
          houseHoldId
          foreverTask
          listId
          itemId
          deleteSourceOnComplete
          eventHandlerId
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
          deleteSourceOnComplete
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
      itemId
      Item {
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
          deleteSourceOnComplete
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
      deleteSourceOnComplete
      eventHandlerId
      EventHandler {
        id
        frequency
        calendarId
        Calendar {
          id
          houseHoldId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Events {
          nextToken
          startedAt
        }
        Task {
          id
          title
          houseHoldId
          foreverTask
          listId
          itemId
          deleteSourceOnComplete
          eventHandlerId
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          deleteSourceOnComplete
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
      Task {
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
        deleteSourceOnComplete
        eventHandlerId
        EventHandler {
          id
          frequency
          calendarId
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
          deleteSourceOnComplete
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
      Task {
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
        deleteSourceOnComplete
        eventHandlerId
        EventHandler {
          id
          frequency
          calendarId
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
          deleteSourceOnComplete
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
      Task {
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
        deleteSourceOnComplete
        eventHandlerId
        EventHandler {
          id
          frequency
          calendarId
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
      Items {
        items {
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
        nextToken
        startedAt
      }
      HouseHold {
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
      Task {
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
        deleteSourceOnComplete
        eventHandlerId
        EventHandler {
          id
          frequency
          calendarId
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
      Items {
        items {
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
        nextToken
        startedAt
      }
      HouseHold {
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
      Task {
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
        deleteSourceOnComplete
        eventHandlerId
        EventHandler {
          id
          frequency
          calendarId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      listTaskId
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($filter: ModelSubscriptionListFilterInput) {
    onDeleteList(filter: $filter) {
      id
      title
      description
      houseHoldId
      Items {
        items {
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
        nextToken
        startedAt
      }
      HouseHold {
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
      Task {
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
        deleteSourceOnComplete
        eventHandlerId
        EventHandler {
          id
          frequency
          calendarId
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
