import React from 'react'

const LeftColumn = ({tasks, dragOver, dropItem}) => {
  return (
    <div className="leftColumn"
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => dropItem(e, "wip")}>
      <span className="leftColumn__header">TO DO</span>
      {tasks}
    </div>
  )
}

export default LeftColumn
