export default {
  tasks: [
    {
      id: 0,
      title: "Do dishes",
      foreverTask: true,
      listId: 0,
      itemId: 0,
      completed: false,
    },
    {
      id: 1,
      title: "Get groceries",
      listId: 1,
      eventHandlerId: 0,
      completed: false,
    },
    {
      id: 2,
      title: "Finish discrete HW",
      eventHandlerId: 1,
      completed: false,
    },
    {
      id: 3,
      title: "Respond to email",
      completed: false,
    },
    {
      id: 4,
      title: "Graduate",
      completed: false,
      eventHandlerId: 2,
    },
    {
      id: 5,
      title: "Graduate",
      completed: false,
      eventHandlerId: 2,
    },
    {
      id: 6,
      title: "Graduate",
      completed: false,
      eventHandlerId: 2,
    },
    {
      id: 7,
      title: "Graduate",
      completed: false,
      eventHandlerId: 2,
    },
    {
      id: 8,
      title: "Graduate",
      completed: false,
      eventHandlerId: 2,
    },
    {
      id: 9,
      title: "Graduate",
      completed: false,
      eventHandlerId: 2,
    },
    {
      id: 10,
      title: "Graduate",
      completed: false,
      eventHandlerId: 2,
    },
  ],
  lists: [
    {
      id: 0,
      title: "Chores",
      items: [
        {
          id: 0,
          title: "Do dishes",
          completed: false,
        },
      ],
    },
    {
      id: 1,
      title: "Grocery list",
      items: [
        {
          id: 0,
          title: "Milk",
          completed: false,
        },
        {
          id: 1,
          title: "Banana",
          completed: false,
        },
        {
          id: 2,
          title: "Olive oil",
          completed: false,
        },
      ],
    },
  ],
  eventHandlers: [
    {
      id: 0,
      title: "Get groceries",
      events: [
        {
          id: 0,
          date: "2023-04-06T18:00:00Z",
        },
      ],
    },
    {
      id: 1,
      title: "Discrete HW due",
      events: [
        {
          id: 1,
          date: "2023-05-02T03:59:00Z",
        },
        {
          id: 3,
          date: "2023-05-02T03:59:00Z",
        },
      ],
    },
    {
      id: 2,
      title: "Graduate",
      events: [
        {
          id: 2,
          date: "2025-05-01T04:00:00Z",
        },
      ],
    },
    {
      id: 3,
      title: "Project Presentation",
      events: [
        {
          id: 2,
          date: "2023-05-02T04:00:00Z",
        },
      ],
    },
  ],
};
