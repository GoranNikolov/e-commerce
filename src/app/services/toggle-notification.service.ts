import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToggleNotificationService {
  private overlayToggleSubject = new BehaviorSubject<boolean>(false);
  overlayToggle$: Observable<boolean> = this.overlayToggleSubject.asObservable();

  toggleOverlay() {
    this.overlayToggleSubject.next(!this.overlayToggleSubject.value);
  }
}
