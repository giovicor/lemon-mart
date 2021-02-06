import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { combineLatest } from 'rxjs'
import { filter, tap } from 'rxjs/operators'

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Hello, Simple Limoncu!</span>
      <button mat-raised-button color="primary" (click)="login()">
        Login as Manager
      </button>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login('manager@test.com', '12345678')

    combineLatest([this.authService.authStatus$, this.authService.currentUser$])
      .pipe(
        tap(([authStatus, user]) => {
          console.log('authStatus.isAuthenticated: ' + authStatus.isAuthenticated)
          console.log('user._id: ' + user._id)
        }),
        filter(([authStatus, user]) => authStatus.isAuthenticated && user?._id !== ''),
        tap(([authStatus, user]) => {
          this.router.navigate(['/manager'])
        })
      )
      .subscribe()
  }
}
