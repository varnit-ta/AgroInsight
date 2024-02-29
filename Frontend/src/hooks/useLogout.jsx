import {useAuthContext} from './useAuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const navigate = useNavigate();
    /*
        To logout:
        1. Delete the JS Web Token from the local storage
        2. Update the global state
    */
    const logout = () => {
        /* Remove user from the storage */
        localStorage.removeItem('user');
        
        /* Dispatch logout action */
        dispatch({ type: 'LOGOUT' });
        navigate('/login')
    }

    return {logout};
}