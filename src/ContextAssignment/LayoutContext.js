import { useReducer } from 'react';

const initialState = {
    mainColor: "#120078",
    secondaryColor: "#9d0191",
    contrastColor: "#FFFFFF",
};

const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_MAIN_COLOR": {
            return {
                ...state,
                mainColor: ''//setear el color nuevo
            }
        }
        case "CHANGE_SECONDARY_COLOR": {
            return {
                ...state,
                secondaryColor: ''//setear el color nuevo
            }
        }
        case "CHANGE_CONTRAST_COLOR": {
            return {
                ...state,
                contrastColor: ''//setear el color nuevo
            }
        }
    }
}

const LayoutContext = {}; //Crear contexto

const LayoutContextProvider = ({ children }) => {
    const { state, dispatch } = useReducer(reducer, initialState);
    return <div>{children}</div>; //Colocar el provider del contexto con state y dispatch en un objeto dentro de la propiedad value
}

export { LayoutContextProvider, LayoutContext };