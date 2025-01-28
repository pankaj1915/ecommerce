
export const additem = (product) =>{
    return{
        type: "additem",
        payload: product
    }
}

export const delitem = (product) =>{
    return{
        type: "delitem",
        payload: product
    }
}


export const login = (user) => ({
  type: "LOGIN",
  payload: user,
});

export const logout = () => ({
  type: "LOGOUT",
});

