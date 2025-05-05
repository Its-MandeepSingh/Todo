const keyTodo = "reactTodo"

export const setItem=(task)=>{
    localStorage.setItem(keyTodo,JSON.stringify(task))
}

export const getItem=()=>{
    let val= localStorage.getItem(keyTodo)
    if(!val) return [];
    return JSON.parse(val)
  }