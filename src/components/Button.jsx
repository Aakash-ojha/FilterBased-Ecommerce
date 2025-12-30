import styled from "styled-components";

const StyledButton = styled.button`
  padding: 4px 10px;
  width: 120px;
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  background-color: ${({ active }) => (active ? "red" : "white")};

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
    transform: translateY(-1px);
  }
`;

export default StyledButton;
