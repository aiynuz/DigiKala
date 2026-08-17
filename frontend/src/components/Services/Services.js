export default function Services(data) {
  return `

<section class="
w-full
px-4
xl:px-8
mt-6
">


<div
class="
max-w-[1250px]
mx-auto

flex
items-center

justify-between

overflow-x-auto
md:overflow-visible

scrollbar-hide

gap-6
md:gap-0

"
>


${data.services
.map(
(item)=>`


<div

class="
flex
flex-col
items-center

gap-3
md:gap-5

cursor-pointer

shrink-0

"

>


${
item.type === "more"

?

`

<div

class="
w-[44px]
h-[44px]

md:w-[50px]
md:h-[50px]

rounded-full

bg-gray-100

flex
items-center
justify-center

text-gray-500

text-xl
md:text-2xl

font-bold

"

>
...
</div>

`

:

`

<img

src="${item.image}"

class="
w-[44px]
h-[44px]

md:w-[50px]
md:h-[50px]

rounded-full

object-cover

"

/>

`

}



<span

class="
text-[11px]
md:text-[13px]

text-[#424750]

whitespace-nowrap

"

>

${item.title}

</span>



</div>


`
)
.join("")}


</div>


</section>


`;
}