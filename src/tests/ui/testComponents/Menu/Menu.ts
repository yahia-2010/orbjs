import { button, div, li, ul } from "@/elements";
import { state } from "@/state";

export interface MenuProps {
  items: { text: string; action?: () => void }[];
  buttonText: string;
}

const Menu: OrbComponent<MenuProps> = (_, { items, buttonText }) => {
  const isOpen = state(true);

  return div([
    button(buttonText, {
      onclick: () => {
        isOpen(!isOpen());
      },
    }),
    isOpen() &&
      ul(
        items.map((item) => {
          return li(item.text, { onclick: item.action });
        })
      ),
  ]);
};

export default Menu;
