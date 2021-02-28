import { TestBed, waitForAsync } from '@angular/core/testing'

import { commonTestingModules } from '../common/common.testing'
import { InventoryComponent } from './inventory.component'

describe('InventoryComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InventoryComponent],
        imports: commonTestingModules,
      }).compileComponents()
    })
  )

  it('should create the component', () => {
    const fixture = TestBed.createComponent(InventoryComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
