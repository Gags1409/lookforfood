import { expect, fixture, html } from '@open-wc/testing';
// eslint-disable-next-line no-unused-vars
import { FoodTruckComponent } from '../FoodTruckComponent.js';

describe('<food-truck-component>', () => {
  let el;

  describe('on first load', () => {
    before(async () => {
      const truckData = JSON.stringify({
        applicant: 'Street Meet',
        address: 'HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)',
        latitude: '37.7767362127502',
        longitude: '-122.416394930076',
        distance: '1.23Km',
      });
      el = await fixture(html`
        <food-truck
          data="${truckData}"
          originLatitude="37.7767362127501"
          originLongitude="-122.416394930077"
        ></food-truck>
      `);
    });

    it('isaccessible', async () => {
      await expect(el).to.be.accessible();
    });

    it('should have applicant', async () => {
      expect(el.applicant).to.equal('Street Meet');
    });

    it('should have address', async () => {
      expect(el.address).to.equal('HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)');
    });

    it('should have latitude', async () => {
      expect(el.latitude).to.equal('37.7767362127502');
    });

    it('should have longitude', async () => {
      expect(el.latitude).to.equal('37.7767362127502');
    });

    it('should have distance', async () => {
      expect(el.distance).to.equal('1.23Km');
    });

    it('should have origin latitude', async () => {
      expect(el.originLatitude).to.equal(37.7767362127501);
    });

    it('should have origin longitude', async () => {
      expect(el.originLongitude).to.equal(-122.416394930077);
    });

    it('should have directions link ', async () => {
      expect(el.getDirectionsLink()).to.equal(
        'https://www.google.com/maps/dir/?api=1&origin=37.7767362127501,-122.416394930077&destination=37.7767362127502,-122.416394930076',
      );
    });

    it('should have valid shadow dom', async () => {
      expect(el).shadowDom.to.equal(
        '<div class="row">\n  <div class="column">\n    <h2>\n      Street Meet\n    </h2>\n    <p>\n      HOWARD ST: 01ST ST to MALDEN ALY (500 - 589)\n    </p>\n    <p>\n      Distance:1.23KmKm\n    </p>\n    <p>\n      <a\n        href="https://www.google.com/maps/dir/?api=1&amp;origin=37.7767362127501,-122.416394930077&amp;destination=37.7767362127502,-122.416394930076"\n        target="_blank"\n      >\n        Directions\n      </a>\n    </p>\n  </div>\n</div>\n',
      );
    });
  });
});
