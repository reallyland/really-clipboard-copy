interface Slotted {
  id: HTMLElement | null;
  for: HTMLElement | null;
}

import {
  css,
  customElement,
  html,
  LitElement,
  property,
} from 'lit-element';

const localName = 'really-clipboard-copy';

function toCopyNode(node: HTMLElement | HTMLInputElement | HTMLTextAreaElement) {
  if ('value' in node) {
    const preNode = document.createElement('pre');

    preNode.textContent = (node as HTMLInputElement).value;
    preNode.style.position = 'absolute';
    preNode.style.top = preNode.style.left = '200vh';
    preNode.style.opacity = '0';

    document.body.appendChild(preNode);

    return { node: preNode, temporary: true };
  }

  return { node, temporary: false };
}

@customElement(localName)
export class ReallyClipboardCopy extends LitElement {
  public static styles = [
    css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    `,
  ];

  @property({ type: String })
  public forSlot: string = 'clipboard-copy-for';

  @property({ type: String })
  public idSlot: string = 'clipboard-copy-id';

  private _idElement?: HTMLElement;

  private get _slot() {
    return this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
  }

  protected render() {
    return html`<slot @slotchange="${this._assignSlotted}"></slot>`;
  }

  private _assignSlotted() {
    const slot = this._slot;

    if (slot) {
      const forAttr = `[${this.forSlot}]`;
      const idAttr = `[${this.idSlot}]`;
      const nodes = slot.assignedNodes() as HTMLElement[];

      const slotted = nodes.reduce((p, n) => {
        if (n.nodeType === Node.ELEMENT_NODE) {
          if (p.for && p.id) return p;

          if (n.hasAttribute(forAttr)) {
            p.for = n;
          } else if (n.hasAttribute(idAttr)) {
            p.id = n;
          } else {
            const forElement = n.querySelector(forAttr) as HTMLElement | null;
            const idElement = n.querySelector(idAttr) as HTMLElement | null;

            if (forElement && p.for == null) { p.for = forElement; }
            if (idElement && p.id == null) { p.id = idElement; }
          }
        }

        return p;
      }, { id: null, for: null } as Slotted);
      const forSlotted = slotted.for;

      if (forSlotted) forSlotted.addEventListener('click', () => this._copyText());

      this._idElement = slotted.id!;
    }
  }

  private _copyText() {
    const idElement = this._idElement;

    if (idElement == null) return;

    const nodeObj = toCopyNode(idElement);
    const copyNode = nodeObj.node;

    const selection = getSelection()!;
    const range = document.createRange();

    selection.removeAllRanges();
    range.selectNodeContents(copyNode);
    selection.addRange(range);

    /**
     * NOTE(motss): Even though `document.execCommand` has been documented to have widely supported
     * for ages but there is actually a catch when comes to actual support in older browsers.
     *
     * In the early days, `document.execCommand` only supports a partial list of commands defined in
     * the specs and `copy` is unfortunately one of them.
     *
     * For in-depth implementation details of the `copy` command, visit https://bit.ly/2XxcXDF.
     */
    document.execCommand('copy');
    selection.removeAllRanges();

    if (nodeObj.temporary) document.body.removeChild(copyNode);

    this.dispatchEvent(new CustomEvent('content-copied', {
      bubbles: true,
      composed: true,
    }));
  }

}

declare global {
  interface HTMLElementTagNameMap {
    [localName]: ReallyClipboardCopy;
  }

}
