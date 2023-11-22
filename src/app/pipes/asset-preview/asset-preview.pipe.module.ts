import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssetPreviewPipe} from "./asset-preview.pipe";

@NgModule({
  declarations: [AssetPreviewPipe],
  imports: [
    CommonModule
  ],
  exports: [AssetPreviewPipe]
})
export class AssetPreviewPipeModule {
}
