import './Cabecalho.css'
function Cabecalho({ temaEscuro, aoTrocarTema }) {
  return <header className="cabecalho">
    <div className="cabecalho__marca"><span className="cabecalho__simbolo">H</span><span>HORIZONTE <small>• PORTAL ACADÊMICO</small></span></div>
    <button className="cabecalho__tema" type="button" onClick={aoTrocarTema}>{temaEscuro ? '☀ Tema claro' : '☾ Tema escuro'}</button>
  </header>
}
export default Cabecalho
