import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Patch, Post, Res } from '@nestjs/common';
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
    @Post('adicionar')
    async adicionarCookiePositivo(@Res() res: Response, @Body() body: { mensagem: string }): Promise<void> {
        const frasePositiva= body.mensagem;
        await Cookies.create({frase: frasePositiva});
        res.status(HttpStatus.CREATED).send('Frase adicionada com sucesso!')
    }

    //READ
    @Get('mostrar-todos')
    async mostraMensagens(@Res() res: Response): Promise<void> {
        try {
            const cookies = await Cookies.findAll();
            const frasesCookies = cookies.map((item) => {
                return {
                    id: item.id,
                    frase: item.frase
                }
            });
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
    
    //UPDATE
    @Patch('alterar')
    async alterarCookie(@Res() res: Response, @Body() body: { id: number, mensagem: string }): Promise<void> {
        try {
            const numeroFrase = body.id;
            const novaMensagem = body.mensagem;
            await this.cookiesService.atualizarCookie(numeroFrase, novaMensagem);
            //Esse status http está ok? Ou deveria ser o 204 (NO CONTENT)
            res.status(HttpStatus.OK).send('Atualização feita com sucesso');
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Esse cookie não existe!");
        }
    }

    //DELETE
    @Delete('deletar')
    async deletarCookie(@Res() res: Response, @Body() body: { id: number }) {
        try {
            const numeroFrase = body.id;
            await this.cookiesService.excluirCookie(numeroFrase);
            res.status(HttpStatus.OK).send('Cookie deletado!')
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Esse cookie não existe!");
        }
    }
}