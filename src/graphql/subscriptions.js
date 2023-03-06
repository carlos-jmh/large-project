/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
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
export const onCreateHouseHoldMember = /* GraphQL */ `
  subscription OnCreateHouseHoldMember(
    $filter: ModelSubscriptionHouseHoldMemberFilterInput
    $owner: String
  ) {
    onCreateHouseHoldMember(filter: $filter, owner: $owner) {
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
export const onUpdateHouseHoldMember = /* GraphQL */ `
  subscription OnUpdateHouseHoldMember(
    $filter: ModelSubscriptionHouseHoldMemberFilterInput
    $owner: String
  ) {
    onUpdateHouseHoldMember(filter: $filter, owner: $owner) {
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
export const onDeleteHouseHoldMember = /* GraphQL */ `
  subscription OnDeleteHouseHoldMember(
    $filter: ModelSubscriptionHouseHoldMemberFilterInput
    $owner: String
  ) {
    onDeleteHouseHoldMember(filter: $filter, owner: $owner) {
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
export const onCreateEventHandler = /* GraphQL */ `
  subscription OnCreateEventHandler(
    $filter: ModelSubscriptionEventHandlerFilterInput
  ) {
    onCreateEventHandler(filter: $filter) {
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
export const onUpdateEventHandler = /* GraphQL */ `
  subscription OnUpdateEventHandler(
    $filter: ModelSubscriptionEventHandlerFilterInput
  ) {
    onUpdateEventHandler(filter: $filter) {
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
export const onDeleteEventHandler = /* GraphQL */ `
  subscription OnDeleteEventHandler(
    $filter: ModelSubscriptionEventHandlerFilterInput
  ) {
    onDeleteEventHandler(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateCalendar = /* GraphQL */ `
  subscription OnCreateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onCreateCalendar(filter: $filter) {
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
export const onUpdateCalendar = /* GraphQL */ `
  subscription OnUpdateCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onUpdateCalendar(filter: $filter) {
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
export const onDeleteCalendar = /* GraphQL */ `
  subscription OnDeleteCalendar($filter: ModelSubscriptionCalendarFilterInput) {
    onDeleteCalendar(filter: $filter) {
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
export const onCreateHouseHold = /* GraphQL */ `
  subscription OnCreateHouseHold(
    $filter: ModelSubscriptionHouseHoldFilterInput
  ) {
    onCreateHouseHold(filter: $filter) {
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
export const onUpdateHouseHold = /* GraphQL */ `
  subscription OnUpdateHouseHold(
    $filter: ModelSubscriptionHouseHoldFilterInput
  ) {
    onUpdateHouseHold(filter: $filter) {
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
export const onDeleteHouseHold = /* GraphQL */ `
  subscription OnDeleteHouseHold(
    $filter: ModelSubscriptionHouseHoldFilterInput
  ) {
    onDeleteHouseHold(filter: $filter) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($filter: ModelSubscriptionListFilterInput) {
    onCreateList(filter: $filter) {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($filter: ModelSubscriptionListFilterInput) {
    onUpdateList(filter: $filter) {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($filter: ModelSubscriptionListFilterInput) {
    onDeleteList(filter: $filter) {
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
