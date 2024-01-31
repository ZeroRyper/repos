import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask:(state, action)=>{
      const {id, title, description} = action.payload
      const foundTask = state.find(task => task.id === id)
      if (foundTask){
        foundTask.title = title
        foundTask.description = description
      }
    },
    deleteTask: (state, action) => {
        const taskFound = state.find(task => task.id === action.payload)////me devuelve la posicion de la id que queremos eliminar
        if(taskFound){
            state.splice(state.indexOf(taskFound),1)//////Elimina el objeto de la pocion encontrada en taskFound
        }
    }
  },
});

export const { addTask, deleteTask,editTask } = taskSlice.actions;
export default taskSlice.reducer;// Esporta al store solo los valores del reducer 
