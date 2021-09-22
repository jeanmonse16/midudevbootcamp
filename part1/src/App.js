import logo from './logo.svg';
import './App.css';

const Title = (props) => (
  <h1 style={{ color: props.color }} > Hola mundo, bienvenidos a {props.message} </h1>
)

function App() {
  const message = 'hello, i am jeanpi'
  const titles = ['Benezuela', 'Argentina', 'Maracay']

  return (
    <div className="App">
      <h1> Ola </h1>
      { titles.map(title => <Title message={title} color='yellow' />) }
      <p> Al bootcamp xd </p>
      <div>
        { message + ' and i am 20' }
      </div>

    </div>
  );
}

export default App;
