import request from 'supertest';
import { app } from './app';
import { QUESTIONS } from './data/question.data';

describe("Testing the endpoints", () => {

    test("It should get the questions with a get", done => {
      request(app)
        .get("/questions")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body).toEqual(QUESTIONS)
          done();
        });
    });

    test("It should post the answers and get the results", done => {
      const requestBody = {
        answers: [1,2,3,4]
      };
      const expectedResponse = {
        result: 10
      }

      request(app)
        .post("/result").send(requestBody)
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body).toEqual(expectedResponse)
          done();
        });
    });
  });