import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Titulo, Paragrafo } from './styled';

export default function Login() {
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
