import SignIn from "./signIn"
import SignUp from "./singUp"

export default function LoginLayout() {
    return (
        <div className="w-full max-w-xs">
            <SignIn />
            <SignUp />
        </div>
    )
}