/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";

export const readJsonFile = (pathAndFileName: string) => {
	const jsonData = fs.readFileSync(pathAndFileName, "utf8");
	const jsonObject = JSON.parse(jsonData);
	return jsonObject;
};

export const writeArrayOfObjectsToJsonFile = (
	array: any[],
	filePath: string
): void => {
	const jsonData = JSON.stringify(array, null, 2);
	fs.writeFileSync(filePath, jsonData, "utf8");
};

export const generateShortUUID = () => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let shortUUID = "";

	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		shortUUID += characters.charAt(randomIndex);
	}

	return shortUUID;
};
