import { createSlice } from "@reduxjs/toolkit";

const stagiaireSlice = createSlice({
    name: "stagiaires",
    initialState:[
            {
            image: "https://st.depositphotos.com/1032561/3808/i/450/depositphotos_38080427-stock-photo-close-up-portrait-of-a.jpg",
            nom: "Zaid",
            prenom: "Riyad",
            age: "22",
            filiere: "TDI"
            },
            {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQknMn9YcOSZP2JWjlx4we69ZPSuyC9OTJMyw&s",
            nom: "Alami",
            prenom: "Khalid",
            age: "29",
            filiere: "DEVWOPFS"
            }
        ],
  reducers:{
    AjouterStg:(state,action)=>{
        state.push(action.payload);
    }
        
    
  }
});
export const {AjouterStg}=stagiaireSlice.actions;
export default stagiaireSlice.reducer;