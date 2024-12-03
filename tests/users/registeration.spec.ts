 import  request  from "supertest";
import app from "../../src/app";
 describe("POST /auth/register" , () => {
      describe("Given all fields", () => {
             it("should return the 201 status code", async () => {
                //AAA
                //Arrange
                const userData = {
                    firstName : "sarthak",
                    lastName : "vyas",
                    email : "sarthak@gmail.com",
                    password : "secret"
                };
                //Act
                const response = await request(app)
                .post('/auth/register')
                .send(userData);

                //Assert
                expect(response.headers["content-type"]).toEqual(
                    expect.stringContaining("json"),
                )
                
                // it may be scond approach if faced any error 
                // expect(
                //     (response.headers as Record<string, string>)["content-type"]).toEqual(
                //     expect.stringContaining("json"),
                // )
             })  
          
            it("should persist the user in the database", async ()=>{
                 //Arrange
                 const userData = {
                    firstName : "sarthak",
                    lastName : "vyas",
                    email : "sarthak@gmail.com",
                    password : "secret"
                };
                //Act
                const response = await request(app)
                .post('/auth/register')
                .send(userData);

                //Assert
                expect(response.headers["content-type"]).toEqual(
                    expect.stringContaining("json"),
                )
                
            })

      });

      describe("Fields are missing", () => {
        
      })
      
 })