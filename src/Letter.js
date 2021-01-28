import React from 'react'
import PropTypes from 'prop-types'

import './Letter.css'

const HIDDEN_SYMBOL = '_'

const Letter = ({letter, feedback}) => (
    <div className="letter"> 
        <span>
            {feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
        </span>
    </div>
)

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'visible',
    ]).isRequired,
}

export default Letter
