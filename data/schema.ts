import { buildSchema } from 'graphql';

const schema = buildSchema(`
	type Query {
		siteTitle: String
	}
	`);

export default schema;