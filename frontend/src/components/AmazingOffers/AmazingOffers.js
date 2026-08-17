export default function AmazingOffers(data) {
  return `
<section 
class="
w-full
mt-6
md:mt-8
px-3
md:px-4
">


<div 
class="
max-w-[1400px]
mx-auto
bg-[#ef394e]
rounded-xl
md:rounded-2xl
p-2

h-[330px]
md:h-[316px]

flex
gap-2
md:gap-4

relative
overflow-hidden
"
>


<!-- RIGHT AMAZING BOX -->

<div 
class="
w-[140px]
md:w-[220px]

shrink-0

flex
flex-col
items-center
justify-center

text-white
"
>


<div class="
text-4xl
md:text-5xl
font-bold
relative
">
%

</div>


<h2 class="
text-base
md:text-xl
font-bold
mt-3
">
شگفت‌انگیزها
</h2>


<div class="
flex
gap-1
mt-4
md:mt-5
direction-ltr
">


<div class="
bg-white
text-black
rounded-md
px-2
py-1
text-xs
md:text-sm
font-bold
">
${data.timer.second}
</div>


<span>:</span>


<div class="
bg-white
text-black
rounded-md
px-2
py-1
text-xs
md:text-sm
font-bold
">
${data.timer.minute}
</div>


<span>:</span>


<div class="
bg-white
text-black
rounded-md
px-2
py-1
text-xs
md:text-sm
font-bold
">
${data.timer.hour}
</div>


</div>



<button
class="
mt-4
md:mt-5

bg-white
text-gray-700

rounded-lg

px-4
md:px-5

py-2

text-xs
md:text-sm
"
>
مشاهده همه
</button>


</div>




<div 
class="
swiper amazingSwiper

flex-1

overflow-hidden

relative
"
>


<div class="swiper-wrapper">


${data.products
  .map(
    (product) => `
<div class="swiper-slide">


<div class="
bg-white

rounded-none

h-[280px]
md:h-[300px]

p-3
md:p-4

flex
flex-col
justify-between
">


<img

src="${product.image}"

class="
w-full

h-[120px]
md:h-[160px]

object-contain
"

/>


<h3

class="
text-xs
md:text-sm

text-gray-700

line-clamp-2

"
>

${product.title}

</h3>




<div
class="
flex
items-center
justify-end
gap-2
"
>


<div
class="
flex
flex-col
items-start
gap-1
"
>



<div
class="
flex
items-center
gap-2
"
>


<span
class="
bg-[#ef394e]

text-white

rounded-full

px-2

text-xs
"
>
${product.discountPercent}%
</span>



<div
class="
text-gray-400
text-xs
line-through
"
>

${Number(product.oldPrice).toLocaleString("fa-IR")}

</div>



</div>




<div
class="
flex
items-center
gap-1
"
>


<span
class="
font-bold

text-base
md:text-lg
"
>

${Number(product.price).toLocaleString("fa-IR")}

</span>


<span
class="
text-xs
text-gray-700
"
>
تومان
</span>


</div>


</div>


</div>


</div>


</div>
`,
  )
  .join("")}



<div class="
swiper-slide
">


<div

class="
bg-white

rounded-xl

h-[280px]
md:h-[330px]

flex

flex-col

items-center

justify-center

cursor-pointer
"
>


<div

class="
w-12
h-12

rounded-full

border

border-gray-300

flex

items-center

justify-center

text-2xl

text-gray-600
"
>

›

</div>


<p
class="
mt-4

text-sm

text-gray-700
"
>
مشاهده همه
</p>


</div>


</div>



</div>

</div>





<button class="
amazing-prev

hidden
md:flex

absolute

left-[260px]

top-1/2

-translate-y-1/2

z-30

bg-white

w-10

h-10

rounded-full

shadow

items-center

justify-center

text-xl
">
‹
</button>



<button class="
amazing-next

hidden
md:flex

absolute

left-[210px]

top-1/2

-translate-y-1/2

z-30

bg-white

w-10

h-10

rounded-full

shadow

items-center

justify-center

text-xl
">
›
</button>



</div>

</section>
`;
}