import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwTextComponent } from './hw-text.component';

describe('HwTextComponent', () => {
  let component: HwTextComponent;
  let fixture: ComponentFixture<HwTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
