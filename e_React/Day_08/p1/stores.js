import { configureStore } from '@reduxjs/toolkit';
import slice1Reducer from './slicer1';

/*  
    ! ============================================
    !  Redux Store Configuration (Global State)
    ! ============================================
*/

/*  
    * configureStore:
    * - Creates the Redux store and applies necessary configurations
    * - Manages all slices (reducers) of the application
    * - Automatically sets up Redux DevTools for debugging
*/

const stores = configureStore({
    reducer: {
        slice1: slice1Reducer,  // * Connecting the slice1 reducer to the store
    }
});

/*  
    ? The store is now ready to be used in the application.
    ? We can access 'slice1' state anywhere using Redux hooks like:
    * - useSelector((state) => state.slice1)  -> To get state
    * - useDispatch() -> To dispatch actions
*/

export default stores;
