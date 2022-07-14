import readline from "readline";

const resp = [];

const consulta = readline.createInterface(
    process.stdin, 
    process.stout
);

consulta.question("Adicione propriedades CSS à lista:", function(answer) {
    resp.push(answer);
    consulta.setPrompt(`${answer} adicionado com sucesso. Deseja inserir mais um item? Terminou? Digite "sair".`)
    consulta.prompt()
});

consulta.on('line', (input) => {
    if (input == "sair") {
        console.log(resp.sort());
        consulta.close();
    } else {
        resp.push(input)
        console.log(`${input} adicionado com sucesso. Deseja inserir mais um item? Terminou? Digite "sair.`);
    }
})