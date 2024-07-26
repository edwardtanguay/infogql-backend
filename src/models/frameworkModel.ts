import { Framework } from "../types";
import * as tools from "../tools";

export const getFrameworks = (): Framework[] => {
	const frameworks: Framework[] = tools.readJsonFile(
		"./src/data/frameworks.json"
	);
	return frameworks;
};

export const getFramework = ({ id }): Framework => {
	const frameworks = getFrameworks();
	const framework = frameworks.find(m => m.id === id);
	if (framework) {
		return framework;
	} else {
		throw new Error(`framework not found: ${id}`)
	}
};
