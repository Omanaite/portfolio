import '../src/style.css'
import '../assets/css/source/output/input.css'

const burgerTogglerRef = document.getElementById("burger-toggler")!;
const burgerTogglerRef1 = document.getElementById("sm-menu-ref-1")!;
const burgerTogglerRef2 = document.getElementById("sm-menu-ref-2")!;
const burgerTogglerRef3 = document.getElementById("sm-menu-ref-3")!;
const burgerTogglerRef4 = document.getElementById("sm-menu-ref-4")!;

function handleClick() {
  const ref = document.getElementById("sm-menu-ref")!;
  ref.classList.toggle("hidden");
  ref.classList.toggle("come-front-menu");
}

burgerTogglerRef!.onclick = handleClick;
burgerTogglerRef1!.onclick = handleClick;
burgerTogglerRef2!.onclick = handleClick;
burgerTogglerRef3!.onclick = handleClick;
burgerTogglerRef4!.onclick = handleClick;



