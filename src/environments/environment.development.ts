import {Injectable} from "@angular/core";
import {NoPreloading, PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs";

export const environment = {
  production: false,
};

@Injectable()
export class CustomPreloadModules implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return NoPreloading.prototype.preload(route, fn);
  }
}
