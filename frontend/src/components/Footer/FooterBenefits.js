export default function FooterBenefits(data) {

  return `

<section
class="
grid
grid-cols-5
items-center
border-b
border-gray-200
py-8
"
>

${
  data.benefits
    .map(
      (item) => `

<div
class="
flex
flex-col
items-center
justify-center
gap-3
"
>

<img

src="${item.image}"

class="
w-14
h-14
object-contain
"

/>


<p

class="
text-sm
text-gray-700
text-center
"

>

${item.title}

</p>


</div>

`
    )
    .join("")
}


</section>


`;

}