/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
export const createNewHouseHold = /* GraphQL */ `
  mutation CreateNewHouseHold(
    $userProfileId: String!
    $houseHoldName: String!
  ) {
    createNewHouseHold(
      userProfileId: $userProfileId
      houseHoldName: $houseHoldName
    )
  }
`;
export const addUserToHouseHold = /* GraphQL */ `
  mutation AddUserToHouseHold(
    $cognitoUsername: String!
    $houseHoldID: String!
  ) {
    addUserToHouseHold(
      cognitoUsername: $cognitoUsername
      houseHoldID: $houseHoldID
    )
  }
`;
