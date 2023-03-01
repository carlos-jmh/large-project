/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEventHandler = /* GraphQL */ `
  mutation CreateEventHandler(
    $input: CreateEventHandlerInput!
    $condition: ModelEventHandlerConditionInput
  ) {
    createEventHandler(input: $input, condition: $condition) {
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
export const updateEventHandler = /* GraphQL */ `
  mutation UpdateEventHandler(
    $input: UpdateEventHandlerInput!
    $condition: ModelEventHandlerConditionInput
  ) {
    updateEventHandler(input: $input, condition: $condition) {
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
export const deleteEventHandler = /* GraphQL */ `
  mutation DeleteEventHandler(
    $input: DeleteEventHandlerInput!
    $condition: ModelEventHandlerConditionInput
  ) {
    deleteEventHandler(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createCalendar = /* GraphQL */ `
  mutation CreateCalendar(
    $input: CreateCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    createCalendar(input: $input, condition: $condition) {
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
export const deleteCalendar = /* GraphQL */ `
  mutation DeleteCalendar(
    $input: DeleteCalendarInput!
    $condition: ModelCalendarConditionInput
  ) {
    deleteCalendar(input: $input, condition: $condition) {
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
export const createHouseHold = /* GraphQL */ `
  mutation CreateHouseHold(
    $input: CreateHouseHoldInput!
    $condition: ModelHouseHoldConditionInput
  ) {
    createHouseHold(input: $input, condition: $condition) {
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
export const updateHouseHold = /* GraphQL */ `
  mutation UpdateHouseHold(
    $input: UpdateHouseHoldInput!
    $condition: ModelHouseHoldConditionInput
  ) {
    updateHouseHold(input: $input, condition: $condition) {
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
export const deleteHouseHold = /* GraphQL */ `
  mutation DeleteHouseHold(
    $input: DeleteHouseHoldInput!
    $condition: ModelHouseHoldConditionInput
  ) {
    deleteHouseHold(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const deleteList = /* GraphQL */ `
  mutation DeleteList(
    $input: DeleteListInput!
    $condition: ModelListConditionInput
  ) {
    deleteList(input: $input, condition: $condition) {
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
