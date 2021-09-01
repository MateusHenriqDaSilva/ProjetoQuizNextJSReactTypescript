import { useEffect, useState } from 'react'
import Questionario from '../../components/Questionario'
import QuestaoModel from '../../model/questao'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  async function carregarIdsDasQuestoes() {
    const resposta = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resposta.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resposta = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resposta.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
    console.log()
  }

  function idProximaPergunta() {
    if (questao) {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
    }
  }

  function IrProximoPasso() {
    const proximoId = idProximaPergunta()
    proximoId ? IrProximaQuestao(proximoId) : finalizar()
  }

  function IrProximaQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  return questao ? (
    <Questionario questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={IrProximoPasso} />
  ) : false
}
