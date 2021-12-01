import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private _usersService: UsersService ) { }

  public users: Users[];

  ngOnInit() {

    this._usersService.getUsers()
      .subscribe(
        retorno => {
          this.users = retorno.map (
            item => {
              return new Users(
                item.id,
                item.login,
                item.senha,
                item.administrador,
              )
            }
          )
        }
      )

  }

}
