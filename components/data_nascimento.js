"use client";

import { Badge, Button } from "flowbite-react";
import { useState } from "react";

export function DataNascimento({diaI, mesI, anoI}) {

    const [dia, setDia] = useState(diaI)
    const [mes, setMes] = useState(mesI)
    const [ano, setAno] = useState(anoI)

        // Função para verificar se o ano é bissexto
        function anoBiSexto(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
    
        // Função para obter o número máximo de dias em um mês
        function obterMaximoDiasMes(month, year) {
            switch (month) {
                case 2: // Fevereiro
                    return anoBiSexto(year) ? 29 : 28;
                case 4: // Abril
                case 6: // Junho
                case 9: // Setembro
                case 11: // Novembro
                    return 30;
                default:
                    return 31;
            }
        }
    
        function aumentarDia() {
            const maxDays = obterMaximoDiasMes(mes, ano);
            if (dia < maxDays) {
                setDia(dia + 1);
            } else if (dia === maxDays && mes < 12) {
                setDia(1);
                aumentarMes();
            } else if (dia === maxDays && mes === 12) {
                setDia(1);
                setMes(1);
                aumentarAno();
            }
        }
    
        function diminuirDia() {
            if (dia > 1) {
                setDia(dia - 1);
            } else if (dia === 1 && mes > 1) {
                diminuirMes();
                setDia(obterMaximoDiasMes(mes - 1, ano));
            } else if (dia === 1 && mes === 1) {
                diminuirMes();
                setDia(obterMaximoDiasMes(12, ano - 1));
                diminuirAno();
            }
        }
    
        function aumentarMes() {
            if (mes < 12) {
                setMes(mes + 1);
            } else {
                setMes(1);
                aumentarAno();
            }
            const maxDays = obterMaximoDiasMes(mes + 1, ano);
            if (dia > maxDays) {
                setDia(maxDays);
            }
        }
    
        function diminuirMes() {
            if (mes > 1) {
                setMes(mes - 1);
            } else {
                setMes(12);
                diminuirAno();
            }
            const maxDays = obterMaximoDiasMes(mes - 1, ano);
            if (dia > maxDays) {
                setDia(maxDays);
            }
        }
    
        function aumentarAno() {
            if (ano < 2200) {
                setAno(ano + 1);
                const maxDays = obterMaximoDiasMes(mes, ano + 1);
                if (dia > maxDays) {
                    setDia(maxDays);
                }
            }
        }
    
        function diminuirAno() {
            if (ano > 1500) {
                setAno(ano - 1);
                const maxDays = obterMaximoDiasMes(mes, ano - 1);
                if (dia > maxDays) {
                    setDia(maxDays);
                }
            }
        }
    return(
        <>        
            <Badge color="blue" className="m-3">Compoente Data de Nascimento</Badge>

            <div className="flex items-center mx-4 my-2">            
                <Button color = "yellow" onClick={diminuirDia} pill>-</Button>
                <p className="m-3">Dia: {dia}</p>
                <Button color = "yellow" onClick={aumentarDia} pill>+</Button>
            </div>

            <div className="flex items-center mx-4 my-2">            
                <Button color = "yellow" onClick={diminuirMes} pill>-</Button>
                <p className="m-3">Mes: {mes}</p>
                <Button color = "yellow" onClick={aumentarMes} pill>+</Button>
            </div>

            <div className="flex items-center mx-4 my-2">            
                <Button color = "yellow" onClick={diminuirAno} pill>-</Button>
                <p className="m-3">Ano: {ano}</p>
                <Button color = "yellow" onClick={aumentarAno} pill>+</Button>
            </div>

        </>
    )
}