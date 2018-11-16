import React from 'react'

const RightColumn = ({tasks, dragOver, dropItem}) => {
  return (
    <div className="droppable"
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => dropItem(e, "complete")}>
      <span className="task-header">Completed</span>
      {tasks}
    </div>
  )
}

export default RightColumn