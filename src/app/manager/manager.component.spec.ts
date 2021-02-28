import { TestBed, waitForAsync } from '@angular/core/testing'

import { commonTestingModules } from '../common/common.testing'
import { ManagerComponent } from './manager.component'

describe('ManagerComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ManagerComponent],
        imports: commonTestingModules,
      }).compileComponents()
    })
  )

  it('should create the component', () => {
    const fixture = TestBed.createComponent(ManagerComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
