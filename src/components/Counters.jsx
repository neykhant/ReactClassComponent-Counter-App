//jshint ignore:start
import React, { Component } from 'react'
import Counter from './Counter';

class Counters extends Component {
    render() { 
        // console.log(this.props.counters)
        const { onDelete, onIncrement } = this.props;
        return (
            <div>
                {
                    this.props.counters.map(counter => 
                        <Counter 
                            counter={counter} 
                            key={counter.id} 
                            onDelete={onDelete} 
                            onIncrement={onIncrement} />
                    )
                }
            </div>
        );
    }
}
 
export default Counters;