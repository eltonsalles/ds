import { ScopedElementsMixin } from '@open-wc/scoped-elements/html-element.js';

export class MySpan extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement('style');
    const span = document.createElement('span');
    span.textContent = 'MySpan 2';

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(span);

    style.textContent = `:host { background: green; padding: 16px; }`;

  }
}

export class MyElement extends ScopedElementsMixin(HTMLElement) {
  static scopedElements = {
    'my-span': MySpan,
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = '<my-span></my-span>';
  }
}
