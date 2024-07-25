import { buildSchema } from 'graphql';

const schema = buildSchema(`
	type Skill {
		idCode: String
		name: String
		url: String
		description: String
	}

	type Query {
		siteTitle: String
		skills: [Skill]
	}
	`);

export default schema;