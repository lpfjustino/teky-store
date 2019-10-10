import React from 'react';
import Header from "./header/Header";
import CategoriesList from "./CategoriesList";
import BannerSlider from "./BannerSlider";
import SponsoredProducts from "./SponsoredProducts";

function App() {
    const products = [
        { multi: true, products: [ { content: "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS" }, { content: "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS" }, { content: "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS" }], index: "01"},
        { header: "DESTAQUE PATROCINADO", content: "Opção do lojista comprar destaque p/ seus produtos", index: "01"},
        { header: "DESTAQUE PATROCINADO", content: "Opção do lojista comprar destaque p/ seus produtos", index: "02"},
    ]
    return (
        <div className="App">
            <Header />
            <CategoriesList />
            <BannerSlider />
            <SponsoredProducts
                items={ products }
                />
        </div>
    );
}

export default App;
