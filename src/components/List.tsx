import React from 'react'

const List: React.FC = () => {
    const todos = [
        {
            name: "Teste",
            time: "01:30:00"
        }, {
            name: "React",
            time: "02:30:00"
        }
    ]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={`todos ${index}`}>
                            <h3> {todo.name} </h3>
                            <span> {todo.time} </span>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default List