import supertest from "supertest";
import { server } from "../src/server";

export const test = supertest(server);