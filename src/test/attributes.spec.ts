import { ReallyClipboardCopy } from '../really-clipboard-copy.js';

import '../really-clipboard-copy.js';

const { strictEqual } = chai.assert;
const localName = 'really-clipboard-copy';

let el: ReallyClipboardCopy;

describe(localName, () => {
  describe('attributes', () => {
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

    it(`renders with initial attributes`, () => {
      strictEqual(el.getAttribute('forslot'), null, `'forslot' not set`);
      strictEqual(el.getAttribute('idslot'), null, `'idslot' not set`);

      strictEqual(el.forSlot, `clipboard-copy-for`, `'forSlot' not matched`);
      strictEqual(el.idSlot, `clipboard-copy-id`, `'idSlot' not matched`);

      strictEqual(el.innerHTML, '', `Expected no nodes in light DOM`);
      strictEqual(
        getAssignedNodes(el).length,
        0,
        `No assigned nodes should render in shadow root`);
    });

    it(`renders with defined attributes`, async () => {
      el.setAttribute('idslot', 'copy-id');
      el.setAttribute('forslot', 'copy-for');
      await el.updateComplete;

      strictEqual(el.getAttribute('forslot'), 'copy-for', `'forslot' not set`);
      strictEqual(el.getAttribute('idslot'), 'copy-id', `'idslot' not set`);

      strictEqual(el.forSlot, 'copy-for', `'forSlot' not updated`);
      strictEqual(el.idSlot, 'copy-id', `'idSlot' not updated`);

      strictEqual(el.innerHTML, '', `Expected no nodes in light DOM`);
      strictEqual(
        getAssignedNodes(el).length,
        0,
        `No assigned nodes should render in shadow root`);
    });
  });

});
