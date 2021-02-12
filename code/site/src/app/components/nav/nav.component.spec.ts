import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a name "Alexander J. Woods"', () => {
    expect(component.name).toEqual('Alexander J. Woods');
  });

  it('should have 5 links', () => {
    expect(component.links.length).toEqual(5);
  });

  it('should have 5 nav items', () => {
    expect(component.itemNames.length).toEqual(5);
  });
});
