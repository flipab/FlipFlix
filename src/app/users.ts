export class Users {
      id: number;
      login: string;
      senha: number;
      administrador: boolean;

      constructor(id: number, login: string, senha: number, administrador: boolean)
      {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.administrador = administrador;

      }
}
