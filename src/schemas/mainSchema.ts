import { buildSchema } from "graphql";

const schema = buildSchema(`
	type Skill {
		idCode: String
		name: String
		url: String
		description: String
	}

	type Query {
		version: String
		siteTitle: String
		skills: [Skill]
        getProduct(id: ID): Product
	}

    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        stores: [Store]!
    }

    type Store {
        store: String
    }

	input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`);

export default schema;
