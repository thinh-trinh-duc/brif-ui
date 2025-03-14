import React from "react";
import { Toaster } from "@brifui/components";
import { css } from "@brifui/styled/css";

import { Header } from "./header";
import { Menu } from "./menu";

export const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({
  children
}) => {
  return (
    <div
      className={css({
        mx: "auto",
        w: "100%",
        maxW: "container.xl",
        height: "100svh",
        overflow: "hidden",
        display: "flex",
        position: "relative",
        borderLeft: {
          base: "none",
          lg: "2px solid {colors.border}"
        },
        borderRight: {
          base: "none",
          lg: "2px solid {colors.border}"
        }
      })}
    >
      <Menu />
      <div
        className={css({
          flex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%"
        })}
      >
        <Header alwaysShow={false} />
        <main className={css({ flex: 1, overflowY: "auto" })}>
          {children}
          <Toaster />
        </main>
      </div>
    </div>
  );
};
