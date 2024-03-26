import { createSlice } from "@reduxjs/toolkit"
import { filterCharacters } from "../../api/helpers/funcs";

interface CharacterSlice {
  //info
  idCharacters: number[],
  characters: {},
  filteredChars: number[],
  //nav
  filters: {
    specie: string,
    gender: string,
    origin: string
    sort: 'a-z' | 'z-a' | 'none', 
  },
  //info nav
  searchType: boolean,
  searchInput: string,

  species: string[],
  gender: string[],
  origin: string[],
}

const initialState:CharacterSlice = {
  idCharacters:[],
  characters:{},
  filteredChars:[],
  filters:{
    specie:'',
    gender:'',
    origin:'',
    sort:'none',
  },
  searchType: true,
  searchInput: '',
  species:[],
  gender:['Female','Male','Genderless','Unknown'],
  origin:[],
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers:{
    setCharSlice:(state,action)=>{
      const {idCharacters,characters,species,origin} = action.payload
      state.idCharacters = idCharacters;
      state.characters = characters;
      state.species = species;
      state.origin = origin;
      state.filteredChars = idCharacters;
    },
    setSearchType: (state,action)=>{
      state.searchType = action.payload;
    },
    setSearchInput: (state,action)=>{
      state.searchInput = action.payload;
    },
    addCharacters: (state,action)=>{
      const {species,origin,idCharacters,characters,filters} = state;
      let {ids, idsData} = action.payload;
      let inputSpecies:string[] = [...species];
      let inputOrigin:string[] = [...origin];
      let inputCharacters = {};
      idsData.forEach(character => {
        inputCharacters = {...inputCharacters, [character.id]:character}
        const _species = character.species;
        const _origin = character.origin.name;
        if(!inputSpecies.includes(_species)) inputSpecies.push(_species);
        if(!inputOrigin.includes(_origin)) inputOrigin.push(_origin);
      });
      state.species = [...inputSpecies];
      state.origin = [...inputOrigin];
      state.idCharacters = [...ids,...idCharacters];
      state.characters = {...characters,...inputCharacters}
      state.filteredChars = filterCharacters({...characters,...inputCharacters},[...ids,...idCharacters],filters)
    },  
    setFilters: (state,action)=>{
      const {idCharacters,characters} = state;
      state.filters = action.payload;
      state.filteredChars = filterCharacters(characters,[...idCharacters],action.payload)
    },
    delFilters: (state)=>{
      state.filters = initialState.filters;
      state.filteredChars = state.idCharacters;
    },
    setIdCharacters:(state,action)=>{
      const {characters,filters} = state;
      state.idCharacters = action.payload
      state.filteredChars = filterCharacters(characters,action.payload,filters)
    }
  }
})

export const {setSearchType,addCharacters,setSearchInput,setFilters,delFilters,setIdCharacters,setCharSlice} = characterSlice.actions;
export default characterSlice.reducer;