document.addEventListener('DOMContentLoaded', function() {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.width = '100dvw';
  div.style.height = '100dvh';
  div.style.display = 'grid';
  div.style.zIndex = '-100';
  div.style.top = '0';
  div.style.left = '0';
  div.style.overflow = 'hidden' 
  document.body.appendChild(div);
  
  const cell_size = 20;
  const rows = Math.ceil(div.clientHeight / cell_size);
  const columns = Math.ceil(div.clientWidth / cell_size);
  const grid_area = rows * columns;
  const border_color = 'transparent';
  const intersection_color = '#4d4d4d'
  
  for (let i = 0; i < grid_area; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid_cell')
  
    cell.style.borderRight = `solid 0.05rem ${border_color}`;
    cell.style.borderBottom = `solid 0.05rem ${border_color}`;
    cell.style.position = 'relative';
    div.appendChild(cell);
  }
  
  const style = document.createElement('style');
  style.innerHTML = `
    .grid_cell::before,.grid_cell::after { content: '';position: absolute;width: 30%;height: .05rem;bottom: 0;right: -15%;background-color:${intersection_color}; }
    .grid_cell::after { rotate:90deg }`;
  document.head.appendChild(style)
  
  div.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  div.style.gridTemplateRows = `repeat(${rows}, 1fr)`;  
});