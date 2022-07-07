import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerterinaryComponent } from './verterinary.component';

describe('VerterinaryComponent', () => {
  let component: VerterinaryComponent;
  let fixture: ComponentFixture<VerterinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerterinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerterinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
