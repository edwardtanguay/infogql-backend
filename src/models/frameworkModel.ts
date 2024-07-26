import { Framework, InputFramework } from "../types";
import * as tools from "../tools";

export const getFrameworks = (): Framework[] => {
	const frameworks: Framework[] = tools.readJsonFile(
		"./src/data/frameworks.json"
	);
	return frameworks;
};

export const getFramework = ({ id }: { id: string }): Framework => {
	const frameworks = getFrameworks();
	const framework = frameworks.find((m) => m.id === id);
	if (framework) {
		return framework;
	} else {
		throw new Error(`framework not found: ${id}`);
	}
};

export const createFramework = ({
	input,
}: {
	input: InputFramework;
}): Framework => {
	console.log("adding: " + JSON.stringify(input, null, 2));
	return {
		id: "8uz21b",
		name: "MOCK Vue",
		yearCreated: 2014,
		language: "JavaScript",
	};
};
