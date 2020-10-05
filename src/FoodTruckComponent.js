import { LitElement, html, css } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

export class FoodTruckComponent extends ScopedElementsMixin(LitElement) {
  static get properties() {
    return {
      data: { type: Object },
      applicant: { type: String },
      address: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
      distance: { type: Number },
      originLatitude: { type: Number },
      originLongitude: { type: Number },
    };
  }

  getDirectionsLink() {
    return `https://www.google.com/maps/dir/?api=1&origin=${this.originLatitude},${this.originLongitude}&destination=${this.latitude},${this.longitude}`;
  }

  constructor() {
    super();
    this.data = {};
    this.originLatitude = '';
    this.originLongitude = '';
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.data) {
      this.applicant = this.data.applicant;
      this.address = this.data.address;
      this.latitude = this.data.latitude;
      this.longitude = this.data.longitude;
      this.distance = this.data.distance;
    }
  }

  static get styles() {
    return css`
      .column {
        float: left;
        width: 100%;
        padding: 10px;
        background-color: #ddd;
      }
      .row {
        border-bottom: 1px solid #aaa;
      }
      /* Clear floats after the columns */
      .row:after {
        content: '';
        display: table;
        clear: both;
      }
    `;
  }

  render() {
    return html`
      <div class="row">
        <div class="column">
          <h2>${this.applicant}</h2>
          <p>${this.address}</p>
          <p>Distance:${this.distance}Km</p>
          <p><a target="_blank" href="${this.getDirectionsLink()}">Directions</a></p>
        </div>
      </div>
    `;
  }
}

customElements.define('food-truck', FoodTruckComponent);
