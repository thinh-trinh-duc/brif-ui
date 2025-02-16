import { RecipeVariantProps, sva } from "@brifui/styled/css";

export const inputVariants = sva({
  slots: ["root", "input", "prefix", "suffix"],
  base: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontFamily: "body",
      transition: "border-color .15s, box-shadow .15s",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "border.subtle",
      '&:not([aria-invalid="true"]):focus-within': {
        borderColor: "border"
      },
      "&:has(input:disabled)": {
        bg: "background.disabled",
        color: "text.disabled",
        borderColor: "border.disabled",
        "& > *": {
          cursor: "not-allowed"
        }
      }
    },
    input: {
      height: "100%",
      _focus: {
        outline: "none",
        borderColor: "border"
      }
    },
    prefix: {
      color: "inherit",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    suffix: {
      color: "inherit",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  variants: {
    hasPrefix: {
      true: {}
    },
    hasSuffix: {
      true: {}
    },
    size: {
      sm: {
        root: {
          borderRadius: "component.md",
          height: "component.sm",
          fontSize: "small",
          _focusWithin: {
            boxShadow: "component.sm"
          },
          '&[aria-invalid="true"]:focus-within': {
            boxShadow: "component.sm.error"
          }
        },
        input: {
          px: 2
        },
        prefix: {
          px: 2
        },
        suffix: {
          px: 2
        }
      },
      md: {
        root: {
          height: "component.md",
          borderRadius: "component.md",
          fontSize: "small",
          _focusWithin: {
            boxShadow: "component.md"
          },
          '&[aria-invalid="true"]:focus-within': {
            boxShadow: "component.md.error"
          }
        },
        input: {
          px: 2.5
        },
        prefix: {
          px: 2.5
        },
        suffix: {
          px: 2.5
        }
      },
      lg: {
        root: {
          height: "component.lg",
          borderRadius: "component.lg",
          fontSize: "medium",
          _focusWithin: {
            boxShadow: "component.lg"
          },
          '&[aria-invalid="true"]:focus-within': {
            boxShadow: "component.lg.error"
          }
        },
        input: {
          px: 3.5
        },
        prefix: {
          px: 3.5
        },
        suffix: {
          px: 3.5
        }
      }
    },
    bordered: {
      true: {
        prefix: {
          borderRightWidth: "1px",
          borderRightStyle: "solid",
          borderRightColor: "inherit"
        },
        suffix: {
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",
          borderLeftColor: "inherit"
        }
      }
    },
    error: {
      true: {
        root: {
          borderColor: "error"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    hasPrefix: false,
    bordered: true,
    error: false
  }
});

export type InputVariantProps = RecipeVariantProps<typeof inputVariants>;
