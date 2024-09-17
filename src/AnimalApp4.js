import React,{useState} from 'react'
 
 
function getTRandomAnimal(){
  const animals = ['bird','cat','cow','dog','gator','horse'];
  let randomNum = Math.random();
  //this will generate a numberbetween 0 to 1
  console.log('randomNum '+randomNum);
  let index = [Math.floor(randomNum * animals.length)];
  console.log('index '+index);
  let animalName = animals[index];
  return animalName;
}
const AnimalApp4 = () => {
  const[animal, setAnimal] = useState([]);
  const handleClick = (event)=>{
    let selectedAnimal = getTRandomAnimal();
    console.log('selected Animal'+selectedAnimal);
    setAnimal([...animal, selectedAnimal]);
    //using spread operator, another react hack for change to reflct
  }
  return (
    <div>
      <h1>Animal App 4</h1>
      <div>
        <button onClick={handleClick}>Add Animal</button>
      </div>
      <div>{animal}</div>
    </div>
  )
}
 
export default AnimalApp4
 