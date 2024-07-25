/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import cors from "cors";
import { employeeRouter } from "./routers/employeeRouter";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import schema from "../data/schema";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send(`
<html>
	<body>
	<h1>${process.env.APP_TITLE}</h1>
	<ul>
		<li>GET all employees - <a href="/employees">/employees</a></li>
	</ul>
	</body>
</html>
	`);
});

const root = { siteTitle: () => "InfoGQL - GraphQL Showcase" };

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		rootValue: root,
		graphiql: true,
	})
);

app.use("/employees", employeeRouter);
