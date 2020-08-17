import React from 'react';
import { Area, Input, Button } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

const Filtro = (props) => {
    return (
        <Area>
            <Input type="text" onChange={(text) => { console.log(text.target.value) }} placeholder="Buscar Véiculo" />
            <Button>
                <FontAwesomeIcon icon={faSearch} />
            </Button>
            <Button primary>
                <FontAwesomeIcon icon={faPlus} color="white"/>
            </Button>
        </Area>
    )
}

export default Filtro
