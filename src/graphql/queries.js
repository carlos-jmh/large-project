/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      message
      authorHouseHoldMemberId
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
      chatRoomId
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
        authorHouseHoldMemberId
        ChatRoom {
          id
          houseHoldId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        chatRoomId
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
        authorHouseHoldMemberId
        ChatRoom {
          id
          houseHoldId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        chatRoomId
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
export const messagesByChatRoomId = /* GraphQL */ `
  query MessagesByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message
        authorHouseHoldMemberId
        ChatRoom {
          id
          houseHoldId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        chatRoomId
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
      Messages {
        items {
          id
          message
          authorHouseHoldMemberId
          chatRoomId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        taskId
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
      nextToken
      startedAt
    }
  }
`;
export const tasksByHouseHoldId = /* GraphQL */ `
  query TasksByHouseHoldId(
    $houseHoldId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByHouseHoldId(
      houseHoldId: $houseHoldId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const userProfileByOwner = /* GraphQL */ `
  query UserProfileByOwner(
    $owner: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProfileByOwner(
      owner: $owner
      id: $id
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
      nickname
      userProfileId
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
        nickname
        userProfileId
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
        nickname
        userProfileId
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
      nextToken
      startedAt
    }
  }
`;
export const houseHoldMembersByUserProfileId = /* GraphQL */ `
  query HouseHoldMembersByUserProfileId(
    $userProfileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHouseHoldMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    houseHoldMembersByUserProfileId(
      userProfileId: $userProfileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        points
        owner
        nickname
        userProfileId
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
      nextToken
      startedAt
    }
  }
`;
export const houseHoldMembersByHouseHoldId = /* GraphQL */ `
  query HouseHoldMembersByHouseHoldId(
    $houseHoldId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHouseHoldMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    houseHoldMembersByHouseHoldId(
      houseHoldId: $houseHoldId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        points
        owner
        nickname
        userProfileId
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
      calendarId
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
      Events {
        items {
          id
          date
          completed
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
      taskId
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
      sourceDate
      endDate
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
      nextToken
      startedAt
    }
  }
`;
export const eventHandlersByCalendarId = /* GraphQL */ `
  query EventHandlersByCalendarId(
    $calendarId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventHandlerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventHandlersByCalendarId(
      calendarId: $calendarId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const eventHandlersByTaskId = /* GraphQL */ `
  query EventHandlersByTaskId(
    $taskId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventHandlerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventHandlersByTaskId(
      taskId: $taskId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      completed
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
        completed
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
        completed
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
      nextToken
      startedAt
    }
  }
`;
export const eventsByEventHandlerIdAndId = /* GraphQL */ `
  query EventsByEventHandlerIdAndId(
    $eventHandlerId: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByEventHandlerIdAndId(
      eventHandlerId: $eventHandlerId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        completed
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
      nextToken
      startedAt
    }
  }
`;
export const eventsByCalendarId = /* GraphQL */ `
  query EventsByCalendarId(
    $calendarId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventsByCalendarId(
      calendarId: $calendarId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        completed
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
          completed
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
          houseHoldId
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
      nextToken
      startedAt
    }
  }
`;
export const itemsByListId = /* GraphQL */ `
  query ItemsByListId(
    $listId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByListId(
      listId: $listId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listsByHouseHoldId = /* GraphQL */ `
  query ListsByHouseHoldId(
    $houseHoldId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listsByHouseHoldId(
      houseHoldId: $houseHoldId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
