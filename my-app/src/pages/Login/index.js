import React from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

import * as actions from '../../store/modules/example/actions';
import { Container } from '../../styles/GlobalStyles';
import { Titulo, Paragrafo } from './styled';

export default function Login() {
    // toast.success('Oie, sucesso!', {
    //     toastId: 'customId',
    // });
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(actions.clicaBotaoRequest());
    }

    return (
        <Container>
            <Titulo isRed={false}>
                Login
                <small>Oie</small>
            </Titulo>
            <Paragrafo>Lorem ipsum</Paragrafo>
            <button type="button" onClick={handleClick}>
                Enviar
            </button>
        </Container>
    );
}
