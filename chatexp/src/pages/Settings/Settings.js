import React from "react";
import './Settings.css';
import BoxContainer from '../../components/BoxContainer/BoxContainer.js';
import PageContainer from "../../components/PageContainer/PageContainer.js";
import Logo from "../../components/Logo/Logo.js";


function Settings() {
    return (
        <PageContainer className="no-center">
            <Logo></Logo>

            <BoxContainer>
                <aside className="settings-aside d-flex flex-column justify-content-between h-100">
                    <div>
                        <button className="btn btn-link text-white mb-4 ps-0" aria-label="Voltar" style={{fontSize: "1.5rem"}}>
                            ←
                        </button>
                        <ul className="list-unstyled">
                            <li>
                                <button className="option btn w-100 text-start d-flex align-items-center mb-2">
                                    <span className="fw-bold">Perfil</span>
                                </button>
                            </li>
                            <li>
                                <button className="option btn w-100 text-start d-flex align-items-center">
                                    <span className="fw-bold">Privacidade</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <button className="logout-btn btn w-100 d-flex align-items-center justify-content-center mt-4" style={{background: "none", border: "none"}}>
                        <span style={{color: '#FF3B3B'}}>Sair</span>
                    </button>
                </aside>
            </BoxContainer>

        </PageContainer>
    )
}

export default Settings;
