const formNewUser = {
    build:()=>{
       const root = document.getElementById('root');
       const formTemplate = document.createElement('form');
       formTemplate.className = "form-control";
       formTemplate.setAttribute("id","signForm")
       formTemplate.innerHTML = `
    <label for="nome" class="form-label">Nome</label>
    <input class="form-control" placeholder="Nome" type="text" id="nome">

    <label for="idade" class="form-label">Idade</label>
    <input class="form-control" placeholder="Idade" type="number" id="idade">

    <label for="login" class="form-label">Login</label>
    <input class="form-control" placeholder="Login" type="text" id="login">
    
    <label for="senha" class="form-label">Senha</label>
    <input class="form-control" placeholder="Senha" type="password" id="senha">
       `
       root.appendChild(formTemplate);
    },

}
export {formNewUser};