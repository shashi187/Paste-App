import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  paste:localStorage.getItem("paste")
  ?JSON.parse(localStorage.getItem("paste"))
  :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      state.paste.push(paste);
      localStorage.setItem("paste",JSON.stringify(state.paste));
      toast("Paste Successfully Created")
    },
    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index = state.paste.findIndex((item) => item._id === paste._id);
      if (index >= 0){
        state.paste[index] = paste;
      localStorage.setItem("paste",JSON.stringify(state.paste));
      toast.success("Paste Updated")
      }
    },
    resetAllPastes: (state, action) => {
      state.paste = [];
      localStorage.removeItem("paste");
    },
    removeFromPastes: (state,action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.paste.findIndex((item) => item._id === pasteId);
      if (index>= 0) {
        state.paste.splice(index,1);
        localStorage.setItem("paste", JSON.stringify(state.paste));
        toast.success("Paste deleted");
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetalPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer