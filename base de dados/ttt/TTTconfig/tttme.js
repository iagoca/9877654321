const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
γ πΉ Tic Tac Toe πΉγ

γπ₯NOME: ${pushname}π₯γ

γ  β£ VitΓ³rias: ${userWins} γ
γ  β£ Derrotas: ${userDefeats} γ
γ  β£ Empates : ${userTies} γ
γ  β£ Pontos  : ${userPoints} γ
`
}

exports.tttme = tttme