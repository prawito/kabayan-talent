import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonDefault = styled.button`
    background: rgba(255, 165, 0, 0.48);
    padding: 10px 16px;
    min-width: 100px;
    border: 1px solid red;
    color: white;
    font-weight: bold;
    font-size: 14px;
    border-radius: ${props => (props.rounded ? '25px' : '4px')};
`;

const ButtonSecondary = styled(ButtonDefault)`
    background: blue;
`;

const Button = ({ secondary, primary, ...props }) => {
    switch (true) {
        case primary:
            return <ButtonDefault {...props} />;
        case secondary:
            return <ButtonSecondary {...props} />;
        default:
            return <ButtonDefault {...props} />;
    }
};

Button.propTypes = {
    secondary: PropTypes.bool,
    primary: PropTypes.bool,
};

export default Button;
