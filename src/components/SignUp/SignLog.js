import {useState} from 'react';
import axios from 'axios';


export default function SignLog({setToken}) {
    const [user, setUser] = useState({})

    function inputHandler(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        })
    }

    function submitForm(event) {
        event.preventDefault()
        axios.post(
            "http://159.89.2.247:8003/api/users/signin/",
            user
        ).then(response => {
            if (response.status === 200) {
                setToken(response.data.access)
            }
        })
    }

    return (
        <form onSubmit={submitForm}>
            <input name="username" type="text"  onChange={inputHandler} placeholder="Логин"/>
            <input name="password" type="password" onChange={inputHandler} placeholder="Пароль"/>
            <button>Войти</button>
        </form>
    )
}