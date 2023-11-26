import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('inv-counter')
export class Counter extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property({ type: Boolean })
  disabled = false

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
        <button ?disabled=${this.disabled} type="button" class="btn btn-outline-primary" @click=${this._onClick}>
          <slot></slot>${this.count}
        </button>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    button {
      border-radius: 8px;
      border: 1px solid blue;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: white;
      cursor: pointer;
      transition: border-color 0.25s;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'inv-counter': Counter
  }
}
