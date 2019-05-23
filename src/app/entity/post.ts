import { Departamento } from './departamento';
import { Usuario } from './usuario';

export class Post {
    id: Number;
    ativo: boolean;
    atualizacao: Date;
    cadastro: Date;
    departamento: Departamento;
    subtitulo: string;
    titulo: string;
    conteudo: string;
    usuario: Usuario;
}
