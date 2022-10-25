import React from 'react';
import { useEffect } from 'react';
// import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Titulo, Paragrafo } from './styled';
import axios from '../../services/axios';

export default function Login() {
    // toast.success('Oie, sucesso!', {
    //     toastId: 'customId',
    // });

    useEffect(() => {
        async function getData() {
            const response = await axios.get('/');
            console.log(response);
        }

        getData();
    }, []);

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
