import { Body, Controller, Get, Post, Res, Delete, HttpStatus } from '@nestjs/common';
import { BiscoitosPositivosService } from './biscoitos.positivos.service';
import { Response } from 'express'
import { BiscoitosNegativosService } from './biscoitos.negativos.service';

@Controller('biscoitos')
export class BiscoitosController {
    constructor(
        private readonly biscoitoPositivo: BiscoitosPositivosService, 
        private readonly biscoitoNegativo: BiscoitosNegativosService
    ) {}

    @Get()
    paginaInicial(): string {
        return `<body>
        <h1>Bem-vindo à Aplicação dos Biscoitos da Sorte!</h1>
        <p>URLs disponíveis:</p>
        <ul>
            <li>GET positivo</li>
            <li>GET listar-positivos</li>
            <li>POST adicionar-positivo</li>
            <li>DELETE deletar-positivo</li>
            <li>GET negativos</li>
            <li>GET listar-negativos</li>
            <li>POST adicionar-negativo</li>
            <li>DELETE deletar-negativo</li>
        </ul>
    </body>`
    }

    @Get('positivo')
    imprimeMensagemPositiva(): string {
        return this.biscoitoPositivo.pegarBiscoitoDoBem();
    }

    @Get('listar-positivos')
    imprimePositivas(): Array<string> {
        return this.biscoitoPositivo.listarPositivos();
    }

    @Post('adicionar-positivo')
    adicionarMensagemPositiva(@Res() res: Response, @Body() body: { mensagem: string }): void {
        const frasePositiva = body.mensagem;
        this.biscoitoPositivo.adicionarMensagemDoBem(frasePositiva);
        res.send('Sua frase foi adicionada, para confirmar acesse: listar-positivos');
    }

    @Delete('deletar-positivo')
    deletarMensagemPositiva(@Res() res: Response, @Body() body: { numero: number }) : void {
        const numeroFrase = body.numero;
        this.biscoitoPositivo.deletarFraseDoBem(numeroFrase);
        res.send(`A frase ${numeroFrase} foi excluída, para confirmar acesse: listar-positivos`);
    }

    @Get('negativo')
    imprimeMensagemNegativa(): string {
        return this.biscoitoNegativo.pegarBiscoitoDoMal();
    }

    @Get('listar-negativos')
    imprimeNegativos(): Array<string> {
        return this.biscoitoNegativo.listarNegativos();
    }

    @Post('adicionar-negativo')
    adicionarMensagemNegativa(@Res() res: Response, @Body() body: { mensagem: string }): void {
        const fraseNegativa = body.mensagem;
        this.biscoitoNegativo.adicionarMensagemDoMal(fraseNegativa);
        res.send('Sua frase foi adicionada, para confirmar acesse: listar-negativos');
    }

    @Delete('deletar-negativo')
    deletarMensagemNegativa(@Res() res: Response, @Body() body: { numero: number }) : void {
        const numeroFrase = body.numero;
        this.biscoitoNegativo.deletarFraseDoMal(numeroFrase);
        //res.send(`A frase ${numeroFrase} foi excluída, para confirmar acesse: listar-negativos`);
        res.status(201).send('A frase foi excluída com sucesso');
    }
}