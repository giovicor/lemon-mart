import { Component, OnInit } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

import { AuthService } from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public authService: AuthService
  ) {
    iconRegistry.addSvgIcon(
      'green-leaf',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/green-leaf.svg')
    )
  }

  ngOnInit(): void {}
}
