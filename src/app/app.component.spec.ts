import { TestBed, waitForAsync } from '@angular/core/testing'
import { MediaObserver } from '@angular/flex-layout'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import {
  DomSanitizerFake,
  MatIconRegistryFake,
  MediaObserverFake,
  commonTestingModules,
} from './common/common.testing'

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [commonTestingModules],
        providers: [
          { provide: MediaObserver, useClass: MediaObserverFake },
          { provide: MatIconRegistry, useClass: MatIconRegistryFake },
          { provide: DomSanitizer, useClass: DomSanitizerFake },
        ],
      }).compileComponents()
    })
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain('Lemon Mart')
  })
})
