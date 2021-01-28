import React from 'react'
import PropTypes from 'prop-types'

import './Info.css'

const Info = ({info, onClick}) => 
    <div className={`info ${info}`} onClick={() => onClick()} >
        <span><strong>{info === 'WIN'? 'YOU WIN' : 'YOU LOSE'}</strong></span><br/>
        <span> Restart ?</span>
    </div> 

Info.propTypes = { 
    info: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Info