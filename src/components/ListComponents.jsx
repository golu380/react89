import Card from "./Card";

function ListComponents(){

    const students = [ 
  { 
    id: 1, 
    name: "Amit", 
    marks: 85, 
    city: "Delhi" 
  }, 
  { 
    id: 2, 
    name: "Rahul", 
    marks: 92, 
    city: "Mumbai" 
  }, 
  { 
    id: 3, 
    name: "Priya", 
    marks: 78, 
    city: "Pune" 
  } 
]; 

    return(
        <div>
            {students.map((students)=>(
                <Card id = {students.id} name = {students.name}  marks={students.marks} city={students.city} />
            ))}
        </div>
    )
}

export default ListComponents;