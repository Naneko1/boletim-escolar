import { useState } from 'react'
import './CartaoResultado.css'
function CartaoResultado({ resultado }) {
  const [mostrarNotas, setMostrarNotas] = useState(false)
  if (resultado === null) return <section className="cartao-resultado cartao-resultado--vazio">
    <div className="resultado__icone">▤</div><h2>Resultado do aluno</h2><p>Preencha o formulário e clique em <strong>Calcular média</strong> para visualizar o boletim.</p>
    <div className="resultado__legenda"><span className="legenda legenda--verde">Aprovado ≥ 7</span><span className="legenda legenda--laranja">Recuperação ≥ 5</span><span className="legenda legenda--vermelha">Reprovado &lt; 5</span></div>
  </section>

  const { nome, notas, media, frequencia } = resultado
  const situacao = frequencia < 75 ? 'Reprovado por falta' : media >= 7 ? 'Aprovado' : media >= 5 ? 'Recuperação' : 'Reprovado'
  const classeSituacao = frequencia < 75 ? 'resultado--reprovado' : media >= 7 ? 'resultado--aprovado' : media >= 5 ? 'resultado--recuperacao' : 'resultado--reprovado'
  const mensagem = frequencia < 75 ? 'A frequência ficou abaixo do mínimo exigido.' : media >= 7 ? 'Excelente trabalho. Continue assim!' : media >= 5 ? 'Você está perto. Prepare-se para a recuperação!' : 'Revise os conteúdos e converse com seu professor.'
  return <section className={`cartao-resultado ${classeSituacao}`}>
    <div className="resultado__topo"><span>BOLETIM DO ESTUDANTE</span><span className="resultado__ponto">●</span></div>
    <p className="resultado__nome">{nome}</p>
    <div className="resultado__media">{media.toFixed(1).replace('.',',')}</div>
    <span className="resultado__situacao">{situacao}</span>
    <p className="resultado__mensagem">{mensagem}</p>
    <div className="resultado__frequencia"><span>Frequência</span><strong>{frequencia}%</strong></div>
    <button className="resultado__detalhes" type="button" onClick={() => setMostrarNotas(!mostrarNotas)}>{mostrarNotas ? 'Ocultar notas ▲' : 'Ver notas ▼'}</button>
    {mostrarNotas ? <ul className="resultado__lista">{notas.map((nota, indice) => <li key={indice}><span>{indice + 1}º bimestre</span><strong>{nota.toFixed(1).replace('.',',')}</strong></li>)}</ul> : null}
  </section>
}
export default CartaoResultado
