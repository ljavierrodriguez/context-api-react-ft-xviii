import { createContext, useEffect, useState } from "react";
import getState from "./flux";

// Object

export const AppContext = createContext(null);

const injectContext = PassedComponent => {
    const ContextWrapper = (props) => {
        const [state, setState] = useState(getState({
            getStore: () => state.store, // return store
            getActions: () => state.actions,
            setStore: (updateStore) => setState({
                store: Object.assign(state.store, updateStore), // { name:'', lastname: '' }, { name: 'Luis', age: 10 } => {name: 'Luis', lastname: '', age: 10 }
                actions: {...state.actions}
            })
        }));

        useEffect(() => {
            state.actions.checkUser();
            state.actions.getUsers();
            state.actions.getPosts();
            //state.actions.setData();
        }, [])

        return (
            <AppContext.Provider value={state}>
                <PassedComponent {...props} />
            </AppContext.Provider>
        )

    }

    return ContextWrapper;
}
export default injectContext;

