import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={

    todos:[{id:1,text:"hello"}]
}
export const todoSlice =createSlice({
    name:"todos",
    initialState,
    reducers:{ 
        addTodo:(state,action)=>{
            state.todos.push({
                id:nanoid(),
                text:action.payload
            })
     },
     removeTodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)  
     },
     updateTodo: (state, action) => {
        const { id, text } = action.payload;
        const todoToUpdate = state.todos.find(todo => todo.id === id);
        if (todoToUpdate) {
          todoToUpdate.text = text;
        }
      },
      
}
  
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer