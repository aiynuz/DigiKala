import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header/Header";
import SliderContainer from "./components/Slider/SliderContainer";
import MegaMenuEvents from "./components/Header/MegaMenuEvents";
import sliderInit from "./components/Slider/sliderInit";
import ServicesContainer from "./components/Services/ServicesContainer";
import AmazingOffersContainer from "./components/AmazingOffers/AmazingOffersContainer";
import amazingInit from "./components/AmazingOffers/amazingInit";
import BannersContainer from "./components/Banners/BannersContainer";
import FlashSaleContainer from "./components/FlashSale/FlashSaleContainer";
import flashSaleInit from "./components/FlashSale/flashSaleInit";
import BannersGridContainer from "./components/BannersGrid/BannersGridContainer";
import Categories from "./components/Categories/Categories";
import TopBannersContainer from "./components/TopBanners/TopBannersContainer";
import BrandsContainer from "./components/Brands/BrandsContainer";
import brandsInit from "./components/Brands/brandsInit";
import BottomBannersContainer from "./components/BottomBanners/BottomBannersContainer";
import ProductsBasedOnPreferenceContainer from "./components/ProductsBasedOnPreference/ProductsBasedOnPreferenceContainer";
import preferenceInit from "./components/ProductsBasedOnPreference/preferenceInit";
import RecommendedProductsContainer from "./components/RecommendedProducts/RecommendedProductsContainer";
import recommendedInit from "./components/RecommendedProducts/recommendedInit";
import EyelashEnhancersContainer from "./components/EyelashEnhancers/EyelashEnhancersContainer";
import eyelashEnhancersInit from "./components/EyelashEnhancers/eyelashEnhancersInit";
import ProteinContainer from "./components/Protein/ProteinContainer";
import proteinInit from "./components/Protein/proteinInit";
import BestSellingProductsContainer from "./components/BestSellingProducts/BestSellingProductsContainer";
import bestSellingProductsInit from "./components/BestSellingProducts/bestSellingProductsInit";
import HottestProductsContainer from "./components/HottestProducts/HottestProductsContainer";
import hottestProductsInit from "./components/HottestProducts/hottestProductsInit";
import FooterContainer from "./components/Footer/FooterContainer";
async function render() {

  document.querySelector("#app").innerHTML = `

    ${await Header()}
    ${await SliderContainer()}
     ${await ServicesContainer()}
     ${await AmazingOffersContainer()}
     ${await BannersContainer()}
    ${await FlashSaleContainer()}
    ${await BannersGridContainer()}
    ${await Categories()}
    ${await TopBannersContainer()}
    ${await BrandsContainer()}
    ${await BottomBannersContainer()}
    ${await ProductsBasedOnPreferenceContainer()}
    ${await RecommendedProductsContainer()}
    ${await EyelashEnhancersContainer()}
    ${await ProteinContainer()}
    ${await BestSellingProductsContainer()}
    ${await HottestProductsContainer()}
    ${await FooterContainer()}
  `;


  sliderInit();
  amazingInit();
  MegaMenuEvents();
  flashSaleInit();
  brandsInit();
  preferenceInit();
  recommendedInit();
  eyelashEnhancersInit();
  proteinInit();
  bestSellingProductsInit();
  hottestProductsInit();
}


render();