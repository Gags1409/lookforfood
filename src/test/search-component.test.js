import { expect, fixture, html, elementUpdated } from '@open-wc/testing';
import '../__elements-definitions/search-component.js';
import sinon from 'sinon';
import { validOutput } from './test-suite/trucks.js';

describe('<search-component>', () => {
  let el;

  describe('on first load', () => {
    before(async () => {
      el = await fixture(html` <search-component></search-component> `);
    });

    it('isaccessible', async () => {
      await expect(el).to.be.accessible();
    });

    it('should have latitude field', async () => {
      const latField = el.constructor.getScopedTagName('lat-input');
      expect(latField).to.exist;
    });

    it('should have longitude field', async () => {
      const lonField = el.constructor.getScopedTagName('lon-input');
      expect(lonField).to.exist;
    });

    it('should have latitude null ', async () => {
      expect(el.latitude).to.equal('');
    });

    it('should have longitude null ', async () => {
      expect(el.longitude).to.equal('');
    });

    it('should have search data empty ', async () => {
      expect(el.trucks).to.be.empty;
    });
    it('should have no errors ', async () => {
      expect(el.errors).to.be.empty;
    });
  });

  describe('on submit valid latitude and longitude', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <search-component
          latitude="37.7767362127501"
          longitude="-122.416394930077"
        ></search-component>
      `);
      el.shadowRoot.querySelector(el.constructor.getScopedTagName('lion-button')).click();
      sinon.stub(el.searchService, 'getFoodTrucks').resolves(validOutput);
      await elementUpdated(el);
    });

    afterEach(async () => {
      sinon.restore();
    });

    it('should have latitude value ', async () => {
      expect(el.latitude).to.equal(37.7767362127501);
    });

    it('should have longitude value ', async () => {
      expect(el.longitude).to.equal(-122.416394930077);
    });

    it('should have no errors ', async () => {
      expect(el.errors).to.be.an('array').to.be.empty;
    });

    it('should have result ', async () => {
      console.log('trucks', el.trucks);
    });
  });
});
