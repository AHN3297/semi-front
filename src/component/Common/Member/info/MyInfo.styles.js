import styled from 'styled-components';

export const FormWrapper = styled.div`
    max-width: 500px;
    margin: 50px auto;
    padding: 40px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
`;

export const Subtitle = styled.p`
    text-align: center;
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
`;

export const InfoGroup = styled.div`
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e0e0e0;
`;

export const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
`;

export const InfoText = styled.p`
    font-size: 16px;
    color: #555;
    margin: 0;
    padding: 8px 0;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 32px;
`;

export const UpdateButton = styled.button`
    flex: 1;
    padding: 14px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #555;
    }
`;

export const CancelButton = styled.button`
    flex: 1;
    padding: 14px;
    background-color: #999;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #777;
    }
`;

export const DeleteButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 8px;

    &:hover {
        background-color: #c82333;
    }
`;