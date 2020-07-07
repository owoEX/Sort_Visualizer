import React, {Component} from 'react'
import styled from 'styled-components';
import SortingView from './components/SortingView';
import { sortArray } from './components/sketch'
const Styles = styled.div`
  .mainbox{
    color: #262626;
    border: none;
  }

  .footer{
    height: 50px;

  }
`;

const Button = styled.button`
  background: ${props => props.primary ? "burlywood" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid burlywood;
  border-radius: 3px;

  &:active{
    background: ${props => props.primary ? "teal" : "white"} !important;
  }
  &:hover{
    background: ${props => props.primary ? "skyblue" : "white"} !important;
    border: 2px solid skyblue;
  }
`;


const BeginButton = styled.button`
  background: ${props => props.primary ? "mediumseagreen": "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid mediumseagreen;
  border-radius: 3px;
`;

const items = [
  {
    id: 0,
    value: 'Bubble',
    active: true
  },
  {
    id: 1,
    value: 'Quick',
    active: false
  },
  {
    id: 2,
    value: 'Merge',
    active: false
  },
  {
    id: 3,
    value: 'Heap',
    active: false
  },
  {
    id: 4,
    value: 'Selection',
    active: false
  }
];

function sort(id) {
  console.log(items[id].value + " Sort")
  {/*If id == 0*/}
  function bubbleSort() {
      var swapped;
      do {
          swapped = false;
          for (var i=0; i < sortArray.length-1; i++) {
              if (sortArray[i] > sortArray[i+1]) {
                  var temp = sortArray[i];
                  sortArray[i] = sortArray[i+1];
                  sortArray[i+1] = temp;
                  swapped = true;
              }
          }
      } while (swapped);
  }

  {/*If id == 1*/}
  function quicksort() {
      if (sortArray.length <= 1) {
      return sortArray;
      }
  
      var pivot = sortArray[0];
      
      var left = []; 
      var right = [];
  
      for (var i = 1; i < sortArray.length; i++) {
          sortArray[i] < pivot ? left.push(sortArray[i]) : right.push(sortArray[i]);
      }
  
      return quicksort(left).concat(pivot, quicksort(right));
  };

  {/*If id == 4*/}
  function selectionSort(){
      for (let i = 0; i < sortArray.length; i++){
          let indexOfMin = i // set index of min to the 
          let j = i // set the index to run the while loop for calculating min
          let min = sortArray[i] // set the initial value of minimum
  
          // find the minimum from i to end of array
          while (j < sortArray.length){
              if (sortArray[j] < min){
                  min = sortArray[j]
                  indexOfMin = j
              }
              j++
          }
  
          if (indexOfMin !== i){ // only swap if the index of minimum and curr item is different
              let tmp = sortArray[i]
              sortArray[i] = sortArray[indexOfMin]
              sortArray[indexOfMin] = tmp
              console.log(sortArray)
          }
      }
  }

}

export default class Home extends React.Component {

  state = {
      id: 0,
      value: items[0].value + " Sort" 
  };

  changeID = (_id) =>{
    console.log(_id);

    this.setState({
      id: _id,
      value: items[_id].value + " Sort"
    })

    for (var i = 0; i < items.length; ++i){
      items[i].active = false;
      console.log(items[i].value + ": " + items[i].active)
    }

    items[_id].active = true;
    console.log(items[_id].value + ": " + items[_id].active)

  }
  render() {
    return (
        <div>
          <input type="number" placeholder="Size" min="10" max="100"></input>
          <Button primary onClick={() => this.changeID(0)}>Bubble</Button>
          <Button primary onClick={() => this.changeID(1)}>Quick</Button>
          <Button primary onClick={() => this.changeID(2)}>Merge</Button>
          <Button primary onClick={() => this.changeID(3)}>Heap</Button>
          <Button primary onClick={() => this.changeID(4)}>Selection</Button>
          <BeginButton primary onClick={() => sort(this.state.id)}>Begin Sort</BeginButton>
          <h1>{this.state.value}</h1>
          <SortingView/>
      </div>
    );
  }
}