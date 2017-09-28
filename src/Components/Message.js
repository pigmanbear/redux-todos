import React from 'react'
import { connect } from 'react-redux'
import { showMessage } from '../reducers/message'

const Message = ({message}) => (
    message ?  <span className='message'>{message}</span> : null
)


export default connect(state => ({
message: state.message
}))(Message)