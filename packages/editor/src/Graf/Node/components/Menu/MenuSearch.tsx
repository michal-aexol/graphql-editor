import React, { useRef } from 'react';

import styled from '@emotion/styled';

interface MenuSearchProps {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  padding: 0 1rem;
  gap: 0.5rem;
  display: flex;
`;

const Main = styled.input`
  background-color: ${({ theme }) => theme.neutral[700]};
  border-radius: ${(p) => p.theme.radius}px;
  color: ${({ theme }) => theme.text.default};
  width: auto;
  flex: 1;
  min-width: 0;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  font-size: 14px;
  outline: 0;
  position: relative;
  border: 1px solid ${({ theme }) => theme.neutral[200]};
  &::placeholder {
    color: ${({ theme }) => theme.text.disabled};
  }
  &:focus {
    border-color: ${({ theme }) => theme.accents[200]};
  }
`;

export const MenuSearch: React.FC<MenuSearchProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search...',
}) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Wrapper>
      <Main
        autoFocus
        ref={ref}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
