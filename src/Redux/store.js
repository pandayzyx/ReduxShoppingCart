import {createStore,applyMiddleware,compose} from "redux"
import  reducer from  "./reducer"



const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

console.log(store.getState())


const store  = createStore(reducer,composeEnhancer(applyMiddleware()))

export default store