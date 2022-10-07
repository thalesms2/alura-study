import React from "react";
import Button from "./Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { convertTimeToSeconds } from "../hooks/useTime";
import { Task } from "../types/task";

interface Props {
    selected: Task | undefined;
    finishTask: () => void;
}

const Stopwatch: React.FunctionComponent<Props> = ({ selected, finishTask }) => {
    const [time, setTime] = React.useState<number>();

    React.useEffect(() => {
        if (selected?.time) {
            setTime(convertTimeToSeconds(selected.time));
        }
    }, [selected]);

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            finishTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o Cronômetro
            </p>
            <div className={style.relogioWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={() => regressive(time)}>Começar!</Button>
        </div>
    );
}
export default Stopwatch