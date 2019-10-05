import styled from "styled-components";
import { primary, secondary } from "../vars";

export const H1 = styled.h1`
  color: ${props => props.secondary ? secondary : primary};
`;

export const H2 = styled.h2`
  color: ${props => props.secondary ? secondary : primary};
`;

export const H3 = styled.h3`
  color: ${props => props.secondary ? secondary : primary};
`;
