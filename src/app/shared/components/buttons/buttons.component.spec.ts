import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonsComponent} from './buttons.component';
import {Icon} from "../../enum/icon";


describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correct text', () => {
    expect(component.name).toEqual('');

    component.name = 'Test';
    fixture.detectChanges();

    expect(component.name).toEqual('Test');

    component.name = 'Delete';
    fixture.detectChanges();

    expect(component.name).not.toEqual('Test');
    expect(component.name).toEqual('Delete');
  })

  it('should correct icon', () => {
    expect(component.icon).toEqual(Icon.none);

    component.icon = Icon.edit;
    fixture.detectChanges();

    expect(component.icon).toEqual(Icon.edit);

    component.icon = Icon.trash;
    fixture.detectChanges();

    expect(component.icon).not.toEqual(Icon.edit);
    expect(component.icon).toEqual(Icon.trash);
  })

  it('should correct position content', () => {
    // С неуказанными входными параметрами класс не будет добавлен
    expect(component.isSpaceBetween).toBeFalsy();

    // Если указана только иконка без текста, то класс не будет добавлен
    component.icon = Icon.edit;
    fixture.detectChanges();

    expect(component.isSpaceBetween).toBeFalsy();

    // Если указан только текст, то класс не будет добавлен
    component.icon = Icon.none;
    component.name = 'Test';
    fixture.detectChanges();

    expect(component.isSpaceBetween).toBeFalsy();

    // Если указан и текст, и иконка, то класс будет добавлен
    component.icon = Icon.edit;
    component.name = 'Test 2';
    fixture.detectChanges();

    expect(component.isSpaceBetween).toBeTruthy();
  })

  it('should correct background set', () => {
    // С неуказанными входным параметром заднего фона кнопки, класс не будет добавлен
    expect(component.isButtonBackground).toBeFalsy();

    // Если указанным входным параметром заднего фона кнопки, то класс не будет добавлен
    component.isBackground = true;
    fixture.detectChanges();

    expect(component.isButtonBackground).toBeTruthy();

  })
});
