import { getProteinProducts } from "../../api/proteinApi";

export default async function Protein() {
  const products = await getProteinProducts();

  return `
    <section class="max-w-[1400px] mx-auto my-2">
      
      <div
        class="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
          relative
          p-5
        "
      >

        <!-- عنوان بخش -->
        <div class="flex items-center justify-between mb-5">

          <div class="text-right">

            <h2 class="text-xl font-bold text-gray-800">
              پروتئین
            </h2>

            <p class="text-sm text-gray-500 mt-1">
              بر اساس سلیقه شما
            </p>

          </div>

          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-sm
              text-gray-700
              font-medium
              rounded-lg
              px-4
              py-2
              transition
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>

        </div>

        <!-- محصولات -->
        <div class="swiper proteinSwiper overflow-hidden">

          <div class="swiper-wrapper">

            ${
              products
                .map(
                  (product) => `
                    <div class="swiper-slide">

                      <div
                        class="
                          border
                          border-gray-200
                          rounded-xl
                          overflow-hidden
                          bg-white
                          h-[330px]
                          flex
                          flex-col
                        "
                      >

                        <!-- تصویر -->
                        <div
                          class="
                            h-[210px]
                            bg-gray-100
                            flex
                            items-center
                            justify-center
                            overflow-hidden
                            flex-shrink-0
                          "
                        >

                          <img
                            src="${import.meta.env.BASE_URL}${product.image.replace(/^\/+/, "")}"
                            alt="${product.name}"
                            class="
                              w-full
                              h-full
                              object-contain
                            "
                          />

                        </div>

                        <!-- اطلاعات محصول -->
                        <div class="p-3 flex flex-col flex-1">

                          <p
                            class="
                              text-sm
                              text-gray-700
                              leading-6
                              line-clamp-2
                              min-h-[48px]
                            "
                          >
                            ${product.name}
                          </p>

                          <!-- تخفیف -->
                          <div
                            class="
                              mt-auto
                              min-h-[28px]
                              flex
                              items-center
                              justify-end
                              gap-2
                            "
                          >

                            ${
                              product.discount
                                ? `
                                  <span
                                    class="
                                      bg-red-500
                                      text-white
                                      text-xs
                                      rounded-full
                                      px-2
                                      py-1
                                    "
                                  >
                                  ${product.discount}
                                  </span>

                                  <span
                                    class="
                                      text-xs
                                      text-gray-400
                                      line-through
                                    "
                                  >
                                    ${product.oldPrice}
                                  </span>
                                `
                                : ""
                            }

                          </div>

                          <!-- قیمت -->
                          <div class="text-left mt-1">

                            <span
                              class="
                                text-base
                                font-bold
                                text-gray-800
                              "
                            >
                              ${product.price}
                            </span>

                            <span
                              class="
                                text-xs
                                text-gray-500
                                mr-1
                              "
                            >
                              تومان
                            </span>

                          </div>

                        </div>

                      </div>

                    </div>
                  `,
                )
                .join("")
            }

            <!-- اسلاید مشاهده همه -->
            <div class="swiper-slide">

              <div
                class="
                  h-[330px]
                  flex
                  flex-col
                  items-center
                  justify-center
                  bg-white
                "
              >

                <div
                  class="
                    w-12
                    h-12
                    rounded-full
                    border-2
                    border-gray-700
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-gray-700
                    mb-3
                  "
                >
                  ←
                </div>

                <span
                  class="
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  مشاهده همه
                </span>

              </div>

            </div>

          </div>

        </div>

        <!-- دکمه قبلی -->
        <button class="
protein-prev
absolute
left-[260px]
top-1/2
-translate-y-1/2
z-30
bg-white
w-10
h-10
rounded-full
shadow
flex
items-center
justify-center
text-xl
">
‹
</button>
<button class="
protein-next
absolute
left-[210px]
top-1/2
-translate-y-1/2
z-30
bg-white
w-10
h-10
rounded-full
shadow
flex
items-center
justify-center
text-xl
">
›
</button>

      </div>

    </section>
  `;
}