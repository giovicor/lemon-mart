import { HttpClientModule } from '@angular/common/http'
import { TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { MaterialModule } from '../material.module'
import { ManagerComponent } from './manager.component'

describe('ManagerComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ManagerComponent],
        imports: [RouterTestingModule, MaterialModule, HttpClientModule],
      }).compileComponents()
    })
  )

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ManagerComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
