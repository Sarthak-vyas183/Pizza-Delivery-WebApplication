// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { send } from "process";
import app from "./src/app";
import { calculateDiscount } from "./src/utiles"
import request from 'supertest'

describe("App", () => {

    it("should return correct discount amount", () => {
      const discount =  calculateDiscount(100, 10);
      expect(discount).toBe(10);
    })

    it("should retrun 200 status code", async () => {
       // eslint-disable-next-line @typescript-eslint/no-misused-promises
       const response = await request(app).get("/").send();
       expect(response.statusCode).toBe(201);
    })

})