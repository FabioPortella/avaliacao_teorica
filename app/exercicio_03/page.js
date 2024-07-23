// pages/ex3/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Badge, Select, TextInput } from 'flowbite-react';

export default function OperacoesMatematicas() {
  const [operation, setOperation] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/exercicio_03/${operation}/${num1}/${num2}/calculadora`);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <Badge color="blue" className="m-3">Compoente Calculadora</Badge>
      <form className='mt-3' onSubmit={handleSubmit}>
        <div className='inline-flex mb-5'>
          <Select 
            id="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            required
          >
            <option value="">Selecione uma operação</option>
            <option value="adicao">Adição</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
          </Select>
        </div>

        <div className='mb-5'>
          <label htmlFor="num1">Número 1:</label>
          <TextInput
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            required
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="num2">Número 2:</label>
          <TextInput
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            required
          />
        </div>

        <Button type="submit">Calcular</Button>
      </form>
    </div>
  );
};
