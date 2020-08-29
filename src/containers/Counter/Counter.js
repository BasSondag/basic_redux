import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionType from '../../store/actions'

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
    onIncrementCounter: () => dispatch({type: actionType.INCREMENT}),
    onDecrement: () => dispatch({type: actionType.DECREMENT}),
    onAdd: () => dispatch({type: actionType.ADD, value: 5}),
    onSubtract: () => dispatch({type: actionType.SUBTRACT, value: 5}),
    onStoreResult: (result) => dispatch({type: actionType.STORE_RESULT, result: result}),
    onDeleteResult: (id) => dispatch({type: actionType.DELETE_RESULT, resultElId: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
