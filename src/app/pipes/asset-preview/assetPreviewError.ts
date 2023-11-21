export class AssetPreviewError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AssetPreviewError';
  }
}
