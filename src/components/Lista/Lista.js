import React from 'react';
import { Area, Titulo, Container, Paginacao, Listagem } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faChevronLeft, faAngleDoubleLeft, faAngleDoubleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Lista = (props) => {
    return (
        <Area>
            <Titulo>Lista de veículos</Titulo>
            <Container>
                <Listagem>
                    <li>
                        <div>
                            <span>Fiat</span>
                            <span primary>Uno Vivace</span>
                            <span>2015</span>
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </li>
                    <li>
                        <div>
                            <span>Fiat</span>
                            <span primary>Uno Vivace</span>
                            <span>2015</span>
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </li>
                    <li>
                        <div>
                            <span>Fiat</span>
                            <span primary>Uno Vivace</span>
                            <span>2015</span>
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </li>
                    <li>
                        <div>
                            <span>Fiat</span>
                            <span primary>Uno Vivace</span>
                            <span>2015</span>
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </li>
                    <li>
                        <div>
                            <span>Fiat</span>
                            <span primary>Uno Vivace</span>
                            <span>2015</span>
                        </div>
                        <button>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </li>
                </Listagem>
            </Container>
            <Paginacao>
                <div>
                    <button>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </Paginacao>
        </Area>
    )
}

export default Lista
