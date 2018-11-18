import React from 'react'

const RightColumn = ({tasks, dragOver, dropItem}) => {
  return (
    <div className="rightColumn"
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => dropItem(e, "complete")}>
      <span className="rightColumn__header">Completed</span>
      {tasks}
    </div>
  )
}

export default RightColumn