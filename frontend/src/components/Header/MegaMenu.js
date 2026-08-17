export default function MegaMenu(data) {

const activeCategory = data.categories[0];

return `

<div

class="
absolute
top-full
right-0
hidden
group-hover:block
z-50

w-[95vw]
md:w-[1360px]

max-w-[1360px]

"

>


<div

class="
bg-white
rounded-b-xl
shadow-[0_12px_30px_rgba(0,0,0,.18)]

overflow-hidden

flex

flex-col
md:flex-row

h-[70vh]
md:h-[560px]

"

>


<!-- Sidebar -->

<div

class="
w-full
md:w-[240px]

bg-[#f8f8f8]

border-b
md:border-b-0
md:border-l

border-gray-200

overflow-y-auto

max-h-[200px]
md:max-h-none

"

>


${data.categories
.map(
(category)=>`

<div
data-category-id="${category.id}"

class="
h-12
md:h-14

mega-category

px-4

flex
items-center
justify-between

cursor-pointer

hover:bg-white
hover:text-red-500

transition

border-b
border-gray-100

"


>


<div
class="
flex
items-center
gap-2
md:gap-3
"
>


<i
class="
${category.icon}
text-[16px]
md:text-[18px]
"
>
</i>


<span

class="
text-[12px]
md:text-[14px]

font-medium
"

>

${category.title}

</span>


</div>


<i
class="
fa-solid fa-chevron-left
text-[10px]
"
>
</i>


</div>


`
)
.join("")}


</div>




<!-- Content -->


<div

id="mega-menu-content"

class="
flex-1

p-4
md:p-8

overflow-y-auto

"


>


<h3

class="
text-red-600

font-bold

text-[14px]
md:text-[16px]

mb-5
md:mb-8

"

>

${activeCategory.content.title}

</h3>



<div

class="
grid

grid-cols-1
sm:grid-cols-2
md:grid-cols-4

gap-6
md:gap-x-14
md:gap-y-10

"

>


${activeCategory.content.columns
.map(
(column)=>`

<div>


<h4

class="
font-semibold

text-[13px]
md:text-[14px]

mb-4
md:mb-5

flex
items-center
gap-2

"

>


<div

class="
w-[2px]
h-4

bg-red-500

rounded-full

"

>
</div>


${column.title}


</h4>



<div

class="
flex
flex-col
gap-3

"

>


${column.items
.map(
(item)=>`

<a

href="#"

class="
text-[12px]
md:text-[13px]

text-gray-600

hover:text-red-500

transition

"

>

${item}

</a>

`
)
.join("")}


</div>



</div>


`
)
.join("")}


</div>


</div>


</div>


</div>


`;

}