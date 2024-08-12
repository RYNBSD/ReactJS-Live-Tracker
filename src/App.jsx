import { Areas, Blog, Cards, Footer, Header } from "./page";

import { Spread, symptoms } from "./data/data";

export default function App() {
  return (
    <main>
      <Header />
      <Areas />
      <Cards title="How coronavirus spread" topic={Spread} />
      <Cards title="Symptoms of coronavirus" topic={symptoms} />
      <Blog />
      <Footer />
    </main>
  );
}
