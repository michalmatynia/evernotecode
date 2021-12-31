// It is possible to declare superprops like this

// Example 1

// https://stackoverflow.com/questions/37949981/call-child-method-from-parent
class MyComponent extends React.Component {
state = {}
testRef = React.createRef();

}
// Example 2
// https://stackoverflow.com/questions/55028583/how-do-i-call-setstate-from-another-component-in-reactjs
class Parent extends Component {
    constructor(props) {
    super(props);
    this.child = React.createRef();
    }
    
    onClick = () => {
    this.child.current.getAlert();
    };
    
    render() {
    return (
    <div>
    <Child ref={this.child} />
    <button onClick={this.onClick}>Click</button>
    </div>
    );
    }
    }
    
    class Child extends Component {
    getAlert() {
    alert('getAlert from Child');
    }
    
    render() {
    return <h1>Hello</h1>;
    }
    }
    
    ReactDOM.render(<Parent />, document.getElementById('root'));

    // Example 3
    // myContainer.jsimport React, { Component } from 'react'import MyChild from 'some/path/myChild'

class MyContainer extends Component {
    state = {
    name: 'foo'
    }
    
    handleNameChange = name => {
    this.setState({ name })
    }
    
    render() {
    return (
    <MyChild name={this.state.name} onNameChange={this.handleNameChange} />
    )
    }
    
    }
    
    export default MyContainer
    
    // myChild.jsimport React, { Component } from 'react'
    
    class MyChild extends Component {
    
    handleInputChange = event => {
    this.props.onNameChange(event.target.value)
    }
    
    render() {
    return (
    <div>
    <input type="text" onChange={this.handleInputChange} value={this.props.name} />
    <div>The name is: {this.props.name}</div>
    </div>
    )
    }
    
    }
    
    export default MyChild


    // SECOND VERSION also for Class component 
// Parent.jsx

import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
constructor(props) {
super(props);
this.setChanged = this.setChanged.bind(this);
this.state = {
changed: false
}
}

// Function to set the parent's state
setChanged() {
this.setState({ changed: true });
}

render() {
return <Child setChanged={this.setChanged} />
}
}

// Child.js

import React from 'react';

function Child(props) {
return (
// When clicked, parent's setChanged function is called
<div onClick={() => props.setChanged()} />
)
}

// Example 4 

// Call Child method from Parent

// https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
// https://reactjs.org/docs/react-api.html#reactcreateref

// Creating Refs
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
    render() {
      return <div ref={this.myRef} />;
    }
  
//   When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref.
  
    //   const node = this.myRef.current;
  
}



// Callback Refs

// Instead of passing a ref attribute created by createRef(), you pass a function. 

// You can pass callback refs between components like you can with object refs that were created with React.createRef().

// https://ourcodeworld.com/articles/read/327/how-to-execute-child-component-function-from-the-parent-component-in-react

class Parent extends React.Component {
triggerChildAlert(){
this.refs.child.showAlert();
}

render() {
return (
<div>
{/* Note that you need to give a value to the ref parameter, in this case child*/}
<Child ref="child" />
<button onClick={this.triggerChildAlert}>Click</button>
</div>
);
}}


// https://www.pluralsight.com/guides/how-to-reference-a-function-in-another-component


// Pass Action or Function to Child Component


// actionName={this.actual_action_name}

// this.props.actionName -> will trigger the action

// Pass Data from Child to Parent using Referenced Action

constructor() {
super();
this.state = {
};
this.submitForm = this.submitForm.bind(this);}

submitForm(values) {
this.setState({ values })}

<FormDemo
onFormSubmit={this.submitForm}/>