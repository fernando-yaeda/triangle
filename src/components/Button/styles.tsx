import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const variants = {
  blackAndWhite: {
    bgColor: theme.colors.black,
    color: theme.colors.white,
    hoverBgColor: theme.colors.mediumGrey,
    hoverColor: theme.colors.darkGrey,
    boxShadow: "none",
  },
  whiteAndGrey: {
    bgColor: theme.colors.white,
    color: theme.colors.black,
    hoverBgColor: "none",
    hoverColor: "none",
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  },
  purple: {
    bgColor: theme.colors.lightBlue,
    color: theme.colors.purple,
    hoverBgColor: theme.colors.purple,
    hoverColor: theme.colors.lightBlue,
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px",
  },
};

interface ButtonProps {
  width?: string;
  variant?: keyof typeof variants;
  fontVariant?: keyof typeof theme.fontVariants;
  gap?: string;
}

export const Button = styled.button<ButtonProps>`
  ${({
    width = "auto",
    variant = "blackAndWhite",
    fontVariant = "textMd",
    gap = "0px",
  }) => css`
    width: ${width};

    position: relative;

    img {
      height: 20px;
      position: absolute;
      left: 16px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${gap};

    padding: 8px 16px;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    font-size: ${theme.fontVariants[fontVariant].fontSize};
    font-weight: ${theme.fontVariants[fontVariant].fontWeight};
    line-height: ${theme.fontVariants[fontVariant].lineHeight};

    background-color: ${variants[variant].bgColor};
    color: ${variants[variant].color};

    &:hover {
      background-color: ${variants[variant].hoverBgColor};
      color: ${variants[variant].hoverColor};
    }

    box-shadow: ${variants[variant].boxShadow};

    transition: ease 0.3s;
  `}
`;
