import { TestBed, async, fakeAsync, ComponentFixture, flushMicrotasks, flush, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { HttpClientTestingModule,
 } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let service: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [FormsModule, HttpClientTestingModule, ReactiveFormsModule, HttpClientModule],
      providers: [UsersService]
    }).compileComponents();

     // create component and test fixture
     fixture = TestBed.createComponent(AppComponent);

     // get test component from the fixture
     component = fixture.componentInstance;

     service = TestBed.get(UsersService);
    component.ngOnInit();
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('invalid-form', async(() => {
    expect(component.userForm.valid).toBe(false);
    component.userForm.controls['nombre'].setValue('david');
    component.userForm.controls['apellidos'].setValue('mora');
    component.userForm.controls['localidad'].setValue('');
    expect(component.userForm.valid).toBe(false);
  }));

  it('valid-form', () => {

    expect(component.userForm.valid).toBe(false);
    component.userForm.controls['nombre'].setValue('david');
    component.userForm.controls['apellidos'].setValue('mora');
    component.userForm.controls['localidad'].setValue('huelva');
    expect(component.userForm.valid).toBe(true);

  });

  it('form invalid when empty', () => {
    expect(component.userForm.valid).toBe(false);
  });

  it('getAll method', async(() => {

    fixture.detectChanges();

    spyOn(service, 'getAll').and.returnValue(Promise.resolve());

    component.getAll();

    fixture.whenStable().then(() => {
        expect(component.is).toBe(true);
    });
  }));
});
