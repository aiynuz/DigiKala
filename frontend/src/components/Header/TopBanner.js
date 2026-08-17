export default function TopBanner(data) {
  return `
    <section class="w-full bg-[#6f2cff]">
      <a
        href="${data.link}"
        class="block w-full"
      >
        <img
          src="${data.image}"
          alt="Top Banner"
          class="
            block
            w-full
            h-[40px]
            sm:h-[50px]
            md:h-[60px]
            object-cover
            object-center
          "
        >
      </a>
    </section>
  `;
}