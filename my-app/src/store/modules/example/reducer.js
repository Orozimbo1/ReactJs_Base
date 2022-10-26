const intialState = {
    botaoClicado: false,
};

export default function (state = intialState, action) {
    switch (action.type) {
        case 'BOTAO_CLICADO': {
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }

        default: {
            return state;
        }
    }
}
