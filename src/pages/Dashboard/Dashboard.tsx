import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import type { RootState } from "../../app/store";

const Dashboard = () => {

    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user?.username)

    return(
        <>
        <h1>dashboard page</h1>
        <h1>hi {user}</h1>
        <button onClick={() => dispatch(logout())}>logout</button>
        </>
    )
}
export default Dashboard;