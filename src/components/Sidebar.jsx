import { Logo } from "./Logo";
import { ElementMenu } from "./ElementMenu";

export function Sidebar({ elements, onSelectionner }) {
  return (
    <section
      id="sidebar"
      className="w-[18%] h-full  pt-3 bg-white border-r border-slate-200"
    >
      <Logo />

      <nav className="mt-2 px-3">
        <ul>
          {elements.map((element) => (
            <li key={element.id}>
              <ElementMenu
                icone={element.icone}
                libelle={element.libelle}
                actif={element.actif}
                onClick={() => onSelectionner(element.id)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
