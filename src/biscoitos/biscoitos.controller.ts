import { Body, Controller, Get, Post, Res, Delete, HttpStatus, Patch, Param } from '@nestjs/common';
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
            <li>PATCH alterar-positivo</li>
            <li>GET negativos</li>
            <li>GET listar-negativos</li>
            <li>POST adicionar-negativo</li>
            <li>DELETE deletar-negativo</li>
            <li>PATCH alterar-negativo</li>
        </ul>
    </body>`
    }

    @Get('positivo')
    imprimeMensagemPositiva(@Res() res: Response): void {
        const mensagemPositiva = this.biscoitoPositivo.pegarBiscoitoDoBem();
        res.status(HttpStatus.OK).send(mensagemPositiva)
    }

    @Get('listar-positivos')
    imprimePositivas(@Res() res: Response): void {
        res.status(HttpStatus.OK).send(this.biscoitoPositivo.listarPositivos());
    }

    @Post('adicionar-positivo')
    adicionarMensagemPositiva(@Res() res: Response, @Body() body: { mensagem: string }): void {
        const frasePositiva = body.mensagem;
        this.biscoitoPositivo.adicionarMensagemDoBem(frasePositiva);
        res.status(HttpStatus.CREATED).send('Sua frase foi adicionada, para confirmar acesse: listar-positivos');
    }

    @Delete('deletar-positivo')
    deletarMensagemPositiva(@Res() res: Response, @Body() body: { numero: number }) : void {
        const numeroFrase = body.numero;
        this.biscoitoPositivo.deletarFraseDoBem(numeroFrase);
        res.status(HttpStatus.NO_CONTENT).send(`A frase ${numeroFrase} foi excluída, para confirmar acesse: listar-positivos`);
    }

    @Patch('alterar-positivo')
    alterarMensagemPositiva(@Res() res: Response, @Body() body: { numero: number, mensagem: string }): void {
        const numeroFrase = body.numero;
        const novaFrase = body.mensagem;
        this.biscoitoPositivo.alterandoFraseDoBem(numeroFrase, novaFrase);
        res/* .status(HttpStatus.NO_CONTENT) */.send(`A frase ${numeroFrase} foi atualizada, para confirmar acesse: listar-positivos`);
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

   /*  @Delete('deletar-negativo')
    deletarMensagemNegativa(@Res() res: Response, @Body() body: { numero: number }) : void {
        const numeroFrase = body.numero;
        this.biscoitoNegativo.deletarFraseDoMal(numeroFrase);
        //res.send(`A frase ${numeroFrase} foi excluída, para confirmar acesse: listar-negativos`);
        res.status(HttpStatus.NO_CONTENT).send('A frase foi excluída com sucesso');
    } */

    @Delete('deletar-negativo/:id')
    deletarMensagemNegativa(@Res() res: Response, @Param('id') id: number) : void {
        this.biscoitoNegativo.deletarFraseDoMal(id);
        //res.send(`A frase ${numeroFrase} foi excluída, para confirmar acesse: listar-negativos`);
        res.status(HttpStatus.NO_CONTENT).send('A frase foi excluída com sucesso');
    }

    @Patch('alterar-negativo')
    alterarMensagemNegativa(@Res() res: Response, @Body() body: { numero: number, mensagem: string }): void {
        const numeroFrase = body.numero;
        const novaFrase = body.mensagem;
        this.biscoitoNegativo.alterandoFraseDoMal(numeroFrase, novaFrase);
        res/* .status(HttpStatus.NO_CONTENT) */.send(`A frase ${numeroFrase} foi atualizada, para confirmar acesse: listar-negativos`);
    }
}