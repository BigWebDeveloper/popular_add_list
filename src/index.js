/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/ 










// Output Hello Davidson to the screen
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "DAVIDSON";
const el = <h1>Hello, {name}</h1>;

ReactDOM.render(
el,
document.getElementById('root')
);
*/ 












// Counter App
/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let counter = 0;

function show(){
    counter++;
    const el = <h1>{counter}</h1>;
    ReactDOM.render(
    el, document.getElementById('root')
    );
}

setInterval(show, 1000);
*/

























// hello world with Class
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component{
    render() {
        return <h1>Hello World.</h1>;
    }
}

const el = <Hello />;
ReactDOM.render(
el, document.getElementById('root');
);
*/










//props with class
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component {
    render(){
    return <h1>Hello, {this.props.name}!</h1>;
    }
}

function App(){
    return <div>
        <Hello name="Davidson" />
        <Hello name="Richiezo" />
        <Hello name="Automatik" />
    </div>;
}

const el = <App />;
ReactDOM.render(
el,
document.getElementById('root')
);

*/





//props with class
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Hello extends React.Component {
    render(){
    return <h1>Hello, {this.props.name}!</h1>;
    }
}


class App extends React.Component {
render (){
    return <div>
        <Hello name="Davidson" />
        <Hello name="Richiezo" />
        <Hello name="Automatik" />
    </div>;
}
}

const el = <App />;
ReactDOM.render(
el,
document.getElementById('root')
);
*/

//create components and pass them data..function
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

function Item(props) {
    return <div className="item">
        <b>Name:</b> {props.name} <br />
        <b>Price:</b> {props.price}
        </div>;
}


const el = <Item name="davidson" price="$50" />;
ReactDOM.render(
el,
document.getElementById('root')
);
*/







//create components and pass them data..class
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

class Item extends React.Component {
    render(){
    return <div className="item">
        <b>Name:</b> {"a" + this.props.name} <br />
        <b>Price:</b> {this.props.price}
        </div>;
    }
}


const el = <Item name="davidson" price="$50" />;
ReactDOM.render(
el,
document.getElementById('root')
);
*/




//using class state....
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

class Hello extends React.Component {
    state = {
        name: "James"
    }
    render(){
    return <h1 className="item">Hello {this.state.name}!</h1>;
    }
}


const el = <Hello />;
ReactDOM.render(
el,
document.getElementById('root')
);
*/








//changing class state, using event handler
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

class Car extends React.Component {
    state = {
        brand: "Ford",
        model: "mustang",
        color: "Red",
        year: "1992"
    };
    
changeColor = () => {
    this.setState({
        color: "Blue"
    })
}
    render(){
    return <div className="item">
        <h1>Click me to change the {this.state.color} car to blue!</h1>
        <button onClick={this.changeColor}> Change Color</button>
        </div>
    }
}


const el = <Car />;
ReactDOM.render(
el,
document.getElementById('root')
);
*/






//HOOKs
//for use to start using STATE in react we import useState....

/*
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

function Car(){
   const [color, setColor] = useState("Red");
    
 const changeColor = () =>{
    setColor("Blue");
};
    return <div className="item">
        <h1>Click me to change the {color} car to blue!</h1>
        <button onClick={changeColor}> Change Color</button>
        </div>
    }
    
const el = <Car />;
ReactDOM.render(
el,
document.getElementById('root')
);
*/


//HOOKs
//for use to start using STATE in react we import useState....
/*
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

function EvenNumberIncrease(){
   const [evenNumber, setEvenNumber] = useState(0);
    
 const changeColor = () =>{
    setEvenNumber(evenNumber+2);
};
    return <div className="item">
        <h1>The Number only increase in Even number {evenNumber}</h1>
        <button onClick={changeColor}> Change Color</button>
        </div>
    }



const el = <EvenNumberIncrease />;
ReactDOM.render(
el,
document.getElementById('root')
);
*/






//componentDid Mount to set the initial state.
/*

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+1});
  }
  componentDidMount() {
    this.setState({counter: 42});
  }
  render() {
    return <div className="item">
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/





//using componentDidUpdate which only called when the state want to update.
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+2});
  }
  componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }

  render() {
    return <div className="item">
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/





//using componentDidUpdate and componentDidMount
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter+2});
  }
  
  componentDidMount() {
    this.setState({counter: 42});
  }
  

componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }

  render() {
    return <div className="item">
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/







//for componentDidUpdate,componentWillUnmout,componentWillMount to work with function we use useEffect Hook
// when you run the code, you will notice that the alert dialog appears also during the first render. This is caused by the fact render and after every update.
/*

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

function Counter() {
  const [counter, setCounter] = useState(0);
    
  

  const increment = () => {
    setCounter(counter + 2);
  };
    
    useEffect(() => {
      alert("Number of clicks: " + counter);
  })
    
return <div className="item">
    <p>{counter}</p>
    <button onClick={increment}>increment</button>
    </div>;

}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/







//To call the method only when something changes, we can provide it a second argument useEffect(() => {}, [0])
/*
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

function Counter() {
  const [counter, setCounter] = useState(0);
    
  

  const increment = () => {
    setCounter(counter + 2);
  };
    
    useEffect(() => {
      alert("Number of clicks: " + counter);
  },[counter]);
    
return <div className="item">
    <p>{counter}</p>
    <button onClick={increment}>increment</button>
    </div>;

}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
*/




