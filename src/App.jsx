import { useMemo, useState } from 'react'
import Cabecalho from './components/Cabecalho'
import FormularioNotas from './components/FormularioNotas'
import CartaoResultado from './components/CartaoResultado'
import HistoricoTurma from './components/HistoricoTurma'
import './App.css'

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false)
  const [resultado, setResultado] = useState(null)
  const [historico, setHistorico] = useState([])

  function calcularResultado(novoResultado) {
    setResultado(novoResultado)
    if (novoResultado) {
      setHistorico((atuais) => [...atuais, { ...novoResultado, id: Date.now() }])
    }
  }
  const totais = useMemo(() => ({
    aprovados: historico.filter((aluno) => aluno.media >= 7 && aluno.frequencia >= 75).length,
    recuperacao: historico.filter((aluno) => aluno.media >= 5 && aluno.media < 7 && aluno.frequencia >= 75).length,
    reprovados: historico.filter((aluno) => aluno.media < 5 || aluno.frequencia < 75).length
  }), [historico])

  return <div className={temaEscuro ? 'app app--escuro' : 'app'}>
    <Cabecalho temaEscuro={temaEscuro} aoTrocarTema={() => setTemaEscuro((atual) => !atual)} />
    <main className="app__conteudo">
      <div className="pagina-intro"><span className="eyebrow">ESCOLA ESTADUAL HORIZONTE</span><h2>Acompanhamento de desempenho</h2><p>Registre as notas e acompanhe a situação acadêmica do aluno.</p></div>
      <div className="grade-principal">
        <FormularioNotas aoCalcular={calcularResultado} />
        <CartaoResultado resultado={resultado} />
      </div>
      <HistoricoTurma historico={historico} totais={totais} />
      <footer className="rodape">Boletim Escolar <span>•</span> Protótipo acadêmico</footer>
    </main>
  </div>
}
export default App
