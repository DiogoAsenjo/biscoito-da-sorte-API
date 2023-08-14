import { Delete } from '@nestjs/common';
import { Body, Controller, Get, Post, Res,  } from '@nestjs/common';
import { BiscoitosService } from './biscoitos.service';
import { Response } from 'express'

@Controller('biscoitos')
export class BiscoitosController {
    constructor(private readonly biscoito: BiscoitosService) {}

    @Get()
    paginaInicial(): string {
        return `<body>
        <h1>Bem-vindo à Aplicação dos Biscoitos da Sorte!</h1>
        <p>URLs disponíveis:</p>
        <ul>
            <li>positivos</li>
            <li>listar-positivos</li>
            <li>adicionar-positivo</li>
            <li>negativos</li>
            <li>listar-negativos</li>
            <li>adicionar-negativo</li>
        </ul>
    </body>`
    }

    @Get('positivos')
    imprimeMensagemPositiva(): string {
        return this.biscoito.pegarBiscoitoDoBem();
    }

    @Get('negativos')
    imprimeMensagemNegativa(): string {
        return this.biscoito.pegarBiscoitoDoMal();
    }

    /* @Get('listar-positivas')
    imprimePositivas(): Array<string> {
        return this.biscoito
    } */

    @Post('adicionar-positivo')
    adicionarMensagemPositiva(@Res() res: Response, @Body() body: { mensagem: string }): void {
        const frasePositiva = body.mensagem;
        const novoArrayPositivo = this.biscoito.adicionarMensagemDoBem(frasePositiva);
        res.send(novoArrayPositivo);
    }

    @Post('adicionar-negativo')
    adicionarMensagemNegativa(@Res() res: Response, @Body() body: { mensagem: string }): void {
        const fraseNegativa = body.mensagem;
        const novoArrayNegativo = this.biscoito.adicionarMensagemDoMal(fraseNegativa);
        res.send(`${body.mensagem} adicionada com sucesso!`);
    }
}