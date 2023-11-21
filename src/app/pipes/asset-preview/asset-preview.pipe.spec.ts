import { AssetPreviewPipe } from './asset-preview.pipe';
import { AssetPreviewError } from './assetPreviewError';

describe('AssetPreviewPipe', () => {
  let pipe: AssetPreviewPipe;

  beforeEach(() => {
    pipe = new AssetPreviewPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return an empty string if asset is falsy', () => {
    const result = pipe.transform(null);
    expect(result).toBe('');
  });

  it('should throw AssetPreviewError if asset.preview is not a string', () => {
    const asset = { preview: 123 }; // Not a string
    expect(() => pipe.transform(asset)).toThrowError(AssetPreviewError);
  });

  it('should return the correct preview URL with preset query', () => {
    const asset = { preview: 'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg' };
    const result = pipe.transform(asset, 'small');
    expect(result).toBe('https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg?preset=small&format=webp');
  });

  it('should return the correct preview URL with width and height queries', () => {
    const asset = { preview: 'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg' };
    const result = pipe.transform(asset, 100, 200);
    expect(result).toBe('https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg?w=100&h=200&format=webp');
  });

  it('should handle focal point', () => {
    const asset = {
      preview: 'https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg',
      focalPoint: { x: 0.5, y: 0.5 }
    };
    const result = pipe.transform(asset, 100, 200);
    expect(result).toBe('https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg?w=100&h=200&format=webp&fpx=0.5&fpy=0.5');
  });
});
