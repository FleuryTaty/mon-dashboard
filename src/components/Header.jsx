import { InputSearch } from "./Search";
import { Info } from "./Info";

export function Header() {
  return (
    <header className="w-full h-15 flex items-center justify-between px-5 bg-white border-b border-slate-200 ">
      <InputSearch type={"text"} placeholder={"Recherchez une transaction"} />
      <Info name={"Fleury TATY"} email={"fleurytaty242@gmail.com"} />
    </header>
  );
}
