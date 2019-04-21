import { TestBed, fakeAsync } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsersService', () => {

  let usersService: UsersService;


  beforeEach(() => { TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [UsersService]
  });
  usersService = TestBed.get(UsersService); // Add this
});


  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  it('getAll (SERVICE)',  () => {
    const userResponse = [
      {
        id: '1',
        nombre: 'Jane',
        apellidos: 'Designer',
        localidad: 'Blastoise'
      },
      {
        id: '2',
        nombre: 'Bob',
        apellidos: 'Developer',
        localidad: 'Charizard'
      }
    ];

    spyOn(usersService, 'getAll').and.callFake( function() {
      return Promise.resolve(userResponse);
    });

    usersService.getAll().then(value => {
      expect(value).toEqual(userResponse);
    });
});

  it('saveData (SERVICE)',  () => {

    const user = {
      nombre: 'Antonio',
      apellidos: 'Mora',
      localidad: 'Almería'
    };

    spyOn(usersService, 'saveData').and.callFake( function() {
      return Promise.resolve(true);
    });

    usersService.saveData(user).then(value => {
      expect(value).toBe(true);
    });
  });
});

