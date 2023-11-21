import {NgModule} from '@angular/core';
import {TruncatePipe} from "../../pipes/truncate/truncate.pipe";
import {FormatPricePipe} from "../../pipes/format-price/format-price.pipe";
import {AssetPreviewPipe} from "../../pipes/asset-preview/asset-preview.pipe";

@NgModule({
  declarations: [AssetPreviewPipe, TruncatePipe, FormatPricePipe],
  exports: [AssetPreviewPipe, TruncatePipe, FormatPricePipe],
})
export class SharedModule {
}
