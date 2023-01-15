import React, { useState } from "react";

import {Container, Points} from './styles';

interface props{
    toggleTheme(): void;
    points: number;
}

const Header: React.FC<props> = ({toggleTheme, points}) => {

    const [point, setPoint] = useState(points);

    return(
        <Container className="col-lg-12 d-flex justify-content-between align-items-center p-2">
            <div className="col-lg-2">
                JO-KEN-PO
            </div>
            <Points className="col-lg-1 label label-light">
                <p className="m-0">{point}</p>
            </Points>
            <div className="col-lg-2 d-flex justify-content-end">
                <div className="form-check form-switch">
                    <input className="form-check-input switch" type="checkbox" id="flexSwitchCheckDefault" onChange={ () => {
                        toggleTheme();
                    }}/>
                </div>
            </div>
        </Container>
    );  
}

export default Header;