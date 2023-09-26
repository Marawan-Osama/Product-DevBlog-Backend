import testRoutes from "../modules/getfortest"
import request from "supertest";
import app from "../app";


//testing only works without the app.listen in app.ts
describe('GET /', ()=>{
    it("should return 200 OK and get the json", async ()=>{
        const res = await request(app).get('/').expect({msg: 'hello'});

    })
})