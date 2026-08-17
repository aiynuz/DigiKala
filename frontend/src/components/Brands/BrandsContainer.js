import getBrands from "../../api/brandsApi";

const BrandsContainer = async () => {
  const brands = await getBrands();

  return `
    <section
      dir="rtl"
      class="w-full max-w-350 mx-auto mt-7 px-4 lg:px-0"
    >

      <div class="
        relative
        w-full
        border
        border-gray-200
        rounded-2xl
        bg-white
        p-5
      ">

        <!-- عنوان -->

        <div class="flex items-center gap-2 mb-5">

          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.77784 6.72814L4.00012 3.95032L5.41436 2.53613L8.19208 5.31396L6.77784 6.72814Z"
              fill="#424242"
            />

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9972 5.21069L15.0248 8.37288L18.3498 8.373C20.384 8.37308 21.2298 10.9761 19.5841 12.1719L16.8942 14.1264L17.9216 17.2886C18.5501 19.2233 16.3358 20.8321 14.6901 19.6365L12 17.6822L9.31001 19.6365C7.66422 20.8321 5.44995 19.2231 6.07848 17.2886L7.10583 14.1264L4.41596 12.1719C2.77026 10.9761 3.61607 8.37308 5.65029 8.373L8.97525 8.37288L10.0028 5.21069C10.6315 3.27603 13.3685 3.27605 13.9972 5.21069ZM10.3556 10.3728C10.399 10.3728 10.4374 10.3449 10.4508 10.3037L11.9049 5.8288C11.9349 5.73667 12.0652 5.73667 12.0951 5.8288L13.5493 10.3037C13.5627 10.3449 13.6011 10.3728 13.6444 10.3728L18.3497 10.373C18.4466 10.373 18.4868 10.497 18.4085 10.5539L14.6019 13.3197C14.5669 13.3452 14.5522 13.3903 14.5656 13.4315L16.0194 17.9066C16.0494 17.9987 15.9439 18.0753 15.8656 18.0184L12.0588 15.2528C12.0238 15.2274 11.9763 15.2274 11.9413 15.2528L8.1345 18.0184C8.05613 18.0753 7.95069 17.9987 7.98062 17.9066L9.43446 13.4315C9.44785 13.3903 9.43318 13.3452 9.39814 13.3197L5.59159 10.5539C5.51322 10.497 5.5535 10.373 5.65037 10.373L10.3556 10.3728Z"
              fill="#424242"
            />

            <path
              d="M18.6668 15.7797L22.0001 18.0019L23.1095 16.3378L19.7762 14.1156L18.6668 15.7797Z"
              fill="#424242"
            />

            <path
              d="M5.33336 15.7797L2.00003 18.0019L0.890625 16.3378L4.22396 14.1156L5.33336 15.7797Z"
              fill="#424242"
            />

            <path
              d="M11.0001 20.5361V23.5361H13.0001V20.5361H11.0001Z"
              fill="#424242"
            />

            <path
              d="M17.6922 6.72814L20.4699 3.95032L19.0557 2.53613L16.278 5.31396L17.6922 6.72814Z"
              fill="#424242"
            />
          </svg>

          <h2 class="
            text-base
            lg:text-lg
            font-bold
            text-gray-800
          ">
            محبوب‌ترین برندها
          </h2>

        </div>


        <!-- Swiper -->

        <div class="swiper brandsSwiper w-full">

          <div class="swiper-wrapper">

            ${brands
              .map(
                (brand) => `
                  <div class="swiper-slide">

                    <div class="
                      h-25
                      border
                      border-gray-100
                      rounded-lg
                      flex
                      flex-col
                      items-center
                      justify-center
                      bg-white
                      px-2
                    ">

                      <div class="
                        w-16
                        h-14
                        flex
                        items-center
                        justify-center
                      ">

                        ${
                          brand.image
                            ? `
                              <img
                                src="/DigiKala${brand.image}"
                                alt="${brand.title}"
                                class="
                                  w-full
                                  h-full
                                  object-contain
                                "
                              >
                            `
                            : ""
                        }

                      </div>

                      <p class="
                        mt-2
                        text-xs
                        text-gray-500
                        text-center
                        whitespace-nowrap
                        overflow-hidden
                        text-ellipsis
                        max-w-full
                      ">
                        ${brand.title}
                      </p>

                    </div>

                  </div>
                `
              )
              .join("")}

          </div>


          <!-- Prev -->

          <button
            class="
              brands-prev
              absolute
              right-2
              top-1/2
              -translate-y-1/2
              z-10
              w-9
              h-9
              bg-white
              border
              border-gray-200
              rounded-full
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <i class="fa-solid fa-chevron-right text-gray-600 text-sm"></i>
          </button>


          <!-- Next -->

          <button
            class="
              brands-next
              absolute
              left-2
              top-1/2
              -translate-y-1/2
              z-10
              w-9
              h-9
              bg-white
              border
              border-gray-200
              rounded-full
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <i class="fa-solid fa-chevron-left text-gray-600 text-sm"></i>
          </button>

        </div>

      </div>

    </section>
  `;
};

export default BrandsContainer;