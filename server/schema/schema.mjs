import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { sampleUsers } from "../sample/user.mjs";

const UserType = GraphQLObjectType({
    name: "User",
    fields: () => ({
        username: {
          type: GraphQLString
        },
        id: {
          type: GraphQLID    
        },
        name: {
          type: GraphQLString           
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        }
      })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      users: {
        type: GraphQLList(UserType),
        resolve: () => sampleUsers
      }
    },
  });
  
export default schema = GraphQLSchema({
    query: RootQuery,
  });
  