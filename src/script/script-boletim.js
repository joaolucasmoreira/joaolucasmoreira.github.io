let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let inputNotas = [];

function save() {
  if (!verifMateAdd() && !verifVazio(2) && !verifNegativo(2)) {
    document.querySelector("#orgResultNotas").style.display = "flex";
    let totalNotas = 0;
    let resultados = `<br> <b id="tituloBole">BOLETIM</b> `;

    document.querySelectorAll("#trocar2 input").forEach((e) => {
      inputNotas.push(parseFloat(e.value));
      totalNotas += parseFloat(e.value);
    });

    if (!verifMaxNotas()) {
      materias.push({
        id: materia.id++,
        nome: nomeMateria.value,
        notas: inputNotas,
        total: totalNotas,
        info: `
                           
        <div class="bg-info"><b>${nomeMateria.value.toLocaleUpperCase()}</b></div>
        <table class="table table-striped table-bordless">   
                <tr><td><b><label> 1º Bimestre:</b></label></td> <td>${inputNotas[0]}</td></tr>
                <tr><td><b><label> 2º Bimestre:</b></label></td> <td>${inputNotas[1]}</td></tr>
                <tr><td><b><label> 3º Bimestre:</b></label></td> <td>${inputNotas[2]}</td></tr>
                <tr><td><b><label> 4º Bimestre:</b></label></td> <td>${inputNotas[3]}</td></tr>
                <tr><td>TOTAL FINAL:</td> <td><b>${totalNotas}</b></td></tr>
                <tr><td>STATUS:</td> <td>${isAprovadoOuReprovado(
                  totalNotas
                )}</td>
            </tr>
        </table>
                            `,
      });

      console.log(materias);

      materias.forEach((e) => {
        resultados += e.info;
      });

      resultNotas.innerHTML = resultados;
    }
  }
  inputNotas = [];
}

function isAprovadoOuReprovado(valor) {
  if (valor >= 60) {
    return "<b class='text-success'>APROVADO</b>";
  } else {
    return "<b class='text-danger'>REPROVADO</b>";
  }
}

function desabilitar(div) {
  div == "trocar2"
    ? (document.querySelector(`#${div} select`).disabled = true)
    : null;

  document.querySelector(`#${div} button`).disabled = true;
  document.querySelectorAll(`#${div} input`).forEach((e) => {
    e.disabled = true;
  });
}

function habilitar(div) {
  document.querySelector(`#${div} select`).disabled = false;
  document.querySelector(`#${div} button`).disabled = false;
  document.querySelectorAll(`#${div} input`).forEach((e) => {
    e.disabled = false;
  });
}

desabilitar("trocar2");

function salvar() {
  if (!verifVazio(1)) {
    desabilitar("trocar1");
    habilitar("trocar2");
    document.querySelector(`#${div} select`).disabled = false;
  }
}

function verifVazio(id) {
  let inputs = document.querySelectorAll(`#trocar${id} input`);
  let error = false;

  inputs.forEach((item) => {
    if (item.value == "") {
      error = true;
    }
  });
  if (error) {
    alert("Preencha todos os campos!");
  }
  return error;
}

function verifNegativo(id) {
  let inputs = document.querySelectorAll(`#trocar${id} input`);
  let error = false;

  inputs.forEach((item) => {
    if (item.value < 0) {
      error = true;
    }
  });
  if (error) {
    alert("Não pode haver valor negativo!");
  }
  return error;
}

function verifMaxNotas() {
  for (let i = 0; i < inputNotas.length; i++) {
    if (i == 0 && inputNotas[0] > 20) {
      inputNotas = [];
      alert("O 1° Bimestre tem valor máximo de 20!");
      return true;
    } else if (i == 1 && inputNotas[1] > 25) {
      inputNotas = [];
      alert("O 2° Bimestre tem valor máximo de 25!");
      return true;
    } else if (i == 2 && inputNotas[2] > 25) {
      inputNotas = [];
      alert("O 3° Bimestre tem valor máximo de 25!");
      return true;
    } else if (i == 3 && inputNotas[3] > 30) {
      inputNotas = [];
      alert("O 4° Bimestre tem valor máximo de 30!");
      return true;
    }
  }
  return false;
}

function verifMateAdd() {
  let select = document.querySelector("select").value;
  let erro = false;
  materias.forEach((element) => {
    if (element.nome == select) {
      alert("Esta matéria já foi adicionada!");
      erro = true;
    }
  });
  return erro;
}
