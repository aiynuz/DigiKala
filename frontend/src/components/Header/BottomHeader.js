import MegaMenuContainer from "./MegaMenuContainer";

export default async function BottomHeader(data) {
  return `
<nav class="bg-white border-b border-gray-200">

<div 
class="
max-w-[1920px]
mx-auto
h-auto
md:h-10
px-3
md:px-4
xl:px-8
2xl:px-10
flex
flex-col
md:flex-row
items-start
md:items-center
justify-between
gap-2
md:gap-0
"
>


    <div
    class="
    flex
    items-center
    gap-4
    md:gap-8
    w-full
    "
    >


<div
class="
relative
group
shrink-0
"
>

    <a
    href="#"
    class="
    flex
    items-center
    gap-1
    md:gap-2
    text-[12px]
    md:text-[14px]
    font-semibold
    text-gray-800
    h-10
    "
    >

        <i class="${data.categoryIcon}"></i>

        ${data.categoryTitle}

    </a>


   ${await MegaMenuContainer()}


</div>



<div
class="
flex
items-center
gap-4
md:gap-8
overflow-x-auto
md:overflow-visible
w-full
scrollbar-hide
"
>


${data.menu
.map(
(item, index) => `

<a
href="${item.link}"
class="
text-[11px]
md:text-[12px]
text-[#62666d]
hover:text-red-500
transition
whitespace-nowrap
shrink-0
"
>

<div
class="
flex
items-center
gap-1
md:gap-1.5
"
>

<i
class="
${item.icon}
text-[10px]
md:text-[11px]
text-gray-400
"
>
</i>


<span>

${item.title}

</span>


</div>

</a>


${
index === 4
?
`
<div
class="
hidden
md:block
w-px
h-4
bg-gray-200
"
></div>
`
:
""
}


`
)
.join("")}


</div>


</div>




<div
class="
flex
items-center
gap-2
h-8
px-3
rounded-full
bg-[#fff3eb]
text-[#f57f17]
text-[12px]
md:text-[13px]
font-medium
cursor-pointer
transition
hover:bg-[#ffe8d9]
shrink-0
"
>


<i 
class="
${data.locationIcon}
text-[14px]
md:text-[15px]
"
>
</i>


<span>
${data.locationText}
</span>


</div>


</div>

</nav>
`;
}