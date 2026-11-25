import { useState } from 'react'
import CampoNota from './CampoNota'
import './FormularioNotas.css'
function FormularioNotas({ aoCalcular }) {
  const [nome, setNome] = useState('')
  const [notas, setNotas] = useState({ n1:'', n2:'', n3:'', n4:'' })
  const [frequencia, setFrequencia] = useState('100')
  const [erro, setErro] = useState('')

  function alterarNota(campo, valor) { setNotas((atuais) => ({ ...atuais, [campo]: valor })) }

  function calcular(evento) {
    evento.preventDefault()
    const valores = Object.values(notas).map(Number)
    const temVazio = nome.trim() === '' || Object.values(notas).some((nota) => nota === '') || frequencia === ''
    const foraDoIntervalo = valores.some((nota) => nota < 0 || nota > 10) || Number(frequencia) < 0 || Number(frequencia) > 100
    if (temVazio || foraDoIntervalo) {
      setErro(temVazio ? 'Preencha o nome, as quatro notas e a frequência.' : 'Notas devem ficar entre 0 e 10; frequência entre 0 e 100%.')
      return
    }
    const media = valores.reduce((soma, nota) => soma + nota, 0) / valores.length
    aoCalcular({ nome: nome.trim(), notas: valores, media, frequencia: Number(frequencia) })
    setErro('')
  }

  function limpar() {
    setNome(''); setNotas({ n1:'', n2:'', n3:'', n4:'' }); setFrequencia('100'); setErro(''); aoCalcular(null)
  }

  return <form className="formulario-notas" onSubmit={calcular} noValidate>
    <div className="formulario-notas__titulo"><span className="formulario-notas__numero">01</span><div><h2>Lançar notas</h2><p>Informe os dados do estudante.</p></div></div>
    <CampoNota id="nome" label="Nome do aluno" tipo="text" valor={nome} aoAlterar={setNome} placeholder="Ex.: Maria Silva" />
    <div className="notas-grid">
      <CampoNota id="n1" label="1º bimestre" valor={notas.n1} aoAlterar={(v) => alterarNota('n1',v)} placeholder="0,0" />
      <CampoNota id="n2" label="2º bimestre" valor={notas.n2} aoAlterar={(v) => alterarNota('n2',v)} placeholder="0,0" />
      <CampoNota id="n3" label="3º bimestre" valor={notas.n3} aoAlterar={(v) => alterarNota('n3',v)} placeholder="0,0" />
      <CampoNota id="n4" label="4º bimestre" valor={notas.n4} aoAlterar={(v) => alterarNota('n4',v)} placeholder="0,0" />
    </div>
    <CampoNota id="frequencia" label="Frequência (%)" valor={frequencia} aoAlterar={setFrequencia} placeholder="100" />
    {erro ? <p className="formulario-notas__erro" role="alert">{erro}</p> : null}
    <div className="formulario-notas__botoes"><button className="botao botao--principal" type="submit">Calcular média <span>→</span></button><button className="botao" type="button" onClick={limpar}>Limpar</button></div>
    <p className="formulario-notas__ajuda">Aprovação: média ≥ 7 • Recuperação: média ≥ 5 • Frequência mínima: 75%</p>
  </form>
}
export default FormularioNotas
