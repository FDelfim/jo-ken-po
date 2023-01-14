import React from "react";

import {Container} from './styles';

interface props{
    toggleTheme(): void;
}

const Header: React.FC<props> = ({toggleTheme}) => {
    return(
        <Container className="col-lg-12 d-flex justify-content-between align-items-center p-2">
            JO-KEN-PO
            <div className="form-check form-switch">
                <input className="form-check-input switch" type="checkbox" id="flexSwitchCheckDefault" onChange={ () => {
                    toggleTheme();
                }}/>
            </div>
        </Container>
    );  
}

export default Header;