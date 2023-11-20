import { Pipe, PipeTransform } from '@angular/core';
import {AssetPreviewError} from "./AssetPreviewError";

@Pipe({
  name: 'assetPreview'
})
export class AssetPreviewPipe implements PipeTransform {

  transform(asset?: any, ...args: Array<string | number>): string {
    if (!asset) {
      return '';
    }

    if (!asset.preview || typeof asset.preview !== 'string') {
      throw new AssetPreviewError(`Expected an Asset, got ${JSON.stringify(asset)}`);
    }

    const previewUrl = asset.preview.replace(/\\/g, '/');
    const fp = asset.focalPoint ? `&fpx=${asset.focalPoint.x}&fpy=${asset.focalPoint.y}` : '';
    const query = AssetPreviewPipe.getSizeQuery(args);
    return `${previewUrl}?${query}${fp}&format=webp`;
  }

  private static getSizeQuery(args?: (string | number)[]): string {
    if (!args || args.length === 0) {
      return 'preset=thumb';
    }

    if (args.length === 1) {
      return typeof args[0] === 'string' ? `preset=${args[0]}` : `w=${args[0]}`;
    } else {
      return `w=${args[0]}&h=${args[1]}`;
    }
  }}
