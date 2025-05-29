import React, { useState } from 'react';

const Password = ({ id, placeholder = 'Senha' }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="position-relative">
            <input
                type={show ? 'text' : 'password'}
                id={id}
                className="form-control"
                placeholder={placeholder}
            />
            <span
                onClick={() => setShow(!show)}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    color: '#999'
                }}
            >
                {show ? '🙈' : '👁️'}
            </span>
        </div>
    );
};

export default Password;