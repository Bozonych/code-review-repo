import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBookServiceListComponent } from './component-book-service-list.component';

describe('ComponentBookServiceListComponent', () => {
  let component: ComponentBookServiceListComponent;
  let fixture: ComponentFixture<ComponentBookServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBookServiceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentBookServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
