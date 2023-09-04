export interface ResultadoProcessamento {
  qtdDoadoresPorEstado: Map<string, number>,
  imcMedioPorFaixaIdade: Map<string, number>,
  percentualObesosPorSexo: Map<string, number>,
  mediaIdadePorTipoSanguineo: Map<string, number>,
  qtdPossiveisDoadoresPorTipoSanguineo: Map<string, number>,
}
