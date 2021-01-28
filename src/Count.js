import React from 'react'
import PropTypes from 'prop-types'

import './Count.css'

const Count = ({count}) => <div className="count">{count}</div>

Count.propTypes={
    count: PropTypes.number.isRequired,
}

export default Count