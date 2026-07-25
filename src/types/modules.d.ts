declare module '@point-of-sale/receipt-printer-encoder' {
  export default class ReceiptPrinterEncoder {
    constructor(options?: { language?: string; width?: number; imageMode?: string });
    initialize(): this;
    align(alignment: 'left' | 'center' | 'right'): this;
    bold(value: boolean): this;
    text(value: string): this;
    newline(): this;
    encode(): Uint8Array;
    // Add other methods if needed
  }
}
