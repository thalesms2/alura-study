import React from 'react'

const Form: React.FC = () => {

    return (
        <form>
            <div>
                <label htmlFor="todo"></label>
                <input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="O que você quer estudar"
                    required 
                />
            </div>
            <div>
                <label htmlFor="time"></label>
                <input 
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required 
                />
            </div>
        </form>
    )
}

export default Form