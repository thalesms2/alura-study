import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Form from '../components/Form';
import List from '../components/List';
import { Task } from '../types/task';
import style from './App.module.scss';

const App = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [selected, setSelected] = React.useState<Task>();

  function selectTask(selectedTask: Task) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completado: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
