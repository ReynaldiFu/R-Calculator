import React,{Component} from 'react';
import './App.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      box: false,
      box1: false,
      box2: false,
      ischecked:0,
      input:0,
      input1:0,
      input2:0,
      hasil:0,
      message:'',
    };
  }

  checkedinput(){
    if(this.state.box === false){
      this.setState({box: true,ischecked:  this.state.ischecked + 3});
    }else{
      this.setState({box: false,ischecked:  this.state.ischecked - 3});
    }
  }

  checkedinput1(){
    if(this.state.box1 === false){
      this.setState({box1: true,ischecked:  this.state.ischecked + 4});
    }else{
      this.setState({box1: false,ischecked:  this.state.ischecked - 4});
    }
  }
  checkedinput2(){
    if(this.state.box2 === false){
      this.setState({box2: true,ischecked:  this.state.ischecked + 5});
    }else{
      this.setState({box2: false,ischecked:  this.state.ischecked - 5});
    }
  }
  setInput(e){
    this.setState({input: e.target.value})
  }

  setInput1(e){
    this.setState({input1: e.target.value})
  }

  setInput2(e){
    this.setState({input2: e.target.value})
  }

  setHasilTambah(e){
    if(this.state.ischecked === 0 || this.state.ischecked === 3 || this.state.ischecked === 4 || this.state.ischecked === 5){
      this.setState({message:'Min 2 Checklist'});
    }else if(this.state.ischecked === 7){
      this.setState({message:'',hasil: parseInt(this.state.input) + parseInt(this.state.input1)}); 
    }else if(this.state.ischecked === 8){
      this.setState({message:'',hasil: parseInt(this.state.input) + parseInt(this.state.input2)});
    }else if(this.state.ischecked === 9){
      this.setState({message:'',hasil: parseInt(this.state.input1) + parseInt(this.state.input2)});
    }else if(this.state.ischecked === 12){
      this.setState({message:'',hasil: parseInt(this.state.input) + parseInt(this.state.input1) + parseInt(this.state.input2)});
    }
  }
  setHasilKurang(e){
    if(this.state.ischecked === 0 || this.state.ischecked === 3 || this.state.ischecked === 4 || this.state.ischecked === 5){
      this.setState({message:'Min 2 Checklist'});
    }else if(this.state.ischecked === 7){
      this.setState({message:'',hasil: this.state.input - this.state.input1});
    }else if(this.state.ischecked === 8){
      this.setState({message:'',hasil: this.state.input - this.state.input2});
    }else if(this.state.ischecked === 9){
      this.setState({message:'',hasil: this.state.input1 - this.state.input2});
    }else if(this.state.ischecked === 12){
      this.setState({message:'',hasil: this.state.input - this.state.input1 - this.state.input2});
    }
  }
  setHasilKali(e){
    if(this.state.ischecked === 0 || this.state.ischecked === 3 || this.state.ischecked === 4 || this.state.ischecked === 5){
      this.setState({message:'Min 2 Checklist'});
    }else if(this.state.ischecked === 7){
      this.setState({message:'',hasil: this.state.input * this.state.input1});
    }else if(this.state.ischecked === 8){
      this.setState({message:'',hasil: this.state.input * this.state.input2});
    }else if(this.state.ischecked === 9){
      this.setState({message:'',hasil: this.state.input1 * this.state.input2});
    }else if(this.state.ischecked === 12){
      this.setState({message:'',hasil: this.state.input * this.state.input1 * this.state.input2});
    }
  }
  setHasilBagi(e){
    if(this.state.ischecked === 0 || this.state.ischecked === 3 || this.state.ischecked === 4 || this.state.ischecked === 5){
      this.setState({message:'Min 2 Checklist'});
    }else if(this.state.ischecked === 7){
      this.setState({message:'',hasil: this.state.input / this.state.input1});
    }else if(this.state.ischecked === 8){
      this.setState({message:'',hasil: this.state.input / this.state.input2});
    }else if(this.state.ischecked === 9){
      this.setState({message:'',hasil: this.state.input1 / this.state.input2});
    }else if(this.state.ischecked === 12){
      this.setState({message:'',hasil: this.state.input / this.state.input1 / this.state.input2});
    }
  }
  render() {
    return (
      <div className="App">
      <div className="Input">
      <h2>R-Calculator</h2>
      <InputGroup className="mb-3">
        <FormControl data-testid="AngkaPertama" type="number" onChange={(e)=>this.setInput(e)}/>
        <InputGroup.Checkbox data-testid="checklistpertama" onClick={()=>this.checkedinput()}/>
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl data-testid="AngkaKedua" type="number" onChange={(e)=>this.setInput1(e)}/>
        <InputGroup.Checkbox data-testid="checklistkedua" onClick={()=>this.checkedinput1()}/>
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl data-testid="AngkaKetiga" type="number" onChange={(e)=>this.setInput2(e)}/>
        <InputGroup.Checkbox data-testid="checklistketiga" onClick={()=>this.checkedinput2()}/>
      </InputGroup>
      </div>
      <div className="Operator">
        <Button data-testid="tambah" style={{margin:'10px'}} onClick={()=>this.setHasilTambah('+')}>+</Button>
        <Button data-testid="kurang" style={{margin:'10px'}} onClick={()=>this.setHasilKurang('-')}>-</Button>
        <Button data-testid="kali" style={{margin:'10px'}} onClick={()=>this.setHasilKali('x')}>x</Button>
        <Button data-testid="bagi" style={{margin:'10px'}} onClick={()=>this.setHasilBagi('/')}>/</Button>
      </div>
      <hr style={{height:'5px',width:'50%'}}/>
      {this.state.message === '' ? <h3 data-testid="hasil">Hasil : {this.state.hasil}</h3>: <h3 style={{color:'red'}}>{this.state.message}</h3>}
      </div>
    )
  }
}
