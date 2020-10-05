import { expect } from '@open-wc/testing';
import sinon from 'sinon';
import SearchService from '../service/search.js';
import {validOutput,invalidInput} from './test-suite/trucks.js';

describe('service', () => {
    let searchService;

    describe('should return error if invalid input', () => {
        beforeEach(async () => {
            searchService = new SearchService('xczx', 'xvxv');
            sinon.stub(searchService, 'getFoodTrucks').resolves(invalidInput);
        });
        afterEach(async () => {
            sinon.restore();
        });
  
        it('should have 2 errors', async () => {
            const result = await searchService.getFoodTrucks();
            expect(result.errors).to.be.an('array').to.have.lengthOf(2);
        });

    });
   
    describe('should return valid response', () => {
        beforeEach(async () => {
            searchService = new SearchService('37.7767362127501', '-122.416394930077');
            sinon.stub(searchService, 'getFoodTrucks').resolves(validOutput);
        });

        afterEach(async () => {
            sinon.restore();
        });
    
        it('response array should have 5 trucks data', async () => {
            const result = await searchService.getFoodTrucks();
            expect(result.data).to.be.an('array').to.have.lengthOf(5);
        });


    });
});
