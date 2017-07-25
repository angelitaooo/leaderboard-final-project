import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactTableComponent } from './compact-table.component';

describe('CompactTableComponent', () => {
  let component: CompactTableComponent;
  let fixture: ComponentFixture<CompactTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
