import { LionInput } from '@lion/input';
import { LitElement, html, css } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LionForm } from '@lion/form';
import { LionButton } from '@lion/button';
import validator from './validators/search.js';
import SearchService from './service/search.js';
import { FoodTruckComponent } from './FoodTruckComponent.js';
import { ErrorComponent } from './ErrorComponent.js';

export class SearchComponent extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-form': LionForm,
      'lat-input': LionInput,
      'lon-input': LionInput,
      'lion-button': LionButton,
      'food-truck': FoodTruckComponent,
      'error-message': ErrorComponent,
    };
  }

  constructor() {
    super();
    this.latitude = '';
    this.longitude = '';
    this.trucks = [];
    this.errors = [];
  }

  static get styles() {
    return css`
      :host {
        font-family: Arial, Helvetica, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      .h2 {
        padding: 10px;
      }
      .form-inline {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        padding: 10px;
      }

      .label {
        margin: 5px 10px 5px 0;
      }

      .form-inline input {
        vertical-align: middle;
        margin: 5px 10px 5px 0;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #ddd;
      }

      @media (max-width: 800px) {
        .form-inline input {
          margin: 10px 0;
        }

        .form-inline {
          flex-direction: column;
          align-items: stretch;
        }
      }
    `;
  }

  static get properties() {
    return {
      latitude: { type: Number },
      longitude: { type: Number },
      trucks: { type: Array },
      errors: { type: Array }
    };
  }

  getNearestFoodTrucks() {
    this.trucks = [];
    const frm = this.shadowRoot.querySelector('#search');
    const frmData = frm.serializedValue;
    this.errors = validator.getSearchErrors(frmData);
    if (this.errors.length === 0) {
      this.latitude = Number(frmData.latitude);
      this.longitude = Number(frmData.longitude);
      this.searchService = new SearchService(Number(this.latitude), Number(this.longitude));
      this.searchService
        .getFoodTrucks()
        .then(res => {
          if(res.data.errors.length > 0){
            console.log("validation errors from server", res.data.errors);
            this.errors.push("Invalid request, please check logs for details.");
            this.requestUpdate();
          } else {
            this.trucks = res.data.data;
          }  
        }).catch(error => {
          console.log("Something went wrong, make sure server is running.");
          this.errors.push("Something went wrong, make sure server is running.");
          this.requestUpdate();
        });
    }
  }



  render() {
    return html`
      <h2>Search for nearest food trucks</h2>
      <ul>
        ${this.errors.map(item => html`<li><error-message message="${item}"></error-message></li>`)}
      </ul>
      <lion-form id="search" name="search">
        <form @submit="${ev => ev.preventDefault()}" class="form-inline">
          <lat-input label="Latitude" name="latitude" .modelValue="${this.latitude}"></lat-input>
          <lon-input label="Longitude" name="longitude" .modelValue="${this.longitude}"></lon-input>
          <lion-button @click="${this.getNearestFoodTrucks}"> Search </lion-button>
        </form>
      </lion-form>
      ${this.trucks.map(
        item =>
          html` <food-truck
            data="${JSON.stringify(item)}"
            originLatitude="${this.latitude}"
            originLongitude="${this.longitude}"
          ></food-truck>`,
      )}
    `;
  }
}
