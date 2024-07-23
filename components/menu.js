"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";

export function Menu() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Site Prova Teórica</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/ports_img.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Fábio de Abreu Portella</span>
            <span className="block truncate text-sm font-medium">fabio.portella@aluno.ifsp.edu.br</span>
          </Dropdown.Header>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Apresentação
        </Navbar.Link>
        <Navbar.Link as={Link} href="/exercicio_01">Exercicio 01</Navbar.Link>
        <Navbar.Link as={Link} href="/exercicio_02">Exercício 02</Navbar.Link>
        <Navbar.Link as={Link} href="/exercicio_03">Exercício 03</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
