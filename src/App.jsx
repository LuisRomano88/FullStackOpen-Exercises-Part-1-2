const App = () => {

  const course = "Half Stack application development";

  const Header = () => {
    return (
      <div>
        <h1>Course: {course}</h1>
      </div>
    );
  };

  const Part = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  const Content = () => {
    return (
      <ul>
        <li>{Part[0].name} {Part[0].exercises}</li>
        <li>{Part[1].name} {Part[1].exercises}</li>
        <li>{Part[2].name} {Part[2].exercises}</li>
      </ul>
    );
  };

  const Total = () => {
    return (
      <div>
        <p>Number of exercises: {Part[0].exercises + Part[1].exercises + Part[2].exercises}</p>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
