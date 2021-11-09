const propositionMock = [
  {
    role: "viewer",
    color: "silver",
    rules: {
      createHomeWork: false,
      ownWords: 10,
      savedResult: false,
      createdTest: 3,
      passTest: 5,
      dictionary: false,
      homeWork: false,
      pushStory: false,
    },
  },
  {
    role: "student",
    color: "#17a2b8",
    rules: {
      createHomeWork: true,
      ownWords: 1000,
      savedResult: true,
      createdTest: 100,
      passTest: 500,
      dictionary: true,
      homeWork: true,
      pushStory: false,
    },
  },
  {
    role: "teacher",
    color: "#4582ec",
    rules: {
      createHomeWork: true,
      ownWords: 1000,
      savedResult: true,
      createdTest: 100,
      passTest: 500,
      dictionary: true,
      homeWork: true,
      pushStory: true,
      createOwnGroup: true,
    },
  },
];

export default propositionMock;