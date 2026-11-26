import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { elementsMenu } from "./data/menu";
function App() {
  function gererClicMenu(id) {
    console.log("Élément de menu cliqué :", id);
  }
  return (
    <main className="w-full h-screen flex justify-center bg-slate-50">
      {/* Barre de navigation Lateral */}
      <Sidebar elements={elementsMenu} onSelectionner={gererClicMenu} />
      {/* Rendu principal */}
      <section id="main" className="w-[82%]">
        <Header />
      </section>
    </main>
  );
}

export default App;
