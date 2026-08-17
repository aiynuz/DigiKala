export default function FooterTrust(data) {

  return `

    <section
      dir="rtl"
      class="
        w-full
        flex
        flex-col
        md:flex-row
        items-center
        md:items-start
        justify-between
        gap-6
        md:gap-10
        mt-10
        pb-8
        border-b
        border-gray-200
      "
    >

      <!-- متن معرفی -->

      <div
        class="
          flex-1
          text-right
          order-1
          w-full
        "
      >

        <h2
          class="
            text-sm
            md:text-base
            font-bold
            text-gray-700
            mb-3
          "
        >
          ${data.trustTitle}
        </h2>


        <p
          class="
            text-xs
            text-gray-400
            leading-7
          "
        >
          ${data.trustDescription}
        </p>


        <button
          class="
            mt-3
            text-xs
            text-blue-600
            flex
            items-center
            gap-1
          "
        >
          مشاهده بیشتر
          <span>←</span>
        </button>

      </div>


      <!-- نمادهای اعتماد -->

      <div
        class="
          flex
          flex-wrap
          justify-center
          md:flex-row
          gap-2
          shrink-0
          order-2
          w-full
          md:w-auto
        "
      >

        ${
          data.trustLogos.map(logo => `

            <div
              class="
                w-[75px]
                h-[75px]
                md:w-[90px]
                md:h-[90px]
                border
                border-gray-200
                rounded-lg
                flex
                items-center
                justify-center
                bg-white
              "
            >

              <img
                src="${logo.image}"
                alt="${logo.title}"
                class="
                  max-w-[60px]
                  max-h-[60px]
                  md:max-w-[75px]
                  md:max-h-[75px]
                  object-contain
                "
              />

            </div>

          `).join("")
        }

      </div>

    </section>

  `;

}