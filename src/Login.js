import { useRef, useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const [wait, setWait] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = () => {
        Axios.post('http://localhost:3001/api/insertLog', {
            login: user,
            password: pwd
        })
        setWait(true);
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/api/getLog').then((response) => {
        setLogged(response.data);
        setWait(false);
        })
    }, [wait])

    return (
        <div className="login">
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Zaloguj się</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="usernameLog">Login:</label>
                    <input
                        type="text"
                        id="usernameLog"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="passwordLog">Hasło:</label>
                    <input
                        type="password"
                        id="passwordLog"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Zaloguj się</button>
                </form>
                <p>
                    Nie masz konta?<br />
                    <span className="line">
                        <Link to="/register">Zarejestruj się</Link>
                    </span>
                </p>
            </section>
        </div>
    )
}

export default Login