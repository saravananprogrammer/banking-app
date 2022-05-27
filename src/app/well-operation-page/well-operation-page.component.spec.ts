import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellOperationPageComponent } from './well-operation-page.component';

describe('WellOperationPageComponent', () => {
  let component: WellOperationPageComponent;
  let fixture: ComponentFixture<WellOperationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellOperationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellOperationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
