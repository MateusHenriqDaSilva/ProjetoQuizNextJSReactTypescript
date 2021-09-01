import styles from './../styles/Resultado.module.css'
import { useRouter } from "next/router"
import Estatistica from '../../components/Estatistica'
import Botao from '../../components/Botao'

export default function Resultado() {
    const router = useRouter()
    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado}>
            <div style={{ display: 'flex' }}>
                <Estatistica texto="Perguntas" valor={total} corFundo="#94CDA4" />
                <Estatistica texto="Certas" valor={certas} corFundo="#fff" />
                <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#DE6A33" />
            </div>
            <Botao href='/' texto='tentar novamente' />
        </div>
    )
}