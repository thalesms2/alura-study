import React from "react";
import { Task } from "../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
    tasks: Task[];
    selectTask: (selectedTask: Task) => void;
}

const List: React.FunctionComponent<Props> = ({ tasks, selectTask }) => {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map((item) => (
                    <Item selectTask={selectTask} key={item.id} {...item} />
                ))}
            </ul>
        </aside>
    );
};

export default List;
