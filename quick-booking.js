(()=>{
const dialog=document.getElementById('quick-booking');
const trigger=document.querySelector('.quick-booking-trigger');
trigger.addEventListener('click',()=>dialog.showModal());
dialog.querySelector('.quick-booking-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()});
})();

document.querySelectorAll('[data-footer-top]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});const target=document.querySelector('header a');if(target)target.focus({preventScroll:true})}));
