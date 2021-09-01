import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../src/styles/Temporizador.module.css'

interface TemporizadorProps {
    key: any
    duracao: Number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={+props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[
                    ['#BCE596', 0.33],
                    ['#F7B8O1', 0.33],
                    ['#3D827A', 0.33],
                ]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}