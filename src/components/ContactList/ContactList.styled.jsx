import styled from '@emotion/styled';

export const ContactUl = styled.ul`
  font-size: 8px;
  list-style: none;
  width: 220px;
  font-size: 12px;
  padding-left: 10px;
`;

export const ContactListItem = styled.li`
  ::before {
    content: '\\2022';
    color: #5252d3;
    font-weight: bold;
  }
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
`;
