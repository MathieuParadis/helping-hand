const chats = [
  { 
    request: {
      title: "In need of 2 blankets",
      type: "material",
      description: "I would like to get 2 old blankets to use as a bed for my dogs.",
      location: "Boulder",
      position: {
        lat: 40.00,
        lgn: -105.35,
      },
      status: "in progress",
    },
    requester: {
      first_name: "Cony",
      last_name: "Chan",
    },
    volunteer: {
      first_name: "Mathieu",
      last_name: "Paradis",
    },
    messages: [
      {
        body: "Hello",
        author: "Mathieu Paradis",
      },
      {
        body: "Hello",
        author: "Cony Chan",
      },
      {
        body: "How May I help you",
        author: "Mathieu Paradis",
      },
    ]
  },
  { 
    request: {
      title: "Need help to vacuum clean my car",
      type: "service",
      description: "I would like someone to help to clean the insde of my car.",
      location: "Boulder",
      position: {
        lat: 39.95,
        lgn: -105.24,
      },
      status: "in progress",
    },
    requester: {
      first_name: "Martin",
      last_name: "Cooper",
    },
    volunteer: {
      first_name: "Mathieu",
      last_name: "Paradis",
    },
    messages: [
      {
        body: "Hello",
        author: "Mathieu Paradis",
      },
      {
        body: "Hi",
        author: "Martin Cooper",
      },
      {
        body: "How May I help you?",
        author: "Mathieu Paradis",
      },
    ]
  },
];

export default chats;


