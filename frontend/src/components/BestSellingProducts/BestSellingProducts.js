export default function BestSellingProducts(data) {
  const products = data.products || [];

  // محصولات را سه‌تا سه‌تا به ستون‌ها تقسیم می‌کنیم
  const columns = [];

  for (let i = 0; i < products.length; i += 3) {
    columns.push(products.slice(i, i + 3));
  }

  return `
    <section 
      class="
        max-w-[1400px]
        mx-auto
        my-6
        px-3
        md:px-0
      "
    >

      <div
        class="
          bg-white
          border
          border-gray-200
          rounded-2xl
          overflow-hidden
          relative
          p-3
          md:p-5
        "
      >

        <!-- عنوان بخش -->
        <div 
          class="
            flex
            items-center
            justify-between
            mb-5
          "
        >

          <h2 
            class="
              text-lg
              md:text-xl
              font-bold
              text-gray-800
            "
          >
            پرفروش‌ترین کالاها
          </h2>


          <button
            class="
              bg-gray-100
              hover:bg-gray-200
              text-xs
              md:text-sm
              text-gray-700
              font-medium
              rounded-lg
              px-3
              md:px-4
              py-2
              transition
            "
          >
            مشاهده همه
            <span class="mr-1">›</span>
          </button>

        </div>


        <!-- محصولات -->
        <div 
          class="
            swiper
            bestSellingProductsSwiper
            overflow-hidden
          "
        >

          <div class="swiper-wrapper">


            ${
              columns.length
                ? columns
                    .map(
                      (column) => `

                        <div class="swiper-slide">


                          <div class="flex flex-col">


                            ${column
                              .map(
                                (product) => `

                                  <div
                                    class="
                                      flex
                                      items-center
                                      gap-2
                                      md:gap-3
                                      bg-white
                                      min-h-[90px]
                                      md:min-h-[100px]
                                      px-1
                                      md:px-2
                                      border-b
                                      border-gray-100
                                    "
                                  >


                                    <!-- رتبه -->

                                    <span
                                      class="
                                        text-xl
                                        md:text-2xl
                                        font-bold
                                        text-red-500
                                        min-w-[24px]
                                        md:min-w-[28px]
                                        text-center
                                      "
                                    >
                                      ${product.rank}
                                    </span>



                                    <!-- تصویر -->

                                    <div
                                      class="
                                        w-[65px]
                                        h-[65px]

                                        md:w-[80px]
                                        md:h-[80px]

                                        flex-shrink-0
                                        flex
                                        items-center
                                        justify-center
                                        overflow-hidden
                                      "
                                    >

                                      <img
                                      src="/DigiKala${product.image}"
                                        alt="${product.name}"
                                        class="
                                          w-full
                                          h-full
                                          object-contain
                                        "
                                      />

                                    </div>



                                    <!-- نام محصول -->

                                    <p
                                      class="
                                        text-xs
                                        md:text-sm
                                        text-gray-700
                                        leading-5
                                        md:leading-6
                                        line-clamp-3
                                        text-right
                                        flex-1
                                      "
                                    >
                                      ${product.name}
                                    </p>


                                  </div>


                                `,
                              )
                              .join("")}


                          </div>


                        </div>

                      `,
                    )
                    .join("")
                : ""
            }


          </div>


        </div>



        <!-- دکمه قبلی -->

      <button class="
bestSellingProducts-prev

hidden
md:flex

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

items-center

justify-center

text-xl
">
›
</button>


        <!-- دکمه بعدی -->

       <button class="
bestSellingProducts-next



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

items-center

justify-center

text-xl
">
‹
</button>

      </div>

    </section>
  `;
}
