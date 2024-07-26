import { Framework, InputFramework } from "../types";
import * as tools from "../tools";

const frameworkPathAndFileName = "./src/data/frameworks.json";

export const getFrameworks = (): Framework[] => {
	const frameworks: Framework[] = tools.readJsonFile(
		frameworkPathAndFileName
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
	const frameworks = getFrameworks();
	const newFramework = {
		id: tools.generateShortUUID(),
		...input
	}
frameworks.push(newFramework)	
	tools.writeArrayOfObjectsToJsonFile(frameworks,frameworkPathAndFileName)
	return newFramework;
};
