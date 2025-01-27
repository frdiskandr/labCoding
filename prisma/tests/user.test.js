import supertest from "supertest";
import app from "../src/app/web.js";
import { prisma } from "../src/app/database.js";
import { describe, it, afterEach, expect } from "@jest/globals";

describe("POST /api/users", () => {
    it("should create a new user", async () => {
        let result = await supertest(app).post("/api/register").send({
            username: "test",
            password: "1234",
            name: "from test",
        });

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("test");
        expect(result.body.data.name).toBe("from test");
    });

    afterEach(async () => {
        await prisma.user.deleteMany({
            where: {
                username: "test",
            },
        });
    });
});

describe("GET /api/login", () => {
    it("should login a user", async () => {
        const result = await supertest(app).post("/api/login").send({
            username: "admin",
            password: "1234",
        });

        expect(result.status).toBe(200);
        expect(result.body.result.token).toBe(result.body.result.token);
    });
});
