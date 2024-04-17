import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    text: '',
    length: 0,
    correctText: '',
    correctLength: 0,
    isCorrect: true,
    line: 0,
  }
}
  
  export const writtenSlice = createSlice({
    name: 'written',
    initialState,
    reducers: {
      updateWritten: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  export const { updateWritten } = writtenSlice.actions
  
  export default writtenSlice.reducer