import { Injectable } from '@nestjs/common';

const frasesPositivas: Array<string> = [
    "A sorte acompanhará todos os seus passos.",
    "Grandes realizações exigem pequenos passos.",
    "O sucesso está a caminho, continue persistindo.",
    "Seu sorriso iluminará o dia de alguém.",
    "Acredite em si mesmo e tudo será possível.",
    "Boas oportunidades estão no horizonte.",
    "A jornada é tão importante quanto o destino.",
    "A generosidade traz grande recompensa.",
    "Sua criatividade resolverá muitos problemas.",
    "O aprendizado é a chave para o crescimento contínuo."
  ];

const frasesNegativas: Array<string> = [
    "O sucesso é para os outros, não para você.",
    "Não importa o quanto você tente, nunca será bom o suficiente.",
    "A vida é uma sequência de decepções.",
    "Nada que você faz realmente importa no final das contas.",
    "Você está destinado a falhar, então por que se esforçar?",
    "Ninguém se importa com o que você pensa ou faz.",
    "Cada novo dia traz mais tristeza do que o anterior.",
    "Seus sonhos são inalcançáveis, é melhor desistir agora.",
    "A esperança é uma ilusão que só leva à desilusão.",
    "A vida é uma série interminável de monotonias e aborrecimentos."
  ];

@Injectable()
export class BiscoitosService {
    pegarBiscoitoDoBem(): string {
        const mensagem = frasesPositivas[Math.floor(Math.random() * frasesPositivas.length)];
        return mensagem;
    }

    pegarBiscoitoDoMal(): string {
        const mensagem = frasesNegativas[Math.floor(Math.random() * frasesNegativas.length)];
        return mensagem;
    }

    adicionarMensagemDoBem(mensagem: string): Array<string> {
        frasesPositivas.push(mensagem);
        return frasesPositivas;
    }

    adicionarMensagemDoMal(mensagem: string): Array<string> {
        frasesNegativas.push(mensagem);
        return frasesNegativas;
    }
}
