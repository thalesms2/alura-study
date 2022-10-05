import React from 'react'
interface ItemProps {
    task: string
    time: string
}
const Item: React.FC<ItemProps> = ({task, time}) => {

    return (
        <li>
            <h3>{ task }</h3>
            <span>{ time }</span>
        </li>
    )
}

export default Item