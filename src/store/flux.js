const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            currentUser: null,
            users: [],
            posts: [],
            username: '',
            password: ''
        },
        actions: {
            getUsers: () => {
                if (!localStorage.getItem('users')) {
                    console.log('paso', 1);
                    fetch('https://jsonplaceholder.typicode.com/users')
                        .then((response) => response.json())
                        .then((data) => {
                            setStore({ users: data });
                            localStorage.setItem('users', JSON.stringify(data));
                        })
                } else {
                    console.log('paso', 2);
                    setStore({ users: JSON.parse(localStorage.getItem('users'))})
                }
            },
            getPosts: () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => response.json())
                    .then((data) => {
                        setStore({ posts: data })
                    })
            },
            handleChange: (e) => {
                const { name, value } = e.target;
                //console.log(name + ":" + value);
                setStore({ [name]: value });
            },
            handleSubmit: (e, { username, password }) => {
                e.preventDefault();
                //const { username, password } = getStore();
                //const { username, password } = store;
                //console.log(store);
                console.log(`Haciendo Login.... ${username} ${password}`);
                setStore({ currentUser: { username } })
                sessionStorage.setItem('currentUser', JSON.stringify({ username }))
            },
            checkUser: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({ currentUser: JSON.parse(sessionStorage.getItem('currentUser')) })
                }
            },
            salir: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({ currentUser: null })
                    sessionStorage.removeItem('currentUser')
                }
            },
            saludo: () => {
                console.log('Hola desde Saludo');
            },
            newMessage: () => {
                //getActions().saludo();
                //const { saludo } = getActions();
                //saludo();

                const func = getActions().saludo;
                func();
            },
            setData: () => {
                localStorage.setItem('name', 'Luis');
                localStorage.getItem('name');
                //localStorage.removeItem('name');

                sessionStorage.setItem('name', 'Luis');
                sessionStorage.getItem('name');
                //sessionStorage.removeItem('name');
            }
        }
    }
}

export default getState;