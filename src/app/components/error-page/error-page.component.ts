import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open('This is a notification!', 'Show Me', {
      duration: 5000,  // Duration in milliseconds
      horizontalPosition: 'end', // Position at the right
      verticalPosition: 'top',    // Position at the top
      panelClass: ['custom-snackbar'], // Custom styling
    });
  }

}