//user input
/*
import react, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

function Converter() {
    const [km, setKm] = useState(0);
    const [car, setCar] = useState('flat');
    
    function handleChange(e) {
        setKm(e.target.value)
    }
    function handleChanges(e) {
        setCar(e.target.value);
    }
    
    function convert(km) {
        return (km/1.609).toFixed(2);
    }
    
    function submitCal(e) {
        setCar(car + "1");
        alert ("am about to add");
        e.preventDefault()
    }
    
    return <div class="item">
    <input type="text" value={km} onChange={handleChange} />
    <p>{km} km is {convert(km)} miles </p>
    <div>
        <form onSubmit={submitCal}>
            <select value={car} onChange={handleChanges}>
                <option value="Ford">Ford</option>
                <option value="volve">volve</option>
                <option value="bens">bens</option>
                <option value="flat">flat</option>
            </select>
            <input type="submit" value="Add 1 to car" />
            <input type="reset" value="reset" />
        </form>
    <p>I have selected <span>{car}</span> car!</p>
    </div>
    </div>
    
}
 
const el = <Converter />;
ReactDOM.render(
el, document.getElementById('root')
);
*/




//each element in a alist must have a unique key, keys are very important because they uniquely identify element, helping React understand which items have changes, are added, or are removed.
/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MyList(props) {
    const arr = props.data;
    const listItems = arr.map(
        (val) => <li>{val}</li> 
    );
    
    return <ul className="item">{listItems}</ul>
}
                              
const arr = ["A","B","C"];
const el = <MyList data={arr} />;
                              
ReactDOM.render(
el, document.getElementById('root'));
*/


//using key attribute

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MyList(props) {
    const arr = props.data;
    const listItems = arr.map(
        (val, index) => <li key={index}>{val}</li> 
    );
    
    return <ul className="item">{listItems}</ul>
}
                              
const arr = ["A","B","C"];
const el = <MyList data={arr} />;
                              
ReactDOM.render(
el, document.getElementById('root'));
*/


import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AddPersonForm(props) {
    const [ person, setPerson ] = useState('');
    
    function handleChange(e) {
        setPerson(e.target.value);
    }
    
    function handleSubmit(e) {
        if(person !== '') {
           props.handleSubmit(person);
           setPerson(''); 
        }
        e.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add new contact"
            onChange={handleChange} value={person}
        />
        <button type="submit">Add</button>
        </form>
    );   
}

function PeopleList(props) {
    const arr = props.data;
    const listItems = arr.map((val, index) => 
        <li key={index}>{val}</li>
         );
    return <ul>{listItems}</ul>
}

function ContactManager(props) {
    // Firstly add the contacts from the data(outside the ReactDOM using props)
    
    const [contacts, setContacts] = useState(props.data);
    
    function addPerson(name) {
        setContacts([...contacts, name]);
    }
    
    return (
        <div className="item">
            <AddPersonForm handleSubmit={addPerson} />
            <PeopleList data={contacts} />
        </div>
    );
}

const contacts = ["Azeez Ishola Oloto", "Adeniyi Micheal", "Moses Abraham"];

ReactDOM.render(
    <ContactManager data={contacts} />, 
    document.getElementById('root')
); 


/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function AddListInput(props){
    const [person, setPerson] = useState('');
    
    function handleChange(e){
        setPerson(e.target.value);
    };
    
    function handleSubmit(e){
        if (person !== ''){
            props.handleSubmit(person);
            setPerson('');
        };
        
        e.preventDefault();
;    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type your name" onChange = {handleChange} value={person} />
            <button type="submit">Add me</button>
        </form>
    )
}

function PeopleList(props){
    const val = props.data;
    const listItems = val.map((val, index) => 
        <li key={index}>{val}</li>
         );
    return <ul>{listItems}</ul>
};

function ContactMananger(props){
    const [info, setInfo] = useState(props.names);
    
    function addInfo(name) {
        setInfo([...info, name]);
    }
    
    return (
        <div>
            <AddListInput handleSubmit = {info}  />
            <PeopleList data={info}/>
        </div>
    )
}

const people = ["Azeez Oloto", "Fransis Oloto", "Tolulope Adaramola"];
ReactDOM.render(<ContactMananger names = {people}/>, document.getElementById("root"));
*/