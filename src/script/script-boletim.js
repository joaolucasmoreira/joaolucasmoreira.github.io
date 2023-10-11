let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
        let materias = [];
        function save() {
            let inputNotas = [];
            let totalNotas = 0;
            let resultados = `<b>BOLETIM</b> <br>`;

            document.querySelectorAll("div.input-group input").forEach(e => {
                inputNotas.push(parseFloat(e.value))
                totalNotas += parseFloat(e.value);
            })

            materias.push(
                {
                    id: materia.id++,
                    nome: nomeMateria.value.toLocaleUpperCase(),
                    notas: inputNotas,
                    total: totalNotas,
                    info: `<hr>
                            RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b> 
                            <ul>
                                <li><b>1º Bimestre:</b> ${inputNotas[0]}</li>
                                <li><b>2º Bimestre:</b> ${inputNotas[1]}</li>
                                <li><b>3º Bimestre:</b> ${inputNotas[2]}</li>
                                <li><b>4º Bimestre:</b> ${inputNotas[3]}</li>
                                <li>TOTAL FINAL: <b>${totalNotas}</b></li>
                                <li>STATUS: <b>${isAprovadoOuReprovado(totalNotas)}</b></li>
                            </ul>
                            `
                }
            )

            console.log(materias)

            materias.forEach(e => {
                resultados += `<br>` + e.info;
            })

            resultNotas.innerHTML = resultados;
        }
        
        function isAprovadoOuReprovado(valor) {
            if (valor >= 60) {
                return "APROVADO"
            } else {
                return "REPROVADO"
            }
        }

        function trocar() {
            
        }