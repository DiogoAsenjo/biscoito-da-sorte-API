import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { BiscoitosService } from './biscoitos.service';
import { Response } from 'express'

@Controller('biscoitos')
export class BiscoitosController {
    constructor(private readonly biscoito: BiscoitosService) {}

    @Get('positivos')
    imprimeMensagemPositiva(): string {
        return this.biscoito.pegarBiscoitoDoBem();
    }

    @Get('negativos')
    imprimeMensagemNegativa(): string {
        return this.biscoito.pegarBiscoitoDoMal();
    }

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
        res.send(novoArrayNegativo);
    }
}