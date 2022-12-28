import { createContext, useEffect, useState } from "react";


export const AppContext = createContext(null);

const ContextWrapper = ({ children }) => {

    const [store, setStore] = useState({
        users: [],
        posts: [],
        username: '',
        password: '',
    })

    const [actions, setActions] = useState({
        getUsers: () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => {
                    //setStore({ ...store, users: data }); // pierdo el estado
                    setStore((prevStore) => {
                        return { ...prevStore, users: data }
                    });
                })
        },
        getPosts: () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((data) => {
                    //setStore({ ...store, posts: data });
                    setStore((prevStore) => {
                        return { ...prevStore, posts: data }
                    });
                })
        },
        handleChange: (e) => {
            const { name, value } = e.target;
            //console.log(name + ":" + value);
            setStore((prevStore) => {
                return {
                    ...prevStore,
                    [name]: value
                }
            })
        },
        handleSubmit: (e, { username, password }) => {
            e.preventDefault();
            console.log(`Haciendo Login.... ${username} ${password}`);
        }
    })

    useEffect(() => {
        actions.getUsers();
        actions.getPosts();
    }, [])

    return (
        <AppContext.Provider value={{ mensaje: 'Hola de Context API', store, actions }}>
            {children}
        </AppContext.Provider>
    )

}

export default ContextWrapper;

