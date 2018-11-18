import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import LeftColumn from "./components/leftColumn";
import RightColumn from "./components/rightColumn";
import Header from "./components/header";
import { dropItem, resetState } from './actions/dragActions';

class App extends Component {

  startDragging = (ev, id) => {
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
              className="tasks"
              style = {{backgroundColor: t.bgcolor}}
          >
              {t.name}
          </div>
      );
  });
    return (
        <div className="container">
            <Header count={this.props.count}
                    resetState={this.props.resetState} />
            <LeftColumn tasks={tasks.wip}
                        dragOver={this.dragOver}
                        dropItem={this.props.dropItem} />           
            <RightColumn tasks={tasks.complete}
                        dragOver={this.dragOver}
                        dropItem={this.props.dropItem} />                       
        </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.dragDropReducer.items,
  count: state.dragDropReducer.count
});


export default connect(mapStateToProps, { dropItem, resetState })(App);

