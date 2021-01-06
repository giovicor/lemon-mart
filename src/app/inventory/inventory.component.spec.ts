import { TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { MaterialModule } from '../material.module'
import { InventoryComponent } from './inventory.component'

describe('InventoryComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InventoryComponent],
        imports: [RouterTestingModule, MaterialModule],
      }).compileComponents()
    })
  )

  it('should create the component', () => {
    const fixture = TestBed.createComponent(InventoryComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
