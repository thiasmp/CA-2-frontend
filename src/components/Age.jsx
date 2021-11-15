import React, {useState, useEffect} from "react";


function Age (props){

  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [count, setCount] = useState("");


  const changeName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://api.agify.io?name=` + name)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAge(data.age)
        setCount(data.count)
      })
  }

    return (
        <div>
          <h2>Age</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={name} onChange={changeName}/>
            </label>
            <button type="submit">Submit</button>
          </form>
          <p>name: {name}</p>
          <p>average age: {age}</p>
          <p>Count: {count}</p>
        </div>
      );
}

export default Age;