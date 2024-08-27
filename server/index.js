import express from "express";
import cors from "cors";
import axios from "axios";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import gql from "graphql-tag";
const app = express();
const server = new ApolloServer({
  typeDefs: gql`

    type Company{
      name: String
    },
    type User {
      id: ID!
      name: String
      username: String,
      email:  String,
      website: String,
      company: Company
    }
    type Post {
      id: ID!
      title: String!
      body: String!
      userId: Int!,
      user: User
    }

    type Comment{
        id: ID!,
        email: String,
        body: String,
        postId: ID!
    }

    type Query {
      getPosts: [Post]
      getComments(postId: ID!): [Comment]
      getUserDetails(userId: ID!): User
    }
  `,
  resolvers: {

    Post:{
        user: async(parent) =>{
            return (await axios.get(`https://jsonplaceholder.typicode.com/users/${parent.userId}`))
        .data;
        }
    },
    Query: {
      getPosts: async () => {
        return (await axios.get("https://jsonplaceholder.typicode.com/posts"))
          .data;
      },

      getComments: async (_ , {postId})=>{
        const allComments = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)).data
        return allComments
      },
      
      getUserDetails: async (_, {userId})=>{
        return (await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)).data
      }
    },
  },
});

app.use(cors());
app.use(bodyParser.json({ limit: "16kb" }));
await server.start();
app.use("/graphql", expressMiddleware(server));

app.get("/", (req, res) => {
  res.send("<h1>App is running</h1>");
});

app.listen(4000, () => {
  console.log("App is running on port: 4000");
});
