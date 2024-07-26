import { Skill } from "../types";
import * as tools from '../tools';

export const getSkills = (): Skill[] => {
	const skills:Skill[] = tools.readJsonFile('./src/data/skills.json');
	return skills;
}