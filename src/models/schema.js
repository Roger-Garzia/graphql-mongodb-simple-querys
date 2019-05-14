export default `
  type Car {
    id: String!
    name: String
  }

  type Query {
    allCars: [Car!]!
  }

  type Mutation {
    createCar(name: String!): Car!
  }
`;
