import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {ToggleNotificationService} from "../../services/toggle-notification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle: boolean = false
  cartItemsCount$: Observable<number>;
  categories = [
    { label: 'Sports & Outdoor', link: '/category/sports-outdoor' },
    { label: 'Equipment', link: '/category/equipment' },
    { label: 'Footwear', link: '/category/footwear' },
    { label: 'Home & Garden', link: '/category/home-garden' },
    { label: 'Plants', link: '/category/plants' },
    { label: 'Furniture', link: '/category/furniture' },
    { label: 'Electronics', link: '/category/electronics' },
    { label: 'Computers', link: '/category/computers' },
    { label: 'Photo', link: '/category/camera-photo' }
  ];
  constructor(private store: Store<AppState>,
              private toggleNotificationService: ToggleNotificationService,
  ) {
    this.cartItemsCount$ = this.store.select(state => state.cart.items.length);
  }
  toggleOverlay() {
    this.toggleNotificationService.toggleOverlay();
  }
  ngOnInit() {
    this.toggleNotificationService.overlayToggle$.subscribe(toggle => {
      this.toggle = toggle;
    });
  }
}
