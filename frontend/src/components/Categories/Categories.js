import getCategories from "../../api/categoriesApi";

const Categories = async () => {
  const categories = await getCategories();

  return `
    <section class="
      w-full
      max-w-[1400px]
      mx-auto
      mt-6
      px-4
      lg:px-0
    ">

      <h2 class="
        text-lg
        lg:text-xl
        font-bold
        mb-6
        lg:mb-8
      ">
        دسته‌بندی‌ها
      </h2>


      <div class="
        grid
        grid-cols-3
        sm:grid-cols-5
        md:grid-cols-7
        lg:grid-cols-9
        gap-y-8
        gap-x-3
        sm:gap-x-4
        lg:gap-x-6
      ">

        ${categories
          .map(
            (category) => `
              <div class="
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
              ">

                <div class="
                  w-16
                  h-16
                  sm:w-18
                  sm:h-18
                  lg:w-20
                  lg:h-20
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                ">

                  ${
                    category.image
                      ? `
                       <img
  src="${import.meta.env.BASE_URL}${category.image.replace(/^\/+/, "")}"
  alt="${category.title}"
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
                  mt-3
                  text-xs
                  lg:text-sm
                  text-gray-700
                  text-center
                  leading-5
                  whitespace-nowrap
                ">
                  ${category.title}
                </p>


              </div>
            `
          )
          .join("")}

      </div>

    </section>
  `;
};

export default Categories;