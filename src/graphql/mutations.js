/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      message
      author
      owner
      ChatRoom {
        id
        owners
        Messages {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomHouseHoldId
      }
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      message
      author
      owner
      ChatRoom {
        id
        owners
        Messages {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomHouseHoldId
      }
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      message
      author
      owner
      ChatRoom {
        id
        owners
        Messages {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomHouseHoldId
      }
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      owners
      Messages {
        items {
          id
          message
          author
          owner
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      chatRoomHouseHoldId
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      owners
      Messages {
        items {
          id
          message
          author
          owner
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      chatRoomHouseHoldId
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      owners
      Messages {
        items {
          id
          message
          author
          owner
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      chatRoomHouseHoldId
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      owners
      householdID
      foreverTask
      deleteSourceOnComplete
      EventHandler {
        id
        frequency
        owners
        Events {
          nextToken
          startedAt
        }
        sourceDate
        endDate
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      taskEventHandlerId
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
      owners
      householdID
      foreverTask
      deleteSourceOnComplete
      EventHandler {
        id
        frequency
        owners
        Events {
          nextToken
          startedAt
        }
        sourceDate
        endDate
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      taskEventHandlerId
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
      owners
      householdID
      foreverTask
      deleteSourceOnComplete
      EventHandler {
        id
        frequency
        owners
        Events {
          nextToken
          startedAt
        }
        sourceDate
        endDate
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      taskEventHandlerId
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      owner
      preferredName
      HouseHoldMembers {
        items {
          id
          points
          owner
          userprofileID
          householdID
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      owner
      preferredName
      HouseHoldMembers {
        items {
          id
          points
          owner
          userprofileID
          householdID
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      owner
      preferredName
      HouseHoldMembers {
        items {
          id
          points
          owner
          userprofileID
          householdID
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
export const createHouseHoldMember = /* GraphQL */ `
  mutation CreateHouseHoldMember(
    $input: CreateHouseHoldMemberInput!
    $condition: ModelHouseHoldMemberConditionInput
  ) {
    createHouseHoldMember(input: $input, condition: $condition) {
      id
      points
      owner
      UserProfile {
        id
        owner
        preferredName
        HouseHoldMembers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userprofileID
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        houseHoldCalendarId
        houseHoldChatRoomId
      }
      householdID
      completedTasks {
        title
        points
        completedBy
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateHouseHoldMember = /* GraphQL */ `
  mutation UpdateHouseHoldMember(
    $input: UpdateHouseHoldMemberInput!
    $condition: ModelHouseHoldMemberConditionInput
  ) {
    updateHouseHoldMember(input: $input, condition: $condition) {
      id
      points
      owner
      UserProfile {
        id
        owner
        preferredName
        HouseHoldMembers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userprofileID
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        houseHoldCalendarId
        houseHoldChatRoomId
      }
      householdID
      completedTasks {
        title
        points
        completedBy
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteHouseHoldMember = /* GraphQL */ `
  mutation DeleteHouseHoldMember(
    $input: DeleteHouseHoldMemberInput!
    $condition: ModelHouseHoldMemberConditionInput
  ) {
    deleteHouseHoldMember(input: $input, condition: $condition) {
      id
      points
      owner
      UserProfile {
        id
        owner
        preferredName
        HouseHoldMembers {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      userprofileID
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        houseHoldCalendarId
        houseHoldChatRoomId
      }
      householdID
      completedTasks {
        title
        points
        completedBy
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEventHandler = /* GraphQL */ `
  mutation CreateEventHandler(
    $input: CreateEventHandlerInput!
    $condition: ModelEventHandlerConditionInput
  ) {
    createEventHandler(input: $input, condition: $condition) {
      id
      frequency
      owners
      Events {
        items {
          id
          date
          owners
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
      sourceDate
      endDate
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventHandlerTaskId
    }
  }
`;
export const updateEventHandler = /* GraphQL */ `
  mutation UpdateEventHandler(
    $input: UpdateEventHandlerInput!
    $condition: ModelEventHandlerConditionInput
  ) {
    updateEventHandler(input: $input, condition: $condition) {
      id
      frequency
      owners
      Events {
        items {
          id
          date
          owners
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
      sourceDate
      endDate
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventHandlerTaskId
    }
  }
`;
export const deleteEventHandler = /* GraphQL */ `
  mutation DeleteEventHandler(
    $input: DeleteEventHandlerInput!
    $condition: ModelEventHandlerConditionInput
  ) {
    deleteEventHandler(input: $input, condition: $condition) {
      id
      frequency
      owners
      Events {
        items {
          id
          date
          owners
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
      sourceDate
      endDate
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventHandlerTaskId
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      date
      owners
      eventhandlerID
      calendarID
      EventHandler {
        id
        frequency
        owners
        Events {
          nextToken
          startedAt
        }
        sourceDate
        endDate
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventHandlerTaskId
      }
      Calendar {
        id
        owners
        Events {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        calendarHouseHoldId
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
      owners
      eventhandlerID
      calendarID
      EventHandler {
        id
        frequency
        owners
        Events {
          nextToken
          startedAt
        }
        sourceDate
        endDate
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventHandlerTaskId
      }
      Calendar {
        id
        owners
        Events {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        calendarHouseHoldId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      date
      owners
      eventhandlerID
      calendarID
      EventHandler {
        id
        frequency
        owners
        Events {
          nextToken
          startedAt
        }
        sourceDate
        endDate
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventHandlerTaskId
      }
      Calendar {
        id
        owners
        Events {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        calendarHouseHoldId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCalendar = /* GraphQL */ `
  mutation CreateCalendar(
    $input: CreateCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    createCalendar(input: $input, condition: $condition) {
      id
      owners
      Events {
        items {
          id
          date
          owners
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      calendarHouseHoldId
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
      owners
      Events {
        items {
          id
          date
          owners
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      calendarHouseHoldId
    }
  }
`;
export const deleteCalendar = /* GraphQL */ `
  mutation DeleteCalendar(
    $input: DeleteCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    deleteCalendar(input: $input, condition: $condition) {
      id
      owners
      Events {
        items {
          id
          date
          owners
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      calendarHouseHoldId
    }
  }
`;
export const createHouseHold = /* GraphQL */ `
  mutation CreateHouseHold(
    $input: CreateHouseHoldInput!
    $condition: ModelHouseHoldConditionInput
  ) {
    createHouseHold(input: $input, condition: $condition) {
      id
      name
      owners
      Lists {
        items {
          id
          title
          description
          owners
          householdID
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
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
        nextToken
        startedAt
      }
      HouseHoldMembers {
        items {
          id
          points
          owner
          userprofileID
          householdID
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
        owners
        Events {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        calendarHouseHoldId
      }
      ChatRoom {
        id
        owners
        Messages {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomHouseHoldId
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
          owners
          householdID
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
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
        nextToken
        startedAt
      }
      HouseHoldMembers {
        items {
          id
          points
          owner
          userprofileID
          householdID
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
        owners
        Events {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        calendarHouseHoldId
      }
      ChatRoom {
        id
        owners
        Messages {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomHouseHoldId
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
export const deleteHouseHold = /* GraphQL */ `
  mutation DeleteHouseHold(
    $input: DeleteHouseHoldInput!
    $condition: ModelHouseHoldConditionInput
  ) {
    deleteHouseHold(input: $input, condition: $condition) {
      id
      name
      owners
      Lists {
        items {
          id
          title
          description
          owners
          householdID
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
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
        }
        nextToken
        startedAt
      }
      HouseHoldMembers {
        items {
          id
          points
          owner
          userprofileID
          householdID
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
        owners
        Events {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        calendarHouseHoldId
      }
      ChatRoom {
        id
        owners
        Messages {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomHouseHoldId
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
      owners
      completed
      listID
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
      }
      List {
        id
        title
        description
        owners
        householdID
        Items {
          nextToken
          startedAt
        }
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
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
      owners
      completed
      listID
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
      }
      List {
        id
        title
        description
        owners
        householdID
        Items {
          nextToken
          startedAt
        }
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
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
      owners
      completed
      listID
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
      }
      List {
        id
        title
        description
        owners
        householdID
        Items {
          nextToken
          startedAt
        }
        Task {
          id
          title
          owners
          householdID
          foreverTask
          deleteSourceOnComplete
          completed
          pointValue
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          taskEventHandlerId
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        listTaskId
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
      owners
      householdID
      Items {
        items {
          id
          title
          description
          owners
          completed
          listID
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
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      owners
      householdID
      Items {
        items {
          id
          title
          description
          owners
          completed
          listID
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
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      owners
      householdID
      Items {
        items {
          id
          title
          description
          owners
          completed
          listID
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
      Task {
        id
        title
        owners
        householdID
        foreverTask
        deleteSourceOnComplete
        EventHandler {
          id
          frequency
          owners
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
        taskEventHandlerId
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
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          calendarHouseHoldId
        }
        ChatRoom {
          id
          owners
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomHouseHoldId
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
      listTaskId
    }
  }
`;
export const createNewHouseHold = /* GraphQL */ `
  mutation CreateNewHouseHold(
    $userprofileID: String!
    $houseHoldName: String!
  ) {
    createNewHouseHold(
      userprofileID: $userprofileID
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
