const functions = require("firebase-functions");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

const app = express();

const schema = buildSchema(`
  type UserRecord {
    name: String
    previousBoards: [String]
  }


  type Query {
    name: String
    getUser(name: String): UserRecord
    allUsers: [UserRecord]
    newBoard(name: String, width: Int, height: Int): String
    newUser(name: String): UserRecord
    boardDirections(board: String, initialCoordinates: [Int]): [String]
  }


`);

class User {
  constructor(name) {
    this.doc = null;
    this.name = name;
  }

  get() {
    return db
      .collection("Roombas")
      .doc(this.name)
      .get()
      .then((doc) => {
        this.doc = doc.exists ? doc : null;
        return ref;
      })
      .catch((e) => {
        console.error(`Error getting user: ${e.message}`);
        return e;
      });
  }

  static async getAllUsers() {
    const results = await db.collection("Roombas").get();

    if (results.empty) {
      return [];
    }

    return results.docs.map((doc) => doc.data());
  }

  static async newBoard(width, height, dirtPercentage = 30) {
    const randomMatrix = Array(height)
      .fill(null)
      .map(() =>
        Array(width)
          .fill(null)
          .map(() => (Math.round(Math.random() * 100) > dirtPercentage ? 0 : 1))
          .join(",")
      )
      .join("\n");

    return randomMatrix;
  }

  async create() {
    const { name } = this;
    try {
      const docRef = await db.collection("Roombas").doc(name);

      await docRef.set({ name });
      return docRef.get().data();
    } catch (e) {
      console.error(`Error creating user ${name}: ${e.message}`);
      return name;
    }
  }

  traverseBoard(board, startingCoordinates = [0, 0]) {
    let matrix;

    let directions = [];
    let [row, col] = startingCoordinates;
    try {
      matrix = JSON.parse(board);
      if (matrix.length < 1 && matrix[0].length < 1)
        throw new Error(`Invalid matrix JSON passed to traverseBoard method`);
    } catch (e) {
      console.error(e.message);
      return ["LEFT", "RIGHT", "DOWN", "UP"];
    }

    return directions;
  }
}

const root = {
  name: () => "Hello world!",
  allUsers: () => User.getAllUsers(),
  user: ({ id }) => new User(id).get(),
  newBoard: async ({ width, height }) => User.newBoard(width, height),
  newUser: ({ name }) => new User(name).create(),
  boardDirections: ({ board, startingCoordinates }) =>
    User.traverseBoard(board, startingCoordinates),
};

app.use(express.static("./public"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

exports.roombas = functions.https.onRequest(app);
