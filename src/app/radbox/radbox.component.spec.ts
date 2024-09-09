import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadboxComponent } from './radbox.component';

describe('RadboxComponent', () => {
  let component: RadboxComponent;
  let fixture: ComponentFixture<RadboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
