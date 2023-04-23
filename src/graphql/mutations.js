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
      completeSourceOnComplete
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
        taskId
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
        taskId
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCalendar = /* GraphQL */ `
  mutation UpdateCalendar(
    $input: UpdateCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    updateCalendar(input: $input, condition: $condition) {
      id
      Events {
        items {
          id
          date
          completed
          prevEventId
          nextEventId
          eventHandlerId
          calendarId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      EventHandlers {
        items {
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
        nextToken
        startedAt
      }
      houseHoldId
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
export const updateHouseHold = /* GraphQL */ `
  mutation UpdateHouseHold(
    $input: UpdateHouseHoldInput!
    $condition: ModelHouseHoldConditionInput
  ) {
    updateHouseHold(input: $input, condition: $condition) {
      id
      name
      owners
      Lists {
        items {
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
        nextToken
        startedAt
      }
      Tasks {
        items {
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
        nextToken
        startedAt
      }
      HouseHoldMembers {
        items {
          id
          points
          owner
          nickname
          userProfileId
          houseHoldId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      ChatRoom {
        id
        Messages {
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
      completed
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
      completed
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
  mutation CreateNewHouseHold($houseHoldName: String!) {
    createNewHouseHold(houseHoldName: $houseHoldName)
  }
`;
export const addUserToHouseHold = /* GraphQL */ `
  mutation AddUserToHouseHold(
    $cognitoUsername: String!
    $houseHoldId: String!
  ) {
    addUserToHouseHold(
      cognitoUsername: $cognitoUsername
      houseHoldId: $houseHoldId
    ) {
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
export const removeUserFromHouseHold = /* GraphQL */ `
  mutation RemoveUserFromHouseHold(
    $houseHoldId: String!
    $houseHoldMemberId: String!
  ) {
    removeUserFromHouseHold(
      houseHoldId: $houseHoldId
      houseHoldMemberId: $houseHoldMemberId
    )
  }
`;
export const createEventHandler = /* GraphQL */ `
  mutation CreateEventHandler(
    $calendarId: String!
    $taskId: String!
    $frequency: FREQUENCY!
    $sourceDate: AWSDateTime!
    $endDate: AWSDateTime!
  ) {
    createEventHandler(
      calendarId: $calendarId
      taskId: $taskId
      frequency: $frequency
      sourceDate: $sourceDate
      endDate: $endDate
    )
  }
`;
export const updateEventHandler = /* GraphQL */ `
  mutation UpdateEventHandler(
    $eventHandlerId: String!
    $calendarId: String!
    $taskId: String!
    $frequency: FREQUENCY!
    $sourceDate: AWSDateTime!
    $endDate: AWSDateTime!
  ) {
    updateEventHandler(
      eventHandlerId: $eventHandlerId
      calendarId: $calendarId
      taskId: $taskId
      frequency: $frequency
      sourceDate: $sourceDate
      endDate: $endDate
    )
  }
`;
export const deleteEventHandler = /* GraphQL */ `
  mutation DeleteEventHandler($eventHandlerId: String!) {
    deleteEventHandler(eventHandlerId: $eventHandlerId)
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask($taskId: String!) {
    deleteTask(taskId: $taskId)
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent($eventId: String!) {
    deleteEvent(eventId: $eventId)
  }
`;
export const deleteListCustom = /* GraphQL */ `
  mutation DeleteListCustom($listId: String!) {
    deleteListCustom(listId: $listId)
  }
`;
export const addMessageToChatRoom = /* GraphQL */ `
  mutation AddMessageToChatRoom($message: String!, $chatRoomId: String!) {
    addMessageToChatRoom(message: $message, chatRoomId: $chatRoomId)
  }
`;
export const completeTask = /* GraphQL */ `
  mutation CompleteTask($taskId: String!) {
    completeTask(taskId: $taskId)
  }
`;
