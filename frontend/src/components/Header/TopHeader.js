export default function TopHeader(data) {
  return `
<header class="bg-white">

<div
class="
max-w-[1920px]
mx-auto
px-4
xl:px-6
h-auto
md:h-[110px]
flex
flex-col
md:flex-row
md:items-center
gap-4
md:gap-0
"
>

    <!-- Right -->

    <div
    class="
    flex
    items-center
    flex-1
    gap-3
    md:gap-8
    w-full
    "
    >

        <!-- Logo -->

        <a
        href="/"
        class="shrink-0">

            <img
            src="${data.logo}"
            alt="logo"
            class="
            w-[120px]
            sm:w-[150px]
            md:w-[200px]
            ">

        </a>


        <!-- Search -->

        <div
        class="
        relative
        w-full
        max-w-[600px]
        "
        >

            <i
            class="
            ${data.searchIcon}
            absolute
            right-5
            top-1/2
            -translate-y-1/2
            text-gray-400
            text-base
            "
            >
            </i>


            <input

            type="text"

            placeholder="${data.searchPlaceholder}"

            class="
            w-full
            h-10
            md:h-11
            rounded-full
            bg-[#F0F0F1]
            pr-14
            pl-4
            text-sm
            outline-none
            placeholder:text-gray-400
            "

            >

        </div>


    </div>



    <!-- Left -->


<div
class="
flex
flex-row-reverse
items-center
gap-2
md:gap-4
mr-0
md:mr-auto
"
>


    <!-- Cart -->

    <button
    class="
    text-[18px]
    md:text-[22px]
    text-gray-700
    hover:text-red-500
    transition
    "
    >

        <i class="${data.cartIcon}"></i>

    </button>



    <!-- Divider -->

    <div
    class="
    w-px
    h-5
    md:h-6
    bg-gray-200
    "
    >
    </div>



    <!-- Login -->

    <button
    class="
    h-9
    md:h-10
    px-2
    md:px-4
    rounded-lg
    border
    border-gray-300
    flex
    items-center
    gap-1
    md:gap-2
    text-[10px]
    md:text-[12px]
    font-semibold
    hover:bg-gray-50
    transition
    whitespace-nowrap
    "
    >

        <i class="${data.loginIcon}"></i>

        ${data.loginText}

    </button>
    


    <!-- Bell -->

    <button
    class="
    text-[18px]
    md:text-[22px]
    text-gray-700
    hover:text-red-500
    transition
    "
    >

        <i class="${data.bellIcon}"></i>

    </button>



</div>


</div>

</header>
`;
}