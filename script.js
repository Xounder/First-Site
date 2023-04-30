const menu_bar = document.getElementById('menu-bar');
const elemProp = document.getElementsByClassName('elemProp');
const table = document.getElementById('table');

const data = new Date();
const d = String(data.getDate()).padStart(2, '0');
const m = String(data.getMonth() + 1).padStart(2, '0');
const y = data.getFullYear();

const tbody = document.querySelector('tbody');
tbody.addEventListener('click', removeItem);

function clickBar(){
    if (menu_bar.classList.contains('active')){
        menu_bar.classList.remove('active');
    }else{
        menu_bar.classList.add('active');
    }
}

function addElement(){
    if (elemProp[0].value != '' && elemProp[1].value != ''){
        
        const data = elemProp[2].value != '' ? adjustDate(elemProp[2].value):(d + '/' + m + '/' + y)
        tbody.innerHTML += `
            <tr>
                <td>${elemProp[0].value}</td>
                <td>${String(elemProp[1].value).substring(0, 4)}</td>
                <td>${data}</td>
                <td class="rem-td"><button class="remove normal-button">Remove</button></td>
            </tr>`;        
        elemProp[0].value = '';   
        elemProp[1].value = '';   
        elemProp[2].value = '';   
    }
}

function adjustDate(date){
    return date.substring(8, 10) + '/' + date.substring(5, 7) + '/' +  date.substring(0, 4);
}

function removeItem(e){
    if (!e.target.classList.contains('remove')){
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove();
}
