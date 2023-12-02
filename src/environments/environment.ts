import {Injectable} from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, Route} from '@angular/router';
import {Observable} from 'rxjs';

export const environment = {
  production: true,
};

@Injectable()
export class CustomPreloadModules implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return PreloadAllModules.prototype.preload(route, fn);
  }
}
