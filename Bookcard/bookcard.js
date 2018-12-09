function add()
{

  let val=document.querySelector('.add').value;
  const spn=document.createElement('span');
  spn.appendChild(document.createTextNode(val));
  const spa=document.createElement('span');
  spa.className='span';
  const but=document.createElement('button');
  val=val.replace(/\s/g, "");
  if (val=="") {
    but.className="default";
  }
  else {
      but.className=''+val;
  }
  but.getAttribute('onclick');
  but.setAttribute('onclick',"remove(this)");
  but.appendChild(document.createTextNode('Delete'));
  spa.appendChild(but);
  const li=document.createElement('li');
  li.appendChild(spn);
  li.appendChild(spa);
  let va=document.querySelector('.ul');
  va.appendChild(li);
  document.querySelector('.add').value='';
}
function remove(el)
{
  let nm=document.querySelector('.'+el.className);
  console.log(nm);
  let r=nm.parentElement;
  console.log(nm.parentElement);
  let k=r.parentElement;
  k.remove(r);
}
//document.querySelector('.add').addEventListener('mouseenter',onClick);
//document.querySelector('.add').addEventListener('mouseout',onClick);
//document.querySelector('.add').addEventListener('mouseleave',onClick);
document.querySelector('.add').addEventListener('mouseover',onClick);
document.querySelector('.add').addEventListener('mouseleave',onClick);
function onClick(e) {
  let val=e.type;
  let k=document.querySelector('.add');
  if(e.type=='mouseover')
  {
    k.style.border='1px solid rgb(0,0,0,0.5)'
  k.style.boxShadow='0 0 0.5px grey';
}
else {
  k.style.boxShadow='';
  k.style.border='';
}
  console.log(val);
  //if(val===13)
  //{
  //e.preventDefault();
//}
}
