/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReklamComponent } from './reklam.component';

describe('ReklamComponent', () => {
  let component: ReklamComponent;
  let fixture: ComponentFixture<ReklamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReklamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReklamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
