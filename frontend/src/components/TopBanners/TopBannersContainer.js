import getTopBanners from "../../api/topBannersApi";

const TopBannersContainer = async () => {
  const banners = await getTopBanners();

  return `
    <section class="
      w-full
      max-w-350
      mx-auto
      mt-7
      px-4
      lg:px-0
    ">

      <div class="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-4
      ">

        ${banners
          .map(
            (banner) => `
              <div class="
                w-full
                overflow-hidden
                rounded-2xl
              ">

                <img
                  src="/DigiKala${banner.image}"
                  alt=""
                  class="
                    w-full
                    h-auto
                    object-cover
                    block
                  "
                >

              </div>
            `
          )
          .join("")}

      </div>

    </section>
  `;
};

export default TopBannersContainer;