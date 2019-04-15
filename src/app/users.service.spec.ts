import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  it('get-All (SERVICE)',  (done: DoneFn) => {
    const service: UsersService = TestBed.get(UsersService);
    service.getAll().then(value => {
      expect(value[0].nombre).toBe('json-server');
      done();
    });
});

  it('saveData (SERVICE)',  (done: DoneFn) => {
    const user = {
      nombre: 'Antonio',
      apellidos: 'Mora',
      localidad: 'Almería'
    };

    const service: UsersService = TestBed.get(UsersService);
    service.saveData(user).then(value => {
      expect(value.nombre).toBe('Antonio');
      done();
    });
  });
});

