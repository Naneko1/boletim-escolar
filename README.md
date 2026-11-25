# Boletim Escolar — Escola Estadual Horizonte

Aplicação acadêmica em React + Vite para calcular médias, classificar a situação dos alunos e acompanhar um histórico simples da turma.

## Regras acadêmicas
- Média maior ou igual a 7: Aprovado.
- Média de 5 até abaixo de 7: Recuperação.
- Média abaixo de 5: Reprovado.
- Frequência abaixo de 75%: Reprovado por falta, independentemente da média.

## Funcionalidades
- Cadastro do aluno e quatro notas com validação.
- Cálculo da média usando reduce().
- Classificação acadêmica e controle de frequência.
- Tema claro/escuro, detalhamento das notas e histórico da turma.
- Interface responsiva.

## Executar localmente
Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.
