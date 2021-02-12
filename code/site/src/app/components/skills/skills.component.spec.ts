import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "Skills"', () => {
    expect(component.title).toEqual('Skills');
  });

  it('should have a languages header "Programming Languages & Tools"', () => {
    expect(component.languagesHeader).toEqual('Programming Languages & Tools');
  });

  it('should have workflow header "Workflow"', () => {
    expect(component.workflowHeader).toEqual('Workflow');
  });

  it('should have 16 languages listed', () => {
    expect(component.listLanguages.length).toEqual(16);
  });

  it('should have 6 workflow items', () => {
    expect(component.workflowList.length).toEqual(6);
  });
});
