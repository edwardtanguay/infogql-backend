import { Framework } from "../types";
import * as tools from '../tools';

export const getFrameworks = (): Framework[] => {
	const frameworks:Framework[] = tools.readJsonFile('./src/data/frameworks.json');
	return frameworks;
}