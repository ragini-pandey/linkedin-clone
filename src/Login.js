import React, { useState } from 'react'
import "./Login.css"
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch();

    const registerHandler = async () => {
        if (!name) return alert("Please enter full name")

        try {
            const userAuth = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic,
            });

            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                })
            );
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            const userAuth = await signInWithEmailAndPassword(auth, email, password);
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                })
            );
        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <div className='login'>
            <img
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
                alt="Linkedin main logo"
            />
            <form>
                <input
                    placeholder="Full name (required for register)"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Profile pic URL (optional)"
                    type="text"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />

                <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" onClick={loginHandler}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member?{" "}
                <span className="login__register" onClick={registerHandler}>
                    Register Now
                </span>
            </p>

        </div>
    )
}

export default Login