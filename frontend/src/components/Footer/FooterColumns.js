export default function FooterColumns(data){

return `

<section
class="
contents
"
>


${
data.columns.map(column=>`

<div
class="
text-right
"
>


<h3
class="
font-bold
text-gray-800
mb-4
text-sm
md:text-base
"
>
${column.title}
</h3>


<ul
class="
space-y-3
"
>


${
column.items.map(item=>`

<li>

<a
href="#"
class="
text-xs
md:text-sm
text-gray-500
leading-6
"
>
${item}
</a>

</li>

`).join("")
}


</ul>


</div>


`).join("")
}



</section>


`;

}