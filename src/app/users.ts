export class Users {
      id: number;
      login: string;
      nome: string;
      senha: number;
      administrador: boolean;

      constructor(id: number, login: string, nome: string, senha: number, administrador: boolean)
      {
        this.id = id;
        this.login = login;
        this.nome = nome;
        this.senha = senha;
        this.administrador = administrador;

      }
}
