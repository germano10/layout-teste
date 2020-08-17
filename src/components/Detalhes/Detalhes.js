import React from 'react';
import { Area, Titulo, Container, Modelo, Informacoes, Descricao, Footer } from './Styles';

const Detalhes = (props) => {
    return (
        <Area>
            <Titulo>Detalhes do veículo</Titulo>
            <Container>
                <Modelo>Uno Vivace</Modelo>
                <Informacoes>
                    <div>
                        <span>Marca</span>
                        <span>FIAT</span>
                    </div>
                    <div>
                        <span>Ano</span>
                        <span>2015</span>
                    </div>
                </Informacoes>
                <Descricao>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor ultrices leo nec hendrerit. Vestibulum egestas fringilla diam, sed congue augue suscipit quis. Curabitur libero ipsum, iaculis at justo at, consequat posuere ligula. In pharetra tincidunt turpis, id accumsan ex. Suspendisse porta dolor risus, ac venenatis dui congue quis. Donec ut massa lacinia, malesuada metus at, pharetra justo. In metus dui, ornare sit amet turpis ut, imperdiet volutpat libero. Donec volutpat malesuada erat, ut elementum augue consequat a. Vestibulum rhoncus magna mauris. Duis congue molestie ipsum nec bibendum. Curabitur enim ex, fermentum in lorem a, aliquam imperdiet erat. Vestibulum luctus dolor non nisi placerat sollicitudin.
                </Descricao>
            </Container>
            <Footer>
                <button>Editar</button>
            </Footer>
        </Area>
    )
}

export default Detalhes
