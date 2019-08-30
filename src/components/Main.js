import React,{Component} from 'react';
import styled,{ThemeProvider} from 'styled-components';
import PropTypes from 'prop-types'

const Button =styled.button`
color:white
border: 2px solidd palevioletred;
background:palevioletred;
font-size:1em;
margin:1em;
padding:0.25em 1em;
border-radius: 5px;
`;
const Dis=styled.div`
color:white;
width:100px;
padding:50px 100px;
background:orange;
`;
const Header=styled.div`
color:white;
width:300px;
background:black;
`;

const Message=styled.div`
color:palevioletred;
width:100px;
background:white;
height:100px
align-items:center;
`;




const Display=styled.div`
background:palevioletred;
height:300px;
width:300px;
margin:0 auto;
overflow:hidden;
`;
const theme={
  bg:"palevioletred",
  fg:"white"
};
export default class Main extends Component{
  constructor(props){
    super();
    this.state={
      count:props.count};
    this.toIncrement=this.toIncrement.bind(this);
    this.toDecrement=this.toDecrement.bind(this);
    this.toReset=this.toReset.bind(this);
  }


    toIncrement(){
      this.setState((prevState) =>({count:prevState.count+1}));
    }
    toDecrement(){
      this.setState((prevState)=>({count:prevState.count-1}));
    }
    toReset(){
      this.setState(()=>({count:0}));
    }

    render(){
      return(
        <Display>
        <Header>React Clicker</Header>
        <Dis>
        <Message>
        {this.state.count}
        </Message>
        </Dis>
        <Button onClick={this.toIncrement}>+</Button>
        <Button onClick={this.toDecrement}>-</Button>
        <Button onClick={this.toReset}>reset</Button>
        </Display>

      );
    }

  }
  Main.defaultProps={
    count:0
  };

  Main.propTypes={
    count:PropTypes.number
  };
