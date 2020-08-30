import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { increment, decrement, add, subtract, storeResult, deleteResult } from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}> Store Result</button>
                <ul>
                  {this.props.storedResults.map(strResuld => (
                      <li onClick={() => this.props.onDeleteResult(strResuld.id)} key={strResuld.id}>{strResuld.val}</li>
                  ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onAdd: () => dispatch(add()),
    onSubtract: () => dispatch(subtract()),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onDeleteResult: (id) => dispatch(deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
