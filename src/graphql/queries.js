/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        author
        owner
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
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        message
        author
        owner
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
  }
`;
export const messagesByChatroomID = /* GraphQL */ `
  query MessagesByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message
        author
        owner
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
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const tasksByHouseholdID = /* GraphQL */ `
  query TasksByHouseholdID(
    $householdID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByHouseholdID(
      householdID: $householdID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
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
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userProfilesByOwner = /* GraphQL */ `
  query UserProfilesByOwner(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfilesByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getHouseHoldMember = /* GraphQL */ `
  query GetHouseHoldMember($id: ID!) {
    getHouseHoldMember(id: $id) {
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
export const listHouseHoldMembers = /* GraphQL */ `
  query ListHouseHoldMembers(
    $filter: ModelHouseHoldMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouseHoldMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        points
        owner
        UserProfile {
          id
          owner
          preferredName
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
      nextToken
      startedAt
    }
  }
`;
export const syncHouseHoldMembers = /* GraphQL */ `
  query SyncHouseHoldMembers(
    $filter: ModelHouseHoldMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHouseHoldMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        points
        owner
        UserProfile {
          id
          owner
          preferredName
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
      nextToken
      startedAt
    }
  }
`;
export const houseHoldMembersByUserprofileID = /* GraphQL */ `
  query HouseHoldMembersByUserprofileID(
    $userprofileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHouseHoldMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    houseHoldMembersByUserprofileID(
      userprofileID: $userprofileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        points
        owner
        UserProfile {
          id
          owner
          preferredName
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
      nextToken
      startedAt
    }
  }
`;
export const houseHoldMembersByHouseholdID = /* GraphQL */ `
  query HouseHoldMembersByHouseholdID(
    $householdID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHouseHoldMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    houseHoldMembersByHouseholdID(
      householdID: $householdID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        points
        owner
        UserProfile {
          id
          owner
          preferredName
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
      nextToken
      startedAt
    }
  }
`;
export const getEventHandler = /* GraphQL */ `
  query GetEventHandler($id: ID!) {
    getEventHandler(id: $id) {
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
        owners
        eventhandlerID
        calendarID
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
        owners
        eventhandlerID
        calendarID
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
        owners
        eventhandlerID
        calendarID
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
        owners
        eventhandlerID
        calendarID
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
export const listCalendars = /* GraphQL */ `
  query ListCalendars(
    $filter: ModelCalendarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalendars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getHouseHold = /* GraphQL */ `
  query GetHouseHold($id: ID!) {
    getHouseHold(id: $id) {
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
export const listHouseHolds = /* GraphQL */ `
  query ListHouseHolds(
    $filter: ModelHouseHoldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouseHolds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          completed
          pointValue
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
          completed
          pointValue
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
          completed
          pointValue
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
      nextToken
      startedAt
    }
  }
`;
