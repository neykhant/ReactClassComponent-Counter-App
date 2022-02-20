//jshint ignore:start
import React, { Component } from 'react';

class Counter extends Component {
    

     formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
     }

    render() { 
        // console.log(this.props.counter)
const {onIncrement, counter, onDelete} = this.props;
        return (
            <div>
                <span >{this.formatCount()}</span>
                <button className='btn btn-info m-2' 
                    onClick={() =>onIncrement(counter)}>Increment</button>
                <button className='btn btn-warning m-2' 
                    onClick={() => onDelete(counter.id)}>Delete</button>
            </div>
        );
    }
}
 
export default Counter;