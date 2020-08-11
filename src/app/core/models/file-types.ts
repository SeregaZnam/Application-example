import { PDFSource } from 'ng2-pdf-viewer';

export type FileTypes =
  | string
  | ArrayBuffer
  | Uint8Array
  | PDFSource;

export type PdfFileType = Exclude<FileTypes, ArrayBuffer>;
