class Usuario {
    constructor( nome, idade, login, senha) {
        this.nome = nome;
        this.idade = idade;
        this.login = login;
        this.senha = senha;
    }    
    
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }

    getLogin() {
        return this.login;
    }
    setLogin(login) {
        this.login = login;
    }

    getSenha() {
        return this.senha;
    }
    setSenha(senha) {
        this.senha = senha;
    }

}
export{Usuario};