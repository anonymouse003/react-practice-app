import Login1 from "./Login1";
import LoginPage from "./Loginpage";
export default function LoginComponent() {
    return <>
        <div className="hidden sm:block">
            <Login1></Login1>
        </div>
        <div className="sm:hidden">
            <LoginPage></LoginPage>
        </div>
    </>
}