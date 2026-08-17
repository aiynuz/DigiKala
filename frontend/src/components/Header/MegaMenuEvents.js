import { getMegaMenu } from "../../api/megaMenuApi";
function renderContent(category) {
    const container = document.getElementById("mega-menu-content");

    if (!container) return;

    container.innerHTML = `
    <h3
      class="
      text-red-600
      font-bold
      text-[16px]
      mb-8
      ">
      ${category.content.title}
    </h3>

    <div
      class="
      grid
      grid-cols-4
      gap-x-14
      gap-y-10
      ">

      ${category.content.columns
            .map(
                (column) => `
            <div>

              <h4
                class="
                font-semibold
                text-[14px]
                mb-5
                flex
                items-center
                gap-2
                ">

                <div class="w-0.5 h-4 bg-red-500 rounded-full"></div>

                ${column.title}

              </h4>

              <div class="flex flex-col gap-3">

                ${column.items
                        .map(
                            (item) => `
                      <a
                        href="#"
                        class="
                        text-[13px]
                        text-gray-600
                        hover:text-red-500
                        transition
                        ">
                        ${item}
                      </a>
                    `,
                        )
                        .join("")}

              </div>

            </div>
          `,
            )
            .join("")}

    </div>
  `;
}
export default async function MegaMenuEvents() {
    const data = await getMegaMenu();

    const categories = document.querySelectorAll(".mega-category");

    categories.forEach((category) => {
        category.addEventListener("mouseenter", () => {
            const id = Number(category.dataset.categoryId);

            const activeCategory = data.categories.find((item) => item.id === id);

            renderContent(activeCategory);
        });
    });
}