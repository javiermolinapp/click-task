import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTasksComponent } from './it-tasks.component';

describe('ItTasksComponent', () => {
  let component: ItTasksComponent;
  let fixture: ComponentFixture<ItTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
