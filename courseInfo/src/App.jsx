const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises}/>
    </div>
  )
}

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part cont={props.parts[0].name} exerc={props.parts[0].exercises}/>
      <Part cont={props.parts[1].name} exerc={props.parts[1].exercises}/>
      <Part cont={props.parts[2].name} exerc={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
      {props.cont} {props.exerc}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Number of excercises {props.ex1+props.ex2+props.ex3}
      </p>
    </div>
  )
}

export default App