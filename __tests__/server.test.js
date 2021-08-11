'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const { response } = require('express');
const request = supertest(server.app);

describe('working on my server', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
    })

    it('get data from /food ', async () => {
        const response = await request.get('/food'); 
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); 
    });

    it('craete new food', () => {
        const response = request.post('/food')
        .then((response)=>{ expect(response.status).toEqual(201)})

      });
      it('Update food by id', () => {
        const updateRecord = request.put('/food')
        .then((response)=>{ expect(response.status).toEqual(201)})
     
      });
      it('Delete food by id', () => {
        const updateRecord = request.delete('/food')
        .then((response)=>{ expect(response.status).toEqual(202)})
     
      });
  
});