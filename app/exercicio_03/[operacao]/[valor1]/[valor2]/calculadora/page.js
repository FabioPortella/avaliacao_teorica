import { Badge, Card } from "flowbite-react";

export default function Calculadora({params}) {

    let resultado = 0;
    let operacao = '';
    const num1 = parseFloat(params.valor1);
    const num2 = parseFloat(params.valor2);

    switch (params.operacao) {
        case 'adicao':
            resultado = num1 + num2;
            operacao = '+';
            break;
        case 'subtracao':
            resultado = num1 - num2;
            operacao = '-';
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            operacao = '*';
            break;
        case 'divisao':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
            operacao = '/';
            break;
        default:
            resultado = 'Operação inválida';
            break;
    }


    return(
        <div className="flex min-h-screen flex-col items-center p-24">            
            <Badge color="blue" className="m-3">Compoente Calculadora</Badge>
            
            <Card>
                <Badge>{params.operacao}</Badge>
                <Badge color="green">{num1} {operacao} {num2} = {resultado}</Badge>
            </Card>
        </div>
    )
}