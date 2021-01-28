import React from 'react'
import PropTypes from 'prop-types';

import './Button.css'

const Button = ({button, isUsed, onClick}) => (
    <div className={isUsed ? 'button used' : 'button' } onClick={()=>onClick(button)}>
    <span >
      {button}
    </span>
  </div>
)

Button.propTypes = {
    button: PropTypes.string.isRequired,
    isUsed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button