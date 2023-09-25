import testRoutes from "../modules/getfortest"
import request from "supertest";
import app from "../app";

describe('GET /', ()=>{
    it("should return 200 OK and get the json", async ()=>{
        const res = await request(app).get('/').expect({msg: 'hello'});

    })
})