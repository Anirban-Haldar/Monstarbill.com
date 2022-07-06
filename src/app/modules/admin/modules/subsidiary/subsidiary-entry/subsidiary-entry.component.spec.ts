import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiaryEntryComponent } from './subsidiary-entry.component';

describe('SubsidiaryEntryComponent', () => {
  let component: SubsidiaryEntryComponent;
  let fixture: ComponentFixture<SubsidiaryEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidiaryEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidiaryEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
