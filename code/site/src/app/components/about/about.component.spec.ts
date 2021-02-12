import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('First name and middle initial should be "Alexander J."', () => {
    expect(component.firstAndMiddleInitial).toBe('Alexander J.');
  });

  it('Last name should be "Woods"', () => {
    expect(component.lastName).toBe('Woods');
  });

  it('Email address should be "alexanderjwoods06@outlook.com"', () => {
    expect(component.email).toBe('alexanderjwoods06@outlook.com');
  });

  it('About is not empty', () => {
    expect(component.about).not.toBeUndefined();
    expect(component.about).not.toBeNull();
  })
});
