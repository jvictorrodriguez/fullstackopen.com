const App = () => {
  const course= 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:  'State of a component',
      exercises:  14
    }
  ]

  const Header = (props)=>{
    return <h1>{props.course}</h1>
  }

  const Part=(props)=>{
    return (
          <p>
            {props.name} {props.exercises}
            </p>)
    }
  

  const Content=(props)=>{
    return (
      <div>
        {props.parts.map((part, index) => (
          <Part key={index} name={part.name} exercises={part.exercises} />
        ))}
    </div>)
   }
  
   const Total = (props) => {
    const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Total number of exercises {totalExercises}</p>;
  };


  
  return (
    <>
    <Header course={course}/>
    <Content parts={parts}/>
    <Total parts={parts}/>
    </>    
      
  )
  
}

export default App
