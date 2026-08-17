export default function Banners(data) {
  return `


<section
class="
max-w-[1425px]
mx-auto
mt-8
px-2
md:px-4
"
>


<div
class="
grid
grid-cols-2
md:grid-cols-4
gap-3
md:gap-4
"
>


${data.banners
  .map(
    (item) => `

<a
href="#"
class="
block
overflow-hidden
rounded-2xl
"
>


<img

src="${import.meta.env.BASE_URL}${item.image.replace(/^\/+/, "")}"

class="
w-full
h-[160px]
md:h-[220px]
object-contain
md:object-cover
rounded-2xl
"

>


</a>


`,
  )
  .join("")}


</div>


</section>


`;
}