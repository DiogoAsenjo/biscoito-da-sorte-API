import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Cookies } from './cookie.entity';
import { Response } from 'express';
import { CookiesService } from './cookies.service';

@Controller('cookies')
export class CookiesController {
    constructor (private readonly cookiesService: CookiesService) {}

    @Get()
    paginaInicial(): string {
        return 'Bem-vindo a página inicial!'
    }
    

    //CREATE
    @Post('novo-cookie')
    async adicionarCookiePositivo(@Res() res: Response, @Body() body: { mensagem: string }): Promise<void> {
        const frasePositiva= body.mensagem;
        await Cookies.create({frase: frasePositiva});
        res.status(HttpStatus.CREATED).send('Frase adicionada com sucesso!')
    }

    //READ
    @Get('mostrar-cookie')
    async mostraMensagens(@Res() res: Response): Promise<void> {
        try {
            const cookies = await Cookies.findAll();
            const frasesCookies = cookies.map((item) => item.frase);
            res.status(HttpStatus.OK).send(frasesCookies);
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(erro);
        }
    }

    @Get('aleatorio')
    async mostraMensagemAleatorio(@Res() res: Response): Promise<void> {
        const fraseAleatoria = await this.cookiesService.cookieAleatorio();
        res.status(HttpStatus.OK).send(fraseAleatoria);
    }
}