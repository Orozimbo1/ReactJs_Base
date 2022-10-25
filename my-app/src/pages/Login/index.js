import React from 'react';
// import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Titulo, Paragrafo } from './styled';

export default function Login() {
    // toast.success('Oie, sucesso!', {
    //     toastId: 'customId',
    // });
    return (
        <Container>
            <Titulo isRed={false}>
                Login
                <small>Oie</small>
            </Titulo>
            <Paragrafo>Lorem ipsum</Paragrafo>
            <button type="button">Enviar</button>
        </Container>
    );
}
