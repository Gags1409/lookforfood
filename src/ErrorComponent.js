/**
 * Error component to display error
 *
 * @element error-message
 *
 *
 * @prop {string} message - error message
 *
 *
 */
import { LitElement, html, css } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

export class ErrorComponent extends ScopedElementsMixin(LitElement) {
  static get properties() {
    return {
      message: { type: String },
    };
  }

  constructor() {
    super();
    this.message = '';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static get styles() {
    return css`
      .error {
        color: #8b0000;
      }
    `;
  }

  render() {
    return html` <div class="error">${this.message}</div> `;
  }
}

customElements.define('error-message', ErrorComponent);
