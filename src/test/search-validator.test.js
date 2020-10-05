import { expect } from '@open-wc/testing';
import validator from '../validators/search.js';

describe('validator', () => {
  it('should return errors if no form data ', () => {
    const frmData = {};
    const errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.an('array').to.have.lengthOf(2);
  });

  it('should return error for invalid latitude ', () => {
    let frmData;
    let errors;
    frmData = { latitude: '', longitude: '-122.416394930077' };
    errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.an('array').to.have.lengthOf(1);

    frmData = { latitude: 'sttt', longitude: '-122.416394930077' };
    errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.an('array').to.have.lengthOf(1);

    frmData = { latitude: '-122.416394930077', longitude: '-122.416394930077' };
    errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.an('array').to.have.lengthOf(1);
  });

  it('should return error for invalid longitude ', () => {
    let frmData;
    let errors;
    frmData = { latitude: '37.7767362127501', longitude: '' };
    errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.an('array').to.have.lengthOf(1);

    frmData = { latitude: '37.7767362127501', longitude: 'string' };
    errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.an('array').to.have.lengthOf(1);

    frmData = { latitude: '37.7767362127501', longitude: '-200.416394930077' };
    errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.an('array').to.have.lengthOf(1);
  });

  it('should return no errors for valid frmdata ', () => {
    const frmData = { latitude: '37.7767362127501', longitude: '-122.416394930077' };
    const errors = validator.getSearchErrors(frmData);
    expect(errors).to.be.empty;
  });
});
