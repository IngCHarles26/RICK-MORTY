//get random ID without repeating it
export function getRandomId(data:number[],max:number = 826,min:number=1){
  let ans:number;
  do{
    ans = Math.floor(Math.random() * (max-min)) + min;
  }while(data.includes(ans))
  return [ans];
}

//get IDs eliminating repited ids respect data
export function filterRepeatedIds(info:number[],data:number[]){
  let _data = data.reduce((ac,el)=>{return {...ac,[el]:true}},{});
  return info.filter(el=>!_data[el])
}

//get Ids from string entrie and filter repeated
export function transInputIds(input:string,max:number):number[]{
  const regex = /\D+/g;
  let ans:number[] = [];
  input.split(',').forEach(el=>{
    let data:number = +el.replaceAll(regex,'');
    let validate:boolean = 
        Boolean(data) && 
        !ans.includes(data) && 
        data<max; 
    if(validate) ans.push(data)
  })
  return ans
} 


//get an array 
export function getArray(n:number){
  let aux = 1;
  let newArray = Array(n).fill(0).map(()=>aux++);
  return newArray;
}


//filter an array
export function filterCharacters(data:object,ids:number[],filters){
  const {specie,gender,origin,sort} = filters;
  if(specie) ids = ids.filter(el=>data[el].species == specie)
  if(gender) ids = ids.filter(el=>data[el].gender == gender)
  if(origin) ids = ids.filter(el=>data[el].origin.name == origin)
  if(sort == 'a-z') ids.sort((a,b)=>data[a].name.localeCompare(data[b].name));
  else if(sort == 'z-a') ids.sort((a,b)=>data[b].name.localeCompare(data[a].name));
  return ids  
}


//Put first ids to researched
export function toPutFirst(info:number[],ids:number[]){
  let data = [...info];
  ids.forEach(el=>{
    let ix = data.indexOf(el);
    data.splice(ix,1)
  })
  return [...ids,...data]
}