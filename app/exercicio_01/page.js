"use client";

import { DataNascimento } from '@/components/data_nascimento';
import React from 'react';

export default function Exercicio01() {
    return(
    <div className="flex min-h-screen flex-col items-center p-24">
        <DataNascimento diaI = {1} mesI = {1} anoI={1950}/>
    </div>    
        
)}