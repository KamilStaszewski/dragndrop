import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import LeftColumn from "./components/leftColumn";
import { dropItem } from './actions/dragActions';

class App extends Component {

  startDragging = (ev, id) => {
    console.log('dragstart:',id);
    ev.dataTransfer.setData("id", id);
    }

    dragOver = (ev) => {
        console.log('dragover')
        ev.preventDefault();
    }


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
        <h2 className="header">{this.props.count}</h2>
            <LeftColumn tasks={tasks.wip}
                        dragOver={this.dragOver}
                        dropItem={this.props.dropItem} />
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
  items: state.dragDropReducer.items,
  count: state.dragDropReducer.count
});


export default connect(mapStateToProps, { dropItem })(App);

