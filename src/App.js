import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { startDragging } from './actions/dragActions';

class App extends Component {

//   onDragStart = (ev, id) => {
//     console.log('dragstart:',id);
//     ev.dataTransfer.setData("id", id);
// }

  render() {
    var tasks = {
      wip: [],
      complete: []
  }

  this.props.items.forEach ((t) => {
      tasks[t.category].push(
          <div key={t.name} 
              onDragStart = {(e) => this.props.startDragging(e, t.name)}
              draggable
              className="draggable"
              style = {{backgroundColor: t.bgcolor}}
          >
              {t.name}
          </div>
      );
  });
    return (
      <div className="container-drag">
      <h2 className="header">DRAG & DROP DEMO</h2>
      <div className="wip">
          <span className="task-header">WIP</span>
          {tasks.wip}
      </div>
      <div className="droppable" >
           <span className="task-header">COMPLETED</span>
           {tasks.complete}
      </div>


  </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.dragDropReducer.items
});

// export const mapDispatchToProps = dispatch => {
//   return {
//     startDragging: (event) => {
//       event.dataTransfer.setData("text", event.target.id)
//       dispatch({type: 'START_DRAG', payload: event.target.id})
//     },
//   };
// };

export default connect(mapStateToProps, { startDragging })(App);

