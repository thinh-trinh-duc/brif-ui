"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Accordion, Card, Codeblock } from "@brifui/components";
import { css, cx, Styles } from "@brifui/styled/css";

const Title: React.FC<{
  title: string;
  description: React.ReactNode;
  bordered?: boolean;
  children?: React.ReactNode;
}> = ({ title, bordered = true, description, children }) => {
  return (
    <div
      className={css({
        p: {
          base: "6",
          lg: "12"
        },
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: !bordered ? "transparent" : "border.muted"
      })}
    >
      <h1
        className={css({
          fontFamily: "heading",
          fontWeight: "bold",
          textStyle: {
            base: "heading.4xl",
            lg: "heading.5xl"
          },
          mb: ".2em"
        })}
      >
        {title}
      </h1>
      <p
        className={css({
          fontWeight: "medium",
          textStyle: {
            base: "text.lg",
            lg: "text.xl"
          },
          color: "text.muted"
        })}
      >
        {description}
      </p>
      {children}
    </div>
  );
};

const Section: React.FC<{
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  shadow?: boolean;
}> = ({ title, description, children, className, shadow = true }) => {
  return (
    <div
      className={cx(
        css({
          p: {
            base: "6",
            lg: "12"
          },
          gap: 6,
          display: "flex",
          flexDirection: "column",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: "border.muted"
        }),
        className
      )}
    >
      <div>
        {title && (
          <h3
            className={css({
              fontFamily: "heading",
              fontWeight: "bold",
              fontSize: "x-large"
            })}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            className={css({
              fontFamily: "body",
              fontWeight: "medium",
              fontSize: "medium",
              color: "text.muted"
            })}
          >
            {description}
          </p>
        )}
      </div>
      <div
        className={css({
          boxShadow: shadow ? "component.lg" : "none",
          borderRadius: "component.lg"
        })}
      >
        {children}
      </div>
    </div>
  );
};

const Preview: React.FC<{
  css?: Styles;
  children?: React.ReactNode;
  className?: string;
}> = ({ css: _css, children, className }) => {
  return (
    <Card
      css={css.raw(
        {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomWidth: "0px",
          borderBottom: "none",
          overflow: "auto",
          boxShadow: "none"
        },
        _css
      )}
    >
      <Card.Body
        css={css.raw(
          {
            minH: "36",
            py: 6,
            display: "grid",
            alignItems: "center",
            backgroundImage: {
              base: "radial-gradient(circle,rgba(0,0,0,.1) 3px,transparent 0)",
              _dark:
                "radial-gradient(circle,rgba(265,265,265,.1) 3px,transparent 0)"
            },
            backgroundPosition: "-2px -2px",
            backgroundSize: "30px 30px"
          },
          _css
        )}
        className={className}
      >
        {children}
      </Card.Body>
    </Card>
  );
};

const CodePreview: React.FC<{ children?: string }> = ({
  children = "(num) => num + 1"
}) => {
  return (
    <Accordion.Root
      css={css.raw({
        borderTopRadius: 0
      })}
      type="single"
      collapsible
    >
      <Accordion.Item value="codepreview">
        <Accordion.Trigger>Show code</Accordion.Trigger>
        <Accordion.Content
          css={css.raw({ maxH: "500px", maxW: "100%", overflow: "auto" })}
        >
          <Codeblock.Root>
            <Codeblock.Content language="tsx">{children}</Codeblock.Content>
          </Codeblock.Root>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export const Page = ({ children }: { children?: React.ReactNode }) => {
  return <div className={css({ pb: "24" })}>{children}</div>;
};
Page.Title = Title;
Page.Section = Section;
Page.Preview = Preview;
Page.CodePreview = CodePreview;
