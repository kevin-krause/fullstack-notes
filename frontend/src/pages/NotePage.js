import React from 'react'
import { useParams } from 'react-router-dom'

const NotePage = ({ match }) => {
    let { id } = useParams()
    return (
        <div>
            <h1>single page {id}</h1>
        </div>
    )
}

export default NotePage
