const menus = document.querySelectorAll('#tab-menu a');
const tabs = document.querySelectorAll('.tab-content div');

const a_clickhandler = (e) => {
  e.preventDefault();
  for (let i of tabs) {
    if(i.hasAttribute('class')) i.attributes.removeNamedItem('class');
  }
  const target = e.target;
  const targetName = target.attributes.getNamedItem('href').value.slice(1);
  const activeDiv = document.getElementById(`${targetName}`);

  // --------------------------------------
  // console.log(activeDiv);
  let el=document.createAttribute("class");  
  el.value="active";  
  activeDiv.attributes.setNamedItem(el);
}

for(let i of menus) {
  i.addEventListener('click', a_clickhandler);
}