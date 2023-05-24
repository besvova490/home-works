function renderHeader() {
  const header = document.createElement("header");
  header.classList.add("lsn-header_gray");
  header.innerText = "renderHeader ";
  
  document.body.appendChild(header);
}


export default renderHeader;
