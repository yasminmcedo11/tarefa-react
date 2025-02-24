import { formatDistanceToNow } from 'date-fns'; 
import { ptBR } from 'date-fns/locale'

interface PostProps {
    publicacaoData: Date
}

export default function Post({ publicacaoData }: PostProps) {
    const tempoDePublicacao = (data: Date): string => {
        return formatDistanceToNow(data, { addSuffix: true, locale: ptBR });
    };

    return (
            <p>Publicado há {tempoDePublicacao(publicacaoData)}</p>
    )
}