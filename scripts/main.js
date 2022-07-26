var colors = [
    {name:'Мятное утро', type:'base', color:'#86EAE9'},
    {name:'Лавандовый', type:'main', color:'#C79FEF'},
    {name:'Спокойный сине-голубой', type:'main', color:'#37C9EF'},
];

let table = document.getElementById('table');

colors.forEach(color => {
    table.appendChild(generateRow(color));
})

function generateRow(color) {
    let row = document.createElement('div');
    row.className = 'table-row';

    let cells = [];
    cells.push(generateCellWithIcon('color-square', 'color', color.color));

    for (let key in color) {
        cells.push(generateCell(color[key]));
    }

    cells.push(generateCellWithIcon('color-change-icon',  'color-change'));
    cells.push(generateCellWithIcon('color-remove-icon', 'color-remove'));

    cells.forEach(cell => row.appendChild(cell));
    
    return row;
}

function generateCell(text) {
    let cell = document.createElement('div');
    cell.className = 'table-item'
    cell.innerText = text ?? '';
    return cell;
}

function generateCellWithIcon(iconName, className, color) {
    let cell = generateCell();
    cell.className += className ? ' ' + className : '';
    let icon = document.createElement('div');
    icon.className = iconName;
    icon.style.backgroundColor = color ?? '';
    cell.appendChild(icon);
    return cell;
}