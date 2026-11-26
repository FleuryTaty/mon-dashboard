import { iconesMenu, IconeParDefaut } from "../data/iconesMenu";

export function ElementMenu({ libelle, icone, actif, onClick }) {
  const Icone = iconesMenu[icone] ?? IconeParDefaut;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={actif ? "page" : undefined}
      className={
        actif
          ? "flex w-full items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
          : "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
      }
    >
      <Icone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{libelle}</span>
    </button>
  );
}
