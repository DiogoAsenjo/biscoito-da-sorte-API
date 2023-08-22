import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Patch, Post, Res } from '@nestjs/common';
import { Cookies } from './cookie.entity';
import { Response } from 'express';
import { CookiesService } from './cookies.service';

@Controller('cookies')
export class CookiesController {
    constructor (private readonly cookiesService: CookiesService) {}

    //Página inicial contendo todas as rotas da aplicação.
    @Get()
    paginaInicial(): string {
        return 'Bem-vindo a página inicial! As rotas possíveis são:\n POST /adicionar (para adicionar cookie)\nGET /mostrar-todos (para mostrar todos os cookies)\nGET /aleatorio (para mostrar um cookie aleatório)\nPATCH /alterar (para alterar um cookie)\n DELTE /deletar (para apagar um cookie)'
    }
    
    //CREATE
    @Post('adicionar')
    async adicionarCookiePositivo(@Res() res: Response, @Body() body: { mensagem: string }): Promise<void> {
        if(!body.mensagem) {
            res.status(HttpStatus.BAD_REQUEST).send('É obrigatório escrever uma mensagem!');
            return;
        }

        try {
            const frasePositiva= body.mensagem;
            await Cookies.create({frase: frasePositiva});
            res.status(HttpStatus.CREATED).send('Frase adicionada com sucesso!');
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(erro);
        }
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
        try {
            const fraseAleatoria = await this.cookiesService.cookieAleatorio();
            res.status(HttpStatus.OK).send(fraseAleatoria);
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(erro);
        }
        
    }
    
    //UPDATE
    @Patch('alterar')
    async alterarCookie(@Res() res: Response, @Body() body: { id: number, mensagem: string }): Promise<void> {
        if(!body.id || !body.mensagem) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Os campos id e mensagem são obrigatórios!');
            return;
        }

        try {
            const numeroFrase = body.id;
            const novaMensagem = body.mensagem;
            await this.cookiesService.atualizarCookie(numeroFrase, novaMensagem);
            res.status(HttpStatus.OK).send('Atualização feita com sucesso');
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send("Esse cookie não existe!");
        }
    }

    //DELETE
    @Delete('deletar')
    async deletarCookie(@Res() res: Response, @Body() body: { id: number }) {
        if(!body.id) {
            res.status(HttpStatus.BAD_REQUEST).send('É obrigatório digitar o id do cookie que pretende excluir, para visualizar todos acesse /cookies/mostrar-todos');
            return;
        }

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