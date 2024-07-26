import { Framework } from "../types";
import * as tools from "../tools";

export const getFrameworks = (): Framework[] => {
	const frameworks: Framework[] = tools.readJsonFile(
		"./src/data/frameworks.json"
	);
	return frameworks;
};

export const getFramework = ({ id }): Framework => {
	return {
		id: id,
		name: "MOCK2222333 Angular",
		yearCreated: 2010,
		language: "TypeScript",
	};
};
