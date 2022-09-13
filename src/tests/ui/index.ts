import flyd from "flyd";
import * as elements from "@/elements";
import Button from "./testComponents/Button";
import Menu from "./testComponents/Menu";

const root = document.querySelector<HTMLDivElement>("#root")!;

root.appendChild(
  Menu([], {
    buttonText: "open",
    items: [
      {
        text: "item 1",
      },
      {
        text: "item 2",
      },
      {
        text: "item 3",
      },
    ],
  })
);
