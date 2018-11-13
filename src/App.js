import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { dropItem } from './actions/dragActions';

class App extends Component {

  startDragging = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
    }

    dragOver = (ev) => {
        ev.preventDefault();
    }


    // onDrop = (ev, cat) => {
    //     let id = ev.dataTransfer.getData("id");
    //     console.log(id)
    //     let tasks = this.state.tasks.filter((task) => {
    //         if (task.name == id) {
    //             task.category = cat;
    //         }
    //         return task;
    //     });
 
    //     this.setState({
    //         ...this.state,
    //         tasks
    //     });
    //  }
  render() {
    var tasks = {
      wip: [],
      complete: []
  }

  this.props.items.forEach ((t) => {
      tasks[t.category].push(
          <div key={t.name} 
              onDragStart = {(e) => this.startDragging(e, t.name)}
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
        <div className="wip"
            onDragOver={(e)=>this.dragOver(e)}
            onDrop={(e)=>{this.props.dropItem(e, "wip")}}>
            <span className="task-header">WIP</span>
            {tasks.wip}
        </div>
        <div className="droppable" 
            onDragOver={(e)=>this.dragOver(e)}
            onDrop={(e)=>this.props.dropItem(e, "complete")}>
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


export default connect(mapStateToProps, { dropItem })(App);

