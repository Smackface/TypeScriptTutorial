import React from 'react'
import './styles.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {

    const inputRef = React.useRef<HTMLInputElement>(null);
  return (
      <form className="input" onSubmit={(e) =>{ 
          inputRef.current?.blur();
          handleAdd(e)}}>
          <input
          ref={inputRef}
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
          className="input__box" type="input" placeholder='enter a task' />
          <button className="input_submit" type="submit">GO!</button>
      </form>
  )
}

export default InputField