import FooterBenefits from "./FooterBenefits";
import FooterColumns from "./FooterColumns.js";
import FooterSocial from "./FooterSocial";
import FooterApp from "./FooterApp";
import FooterTrustContainer from "./FooterTrustContainer.js";
import { getFooterInfo } from "../../api/footerInfoApi";
import FooterInfo from "./FooterInfo";
import FooterBrands from "./FooterBrands";
import { getFooterBrands } from "../../api/footerBrandsApi";
export default async function Footer(data) {
const footerInfo = await getFooterInfo();
const footerBrands = await getFooterBrands();
  return `

    <footer
      dir="rtl"
      class="
        bg-white
        border-t
        border-gray-200
        mt-10
      "
    >

      <div
        class="
          max-w-[1400px]
          mx-auto
          px-6
          py-10
        "
      >

    

        <div
          class="
            w-full
            flex
            flex-col
            items-start
            mb-12
          "
        >

          <img
            src="${data.logo}"
            class="
              w-[170px]
              object-contain
            "
          />

          <div
            class="
              flex
              items-center
              gap-4
              text-sm
              text-gray-500
              mt-4
            "
          >

            <span>${data.phone}</span>

            <span>|</span>

            <span>${data.support}</span>

          </div>

        </div>


        <!-- BENEFITS -->

        ${FooterBenefits(data)}


        <!-- FOOTER COLUMNS + SOCIAL -->

        <div
  class="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-8
    lg:gap-10
    mt-12
    items-start
  "
>

          ${FooterColumns(data)}

          ${FooterSocial(data)}

        </div>


        <!-- APP -->

        ${FooterApp(data)}


      <!-- TRUST -->

${await FooterTrustContainer()}
${FooterInfo(footerInfo)}


</div>


<!-- BRANDS FULL WIDTH -->

${FooterBrands(footerBrands)}
    </footer>

  `;

}