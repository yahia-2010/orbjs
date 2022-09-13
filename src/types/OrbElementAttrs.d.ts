export {};

declare global {
  interface OrbElementAttrs extends OrbElementEvents {
    accessKey?: string;
    accessKeyLabel?: string;
    align?: string;
    clientHeight?: number;
    clientLeft?: number;
    clientTop?: number;
    clientWidth?: 1264;
    contentEditable?: string;
    dir?: string;
    draggable?: boolean;
    enterKeyHint?: string;
    hidden?: boolean;
    id?: string;
    innerHTML?: string;
    innerText?: string;
    inputMode?: string;
    isConnected?: true;
    isContentEditable?: boolean;
    lang?: string;
    prefix?: (e: Event) => void | null;
    previousElementSibling?: (e: Event) => void | null;
    previousSibling?: (e: Event) => void | null;
    slot?: string;
    spellcheck?: boolean;
    style?: OrbStyleSheet;
    tabIndex?: number;
  }
}
