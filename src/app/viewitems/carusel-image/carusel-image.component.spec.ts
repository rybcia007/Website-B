/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaruselImageComponent } from './carusel-image.component';

describe('CaruselImageComponent', () => {
  let component: CaruselImageComponent;
  let fixture: ComponentFixture<CaruselImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaruselImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
