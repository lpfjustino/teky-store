import React from 'react'
import BannerSlider from "../BannerSlider";
import SponsoredProducts from "../SponsoredProducts";
import WeeklySales from '../WeeklySales';

function Home(props) {
    const products = [
        { multi: true, products: [ { content: "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS" }, { content: "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS" }, { content: "BANNER DINÂMICO COM TRANSIÇÕES ENTRE OS MAIS VENDIDOS CATEGORIZADOS" }], index: "01"},
        { header: "DESTAQUE PATROCINADO", content: "Opção do lojista comprar destaque p/ seus produtos", index: "01"},
        { header: "DESTAQUE PATROCINADO", content: "Opção do lojista comprar destaque p/ seus produtos", index: "02"},
    ];

    return (
        <div>
            <BannerSlider />
            <SponsoredProducts
                items={products}
                />
            <WeeklySales />
        </div>
    )
}

Home.propTypes = {

}

export default Home

