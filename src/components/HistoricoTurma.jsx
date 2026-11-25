import './HistoricoTurma.css'
function HistoricoTurma({ historico, totais }) {
  return <section className="historico">
    <div className="historico__topo"><div><span className="historico__kicker">VISÃO GERAL</span><h2>Histórico da turma</h2></div><span className="historico__total">{historico.length} {historico.length === 1 ? 'registro' : 'registros'}</span></div>
    <div className="historico__indicadores">
      <div><span className="indicador__bolinha bolinha--verde"></span><strong>{totais.aprovados}</strong><small>Aprovados</small></div>
      <div><span className="indicador__bolinha bolinha--laranja"></span><strong>{totais.recuperacao}</strong><small>Recuperação</small></div>
      <div><span className="indicador__bolinha bolinha--vermelha"></span><strong>{totais.reprovados}</strong><small>Reprovados</small></div>
    </div>
    {historico.length === 0 ? <p className="historico__vazio">Os cálculos realizados aparecerão aqui.</p> : <div className="historico__tabela"><table><thead><tr><th>Aluno</th><th>Média</th><th>Frequência</th><th>Situação</th></tr></thead><tbody>{historico.map((aluno) => {
      const situacao = aluno.frequencia < 75 ? 'Reprovado' : aluno.media >= 7 ? 'Aprovado' : aluno.media >= 5 ? 'Recuperação' : 'Reprovado'
      return <tr key={aluno.id}><td>{aluno.nome}</td><td>{aluno.media.toFixed(1).replace('.',',')}</td><td>{aluno.frequencia}%</td><td>{situacao}</td></tr>
    })}</tbody></table></div>}
  </section>
}
export default HistoricoTurma
