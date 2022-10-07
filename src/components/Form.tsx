import React from "react";
import { Task } from "../types/task";
import Botao from "./Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Form: React.FunctionComponent<Props> = ({ setTasks }) => {
    const [task, setTask] = React.useState("");
    const [time, setTime] = React.useState("00:00");
    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks((oldTask) => [
            ...oldTask,
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuidv4(),
            },
        ]);
        setTask("");
        setTime("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao type="submit">Adicionar</Botao>
        </form>
    );
}

export default Form;
