import { renderView, screen } from "@brifui/mocks";

import { FlexBox } from "./flex-box";

describe("Box", () => {
  it("should render as `div` by default", async () => {
    renderView(<FlexBox>Hello world</FlexBox>);

    const element = await screen.findByText("Hello world");

    expect(element).toBeVisible();
    expect(element.tagName.toLowerCase()).toBe("div");
  });

  describe("when change `as` to span", () => {
    it("should render as `span`", async () => {
      renderView(<FlexBox as="span">Hello world</FlexBox>);

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
    });
  });

  describe("when set className", () => {
    it("should render element with corresponding className", async () => {
      renderView(
        <FlexBox as="span" className="text-red">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
      expect(element.classList).toContain("text-red");
    });
  });

  describe("when set flexDirection to column", () => {
    it("should have `flex-column` className", async () => {
      renderView(
        <FlexBox as="span" className="text-red" flexDirection="column">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.tagName.toLowerCase()).toBe("span");
      expect(element.classList).toContain("text-red");
    });

    it("should not pass flexDirection to the component", async () => {
      renderView(
        <FlexBox as="span" className="text-red" flexDirection="column">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).not.toHaveAttribute("flexDirection");
      expect(element).not.toHaveAttribute("flexdirection");
    });
  });

  describe("when set inline to true", () => {
    it("should have `inline-flex` className", async () => {
      renderView(
        <FlexBox inline as="span">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.classList).toContain("inline-flex");
      expect(element).not.toHaveAttribute("inline");
    });
  });

  describe("when set alignItems to start", () => {
    it("should have `items-start` className", async () => {
      renderView(
        <FlexBox alignItems="start" as="span">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.classList).toContain("items-start");
      expect(element).not.toHaveAttribute("alignItems");
      expect(element).not.toHaveAttribute("alignitems");
    });
  });

  describe("when set justifyContent to start", () => {
    it("should have `justify-start` className", async () => {
      renderView(
        <FlexBox justifyContent="start" as="span">
          Hello world
        </FlexBox>
      );

      const element = await screen.findByText("Hello world");
      expect(element).toBeVisible();
      expect(element.classList).toContain("justify-start");
      expect(element).not.toHaveAttribute("justifyContent");
      expect(element).not.toHaveAttribute("justifycontent");
    });
  });
});
