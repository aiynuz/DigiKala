export default function FooterAbout(data) {

  return `

    <section
      class="
        w-full
        border-t
        border-gray-200
        pt-7
        pb-7
        text-right
      "
    >

      <p
        class="
          text-xs
          leading-7
          text-gray-400
        "
      >
        ${data.aboutDescription}
      </p>


      <button
        class="
          mt-4
          text-sm
          text-blue-600
          flex
          items-center
          gap-1
          mr-0
        "
      >
        مشاهده بیشتر
        <span>›</span>
      </button>

    </section>

  `;

}