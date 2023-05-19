import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { theme } from "../styles/theme";

interface TextProps {
  children: string | ReactNode;
  color?: keyof typeof theme.colors;
  variant?: keyof typeof theme.fontVariants;
  type?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  width?: string;
}

export const Text = styled("span").attrs<TextProps>(({ type = "span" }) => ({
  as: `${type}`,
}))<TextProps>`
  ${({ color = "black", variant = "textMd", width }) => css`
    width: ${width && width};
    color: ${theme.colors[color]};
    font-size: ${theme.fontVariants[variant].fontSize};
    font-weight: ${theme.fontVariants[variant].fontWeight};
    line-height: ${theme.fontVariants[variant].lineHeight};

    a {
      text-decoration: none;
      color: ${theme.colors.purple};
      cursor: pointer;
    }
  `}
`;
