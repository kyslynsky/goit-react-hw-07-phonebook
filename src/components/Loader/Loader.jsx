import { SpringSpinner } from 'react-epic-spinners';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <LoaderWrapper>
      <SpringSpinner color="#1976d2" />
    </LoaderWrapper>
  );
};
