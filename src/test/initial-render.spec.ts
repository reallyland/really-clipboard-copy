import { ReallyClipboardCopy } from '../really-clipboard-copy.js';

import '../really-clipboard-copy.js';

const { strictEqual } = chai.assert;
const localName = 'really-clipboard-copy';

let el: ReallyClipboardCopy;

describe(localName, () => {
  describe('initial render', () => {
    const getAssignedNodes = (node: HTMLElement) => {
      const slotEl = node.shadowRoot!.querySelector('slot') as HTMLSlotElement;
      const assignedNodes = Array.from(slotEl.assignedNodes()).filter(
        n => n.nodeType === Node.ELEMENT_NODE);

      return assignedNodes;
    };

    beforeEach(async () => {
      el = document.createElement(localName) as ReallyClipboardCopy;
      document.body.appendChild(el);

      await el.updateComplete;
    });

    afterEach(() => {
      document.body.removeChild(el);
    });

    it(`renders with no nodes`, () => {
      strictEqual(el.innerHTML, '', `Expected no nodes on initial render`);
      strictEqual(getAssignedNodes(el).length, 0, `Expected no assigned nodes in shadow root`);
    });

    it(`renders with nodes (div + button) in light DOM`, async () => {
      const divEl = document.createElement('div');
      const buttonEl = document.createElement('button');

      divEl.textContent = 'Hello, World!';
      divEl.setAttribute('id', `${localName}-id`);

      buttonEl.textContent = 'Copy';
      buttonEl.setAttribute('for', `${localName}-for`);

      el.appendChild(divEl);
      el.appendChild(buttonEl);

      await el.updateComplete;

      strictEqual(
        el.innerHTML,
        [
          '<div id="really-clipboard-copy-id">Hello, World!</div>',
          '<button for="really-clipboard-copy-for">Copy</button>',
        ].join(''),
        `Expected nodes (div + button) in light DOM`);
      strictEqual(getAssignedNodes(el).length, 2, `Expected assigned nodes`);
    });

    it(`renders with nested nodes (div + button) in light DOM`, async () => {
      const divEl = document.createElement('div');
      const buttonEl = document.createElement('button');
      const containerEl = document.createElement('div');

      divEl.textContent = 'Hello, World!';
      divEl.setAttribute('id', `${localName}-id`);

      buttonEl.textContent = 'Copy';
      buttonEl.setAttribute('for', `${localName}-for`);

      containerEl.appendChild(divEl);
      containerEl.appendChild(buttonEl);

      el.appendChild(containerEl);

      await el.updateComplete;

      strictEqual(
        el.innerHTML,
        [
          '<div>',
          '<div id="really-clipboard-copy-id">Hello, World!</div>',
          '<button for="really-clipboard-copy-for">Copy</button>',
          '</div>',
        ].join(''),
        `Expected nodes (div + button) in light DOM`);
      strictEqual(getAssignedNodes(el).length, 1, `Expected assigned nodes`);
    });

    it(`renders with defined properties and nodes (div + button) in light DOM`, async () => {
      const divEl = document.createElement('div');
      const buttonEl = document.createElement('button');

      divEl.textContent = 'Hello, World!';
      divEl.setAttribute('id', 'copy-id');

      buttonEl.textContent = 'Copy';
      buttonEl.setAttribute('for', 'copy-for');

      el.appendChild(divEl);
      el.appendChild(buttonEl);

      el.idSlot = 'copy-id';
      el.forSlot = 'copy-for';
      await el.updateComplete;

      strictEqual(
        el.innerHTML,
        [
          '<div id="copy-id">Hello, World!</div>',
          '<button for="copy-for">Copy</button>',
        ].join(''),
        `Expected nodes (div + button) in light DOM`);
      strictEqual(getAssignedNodes(el).length, 2, `Expected assigned nodes`);
    });

  });

});