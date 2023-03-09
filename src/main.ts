import 'style.css'
import 'assets/css/source/output/input.css'

const burgerTogglerRef = document.getElementById("burger-toggler")!;

function handleClick() {
  const ref = document.getElementById("sm-menu-ref")!;
  ref.classList.toggle("hidden");
  ref.classList.toggle("come-front-menu");
}

burgerTogglerRef!.onclick = handleClick;