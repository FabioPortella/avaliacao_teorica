export function DadosAluno() {
    return(
        <div className="mt-10 mb-3 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a          
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Fábio de Abreu Portella
          </h2>
          <p>Aluno do Instituto Federal - Campus de Barretos SP</p>
          <p className={`m-3 text-sm opacity-50`}>
          Matrícula	BA3040046          
          </p>          
          <p>Curso de Pós-Graduação:	BRT.LAT.DSI.2022 - Especialização em Desenvolvimento de Sistemas para Internet e Dispositivos Móveis</p>
        </a>
      </div>
    )

}