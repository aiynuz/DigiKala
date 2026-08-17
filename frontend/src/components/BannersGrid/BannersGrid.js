export default function BannersGrid(data) {
  return `

<div
class="
w-full
max-w-[1410px]
grid
grid-cols-2
md:grid-cols-3
xl:grid-cols-4
gap-3
mt-6
mx-auto
px-3
md:px-4
"
>

${data
  .map(
    (banner) => `

<a
href="#"
class="
overflow-hidden
rounded-2xl
block
"
>

<img
src="${banner.image}"
class="
w-full
h-[160px]
md:h-[200px]
xl:h-[220px]
object-contain
md:object-cover
rounded-2xl
"
/>

</a>


`,
  )
  .join("")}

</div>

`;
}