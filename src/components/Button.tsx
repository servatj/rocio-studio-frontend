import styled from '@emotion/styled';

export const Button = styled.button`
  color: turquoise;
`;

export const baseButtonStyles = `
  font-size: 1rem;
  border-radius: 4px;
  padding: 8px 12px;
`

export const PrimaryButton = styled.button`
  ${baseButtonStyles}
  background-color: turquoise;
  color: white;
`

export const SecondaryButton = styled.button`
  ${baseButtonStyles}
  background-color: white;
  color: turquoise;
  border: 1px solid turquoise;
`

export const ButtonWithSquare = styled.button`
  ${baseButtonStyles}
  background-color: white;
  color: #f1c40f;
  border: 1px solid turquoise;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
`
