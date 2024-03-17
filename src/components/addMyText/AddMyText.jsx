import React, { useState } from 'react';
import { storageAvailable } from '../../functions/storageAvailable';
import styles from './AddMyText.module.css'

const AddMyText = () => {
    const [newText, setNewText] = useState({
        header: '',
        text: ''
    })

    function handleChangeHeader(event) {
        setNewText({
            ...newText,
            header: event.target.value
        })
    }

    function handleChangeText(event) {
        setNewText({
            ...newText,
            text: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(storageAvailable('sessionStorage')) {
            console.log(newText)
            sessionStorage.setItem(newText.header, newText.text)
            console.log(sessionStorage.getItem(newText.header))
        } else {
            alert("Your browser doesn't support this function!")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newText.header} onChange={handleChangeHeader}/>
            <input type="text" value={newText.text} onChange={handleChangeText}/>
            <button>
                Сохранить
            </button>
        </form>
    );
};

export default AddMyText;