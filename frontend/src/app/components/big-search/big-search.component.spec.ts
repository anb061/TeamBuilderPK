import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSearchComponent } from './big-search.component';

describe('BigSearchComponent', () => {
  let component: BigSearchComponent;
  let fixture: ComponentFixture<BigSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
