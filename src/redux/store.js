import { configureStore } from '@reduxjs/toolkit'
import stateChanging from './reducers/stateChanging'
const store = configureStore({
    reducer: {
        AppStatus: stateChanging,
    }
})
export default store 