import React from 'react'

import Item from './Item'

const List: React.FC = () => {
    const todos = [
        {
            task: "Teste",
            time: "01:30:00"
        }, {
            task: "React",
            time: "02:30:00"
        }
    ]
    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {
                    todos.map((todo, index) => (
                        <Item 
                            key={`item ${index}`}
                            {...todo}
                        />
                    ))
                }
            </ul>
        </aside>
    )
}

export default List