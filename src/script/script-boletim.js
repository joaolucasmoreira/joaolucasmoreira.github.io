let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let inputNotas = [];

function save() {
  if (!verifMateAdd() && !verifVazio(2) && !verifNegativo(2)) {
    let totalNotas = 0;
    let resultados = `<b>BOLETIM</b> <br>`;

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
                           
        RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b>
        <table class="table table-striped table-bordless">   
                <tr><td><b>1º Bimestre:</b></td> <td>${inputNotas[0]}</td></tr>
                <tr><td><b>2º Bimestre:</b></td> <td>${inputNotas[1]}</td></tr>
                <tr><td><b>3º Bimestre:</b></td> <td>${inputNotas[2]}</td></tr>
                <tr><td><b>4º Bimestre:</b></td> <td>${inputNotas[3]}</td></tr>
                <tr><td>TOTAL FINAL:</td> <td><b>${totalNotas}</b></td></tr>
                <tr><td>STATUS:</td> <td><b>${isAprovadoOuReprovado(
                  totalNotas
                )}</b></td>
            </tr>
        </table>
                            `,
      });

      console.log(materias);

      materias.forEach((e) => {
        resultados += `<br>` + e.info;
      });

      resultNotas.innerHTML = resultados;
    }
  }
}

function isAprovadoOuReprovado(valor) {
  if (valor >= 60) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
}

function salvar() {
  if (!verifVazio(1)) {
    document.querySelectorAll("#trocar1 input").forEach(e=>{
        e.disabled = true
    })
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
      alert("O 1° Bimestre tem valor máximo de 20!");
      return true;
    } else if (i == 1 && inputNotas[1] > 25) {
      alert("O 2° Bimestre tem valor máximo de 25!");
      return true;
    } else if (i == 2 && inputNotas[2] > 25) {
      alert("O 3° Bimestre tem valor máximo de 25!");
      return true;
    } else if (i == 3 && inputNotas[3] > 30) {
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


