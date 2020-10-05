import { expect, fixture, html } from '@open-wc/testing';
// eslint-disable-next-line no-unused-vars
import { ErrorComponent } from '../ErrorComponent.js';

describe('<error-component>', () => {
  let el;

  describe('on first load', () => {
    before(async () => {
      el = await fixture(html`
                <error-message message="this is error message"></<error-message>
            `);
    });

    it('isaccessible', async () => {
      await expect(el).to.be.accessible();
    });

    it('should have error message', async () => {
      expect(el.message).to.exist;
    });

    it('should have  valid shadow dom', async () => {
      expect(el).shadowDom.to.equal('<div class="error">this is error message</div>');
    });
  });
});
