import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const NotePage = ({ history }) => {
    let { id } = useParams()
    let [note, setNote] = useState('...loading note 🫡')

    useEffect(() => {
        getNote()
    }, [id])

    let getNote = async () => {
        if (id === 'new') return

        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        fetch(`/api/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`/api/notes/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    let handleSubmit = () => {
        updateNote()
    }

    let handleChange = value => {
        setNote(note => ({ ...note, body: value }))
        console.log('Handle Change:', note)
    }

    return (
        <div className="note">
            <div className="note-header">
                <Link to={'/'}>
                    <h3>
                        <ArrowLeft onClick={handleSubmit} />
                    </h3>
                </Link>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}
            </div>
            <textarea
                onChange={e => {
                    handleChange(e.target.value)
                }}
                value={note?.body}
            ></textarea>
        </div>
    )
}

export default NotePage
