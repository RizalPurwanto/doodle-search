import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import appReducer from './reducers'
import {
    persistReducer,
    persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'counter',
    storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const store2 = createStore(appReducer, applyMiddleware(thunk))

const persistor = persistStore(store)
export default function storeAndPersistor ()  {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
    return { store, persistor }
}