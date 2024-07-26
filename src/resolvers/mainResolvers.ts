import { createFramework, getFramework, getFrameworks } from "../models/frameworkModel";
import { getSkills } from "../models/skillModel";
import * as tools from "../tools";

class Product {
	id: string;
	name: string;
	description: string;
	price: number;
	soldout: boolean;
	stores: string[];

	constructor(id: string, { name, description, price, soldout, stores }) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.soldout = soldout;
		this.stores = stores;
	}
}

const productDatabase = {};

const resolvers = {
	version: "0.0.3",
	siteTitle: () => "InfoGQL - GraphQL Showcase",
	skills: getSkills(),
	getProduct: ({ id }) => {
		return new Product(id, productDatabase[id]);
	},
	createProduct: ({ input }) => {
		const id = tools.generateShortUUID();
		productDatabase[id] = input;
		return new Product(id, input);
	},
	frameworks: getFrameworks(),
	getFramework,
	createFramework
};

export default resolvers;
