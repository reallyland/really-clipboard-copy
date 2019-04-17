import { ReallyClipboardCopy } from '../really-clipboard-copy.js';

import '../really-clipboard-copy.js';

const assert = chai.assert;
let element: ReallyClipboardCopy;

describe('really-clipboard-copy', () => {
  beforeEach(() => {
    element = document.createElement('really-clipboard-copy') as ReallyClipboardCopy;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('renders initial content', async () => {
    await element.updateComplete;

    assert.ok(element);
  });

});
