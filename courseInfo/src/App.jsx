const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content cont={part1} exerc={exercises1}/>
      <Content cont={part2} exerc={exercises2}/>
      <Content cont={part3} exerc={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
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