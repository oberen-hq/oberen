import {useMutation} from "@apollo/client";
import {isMobile} from "react-device-detect";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import { REGISTER_MUTATION } from "../graphql/mutations";

export default function Register() {
    const history = useHistory();
    const [registerUser, { data }] = useMutation(REGISTER_MUTATION);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        
        registerUser({
            variables: {
                args: {
                    username: username,
                    email: email,
                    password: password,
                    avatarUrl: "/",
                    bio: "It's looking empty up here.",
                    isLocal: true,
                    provider: (window.navigator.platform).toString(),
                    device: isMobile ? "Phone" : "Computer",
                    userAgent: (window.navigator.userAgent).toString(),
                    ip: "127.0.0.1"
                }
            }
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem("accessToken", res.data.register.accessToken)
            localStorage.setItem("refreshToken", res.data.register.refreshToken)
            history.push("/home")
        }).catch((err) => {
            console.log(JSON.stringify(err, null, 2));
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" />
                <input type="text" name="username" onChange={((event: any) => {
                    setUsername(event.target.value);
                })}/>

                <label htmlFor="email" />
                <input type="text" name="email" onChange={((event: any) => {
                    setEmail(event.target.value);
                })}/>

                <label htmlFor="password" />
                <input type="password" name="password" onChange={((event: any) => {
                    setPassword(event.target.value);
                })}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}