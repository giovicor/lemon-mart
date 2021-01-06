import { HttpClientModule } from '@angular/common/http'
import { TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { AppComponent } from './app.component'
import { MaterialModule } from './material.module'

describe('AppComponent', () => {

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule(
          {
            declarations: [AppComponent],
            imports: [RouterTestingModule, MaterialModule, HttpClientModule],
          }
        ).compileComponents()
      }
    )
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain(
      'Lemon Mart'
    )
  })
})
