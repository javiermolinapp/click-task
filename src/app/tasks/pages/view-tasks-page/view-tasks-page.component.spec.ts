import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTasksPageComponent } from './view-tasks-page.component';

describe('ViewTasksPageComponent', () => {
  let component: ViewTasksPageComponent;
  let fixture: ComponentFixture<ViewTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
