import request from "supertest";
import app from "../src/app"
describe("Todo API", () => {
    it("should create a new todo", async () => {
        const res = await request(app)
            .post("/api/todos")
            .send({
                title: "Write tests",
                completed: false
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("generatedToDo");
    });

    it("should return all todos", async () => {
        const res = await request(app).get("/api/todos");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });


    it("should return todo ", async () => {
        const postRes = await request(app)
            .post("/api/todos")
            .send({
                title: "Test todo",
                completed: false
            });
        const id = postRes.body.generatedToDo.id

        const res = await request(app)
            .get(`/api/todos/${id}`);
        expect(res.statusCode).toEqual(200);
    });

    it("should delete todo ", async () => {
        const postRes = await request(app)
            .post("/api/todos")
            .send({
                title: "Test todo",
                completed: false
            });

        const id = postRes.body.generatedToDo.id

        const res = await request(app)
            .delete(`/api/todos/${id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("message")
    });

    it("should put/update todo ", async () => {
        const postRes = await request(app)
            .post("/api/todos")
            .send({
                title: "Test todo",
                completed: false
            });
        const id = postRes.body.generatedToDo.id

        const res = await request(app)
            .put(`/api/todos/${id}`).send({
                title: "Gym!",
                completed: true
            });
        expect(res.statusCode).toEqual(200);
    });

});
