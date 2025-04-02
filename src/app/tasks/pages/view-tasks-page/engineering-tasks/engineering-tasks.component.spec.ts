import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringTasksComponent } from './engineering-tasks.component';

describe('EngineeringTasksComponent', () => {
  let component: EngineeringTasksComponent;
  let fixture: ComponentFixture<EngineeringTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
