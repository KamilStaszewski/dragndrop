import React from 'react'

const Header = ({ count, resetState} ) => {
  return (
    <div className="header">
      <h2 className="header__headline"> Times dragndropped: {count}
        <button className="header__button"
                onClick={resetState}>
                Reset
        </button>
      </h2>
    </div>
  )
}

export default Header
