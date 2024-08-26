const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
  {
    enunciado: "A poluição do ar está se tornando um problema crítico em muitas cidades?",
    alternativas: [
        {
            texto: "Sim, a poluição do ar está se tornando um problema crítico em muitas cidades.",
            afirmacao: "A poluição do ar está se tornando um problema crítico em muitas cidades.",
        },
        {
            texto: "Não, a poluição do ar não está se tornando um problema crítico em muitas cidades.",
            afirmacao: "A poluição do ar não está se tornando um problema crítico em muitas cidades.",
        }
    ]
},
{
    enunciado: "As escolas incentivarão a reciclagem e a redução de resíduos entre os alunos?",
    alternativas: [
        {
            texto: "Sim, as escolas incentivarão a reciclagem e a redução de resíduos entre os alunos.",
            afirmacao: "As escolas incentivarão a reciclagem e a redução de resíduos entre os alunos."
        },
        {
            texto: "Não, as escolas não incentivarão a reciclagem e a redução de resíduos entre os alunos.",
            afirmacao: "As escolas não incentivarão a reciclagem e a redução de resíduos entre os alunos."
        }
    ]
},
{
    enunciado: "Haverá um aumento no uso de energias renováveis em áreas urbanas?",
    alternativas: [
        {
            texto: "Sim, haverá um aumento no uso de energias renováveis em áreas urbanas.",
            afirmacao: "Haverá um aumento no uso de energias renováveis em áreas urbanas."
        },
        {
            texto: "Não, não haverá um aumento no uso de energias renováveis em áreas urbanas.",
            afirmacao: "Não haverá um aumento no uso de energias renováveis em áreas urbanas."
        }
    ]
},
{
    enunciado: "As políticas ambientais contribuirão para a conservação dos recursos hídricos?",
    alternativas: [
        {
            texto: "Sim, as políticas ambientais contribuirão para a conservação dos recursos hídricos.",
            afirmacao: "As políticas ambientais contribuirão para a conservação dos recursos hídricos."
        },
        {
            texto: "Não, as políticas ambientais não contribuirão para a conservação dos recursos hídricos.",
            afirmacao: "As políticas ambientais não contribuirão para a conservação dos recursos hídricos."
        }
    ]
},
{
    enunciado: "Os governos aumentarão as áreas protegidas para preservar a biodiversidade?",
    alternativas: [
        {
            texto: "Sim, os governos aumentarão as áreas protegidas para preservar a biodiversidade.",
            afirmacao: "Os governos aumentarão as áreas protegidas para preservar a biodiversidade."
        },
        {
            texto: "Não, os governos não aumentarão as áreas protegidas para preservar a biodiversidade.",
            afirmacao: "Os governos não aumentarão as áreas protegidas para preservar a biodiversidade."
        }
    ]
 },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();