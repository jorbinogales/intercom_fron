
var localhost = 'http://localhost:3000'


const enviar = (e) => {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var note1 = parseInt(document.getElementById('note1').value);
    var note2 = parseInt(document.getElementById('note2').value);
    var note3 = parseInt(document.getElementById('note3').value);
    var note4 = parseInt(document.getElementById('note4').value);

    axios.post(localhost +'/note', {
            nombre: nombre,
            note1: note2,
            note2: note1,
            note3: note3,
            note4: note4,
    })
    .then(function (response) {
        addTable(response.data.resp)
    })
    .catch(function (error) {
        console.log(error);
    });
    document.getElementById('form').reset();
}

const update = (e) => {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var note1 = parseInt(document.getElementById('note1').value);
    var note2 = parseInt(document.getElementById('note2').value);
    var note3 = parseInt(document.getElementById('note3').value);
    var note4 = parseInt(document.getElementById('note4').value);

    axios.post(localhost +'/note', {
            nombre: nombre,
            note1: note2,
            note2: note1,
            note3: note3,
            note4: note4,
    })
    .then(function (response) {
        addTable(response.data.resp)
    })
    .catch(function (error) {
        console.log(error);
    });
    document.getElementById('form').reset();
}

const get = () =>{
    axios.get(localhost +'/note')
    .then(function (response) {
        for(let data of response.data){
            addTable(data);
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

const addTable = (note) => {
    const table = document.getElementById('table');
    const element = document.createElement('tr');
    element.setAttribute('id', 'note-' + note.id);
    element.innerHTML = `
        <th scope="row">${note.id}</th>
        <td>${note.nombre}</td>
        <td>${note.note1}</td>
        <td>${note.note2}</td>
        <td>${note.note3}</td>
        <td>${note.note4}</td>
        <td><td>${note.promedio}</td></td>
        <td>
            <button class="btn btn-secundary">EDITAR</button>
        </td>
        <td>
            <button href="" class="btn btn-danger" onclick="remove(${note.id})">ELIMINAR</button>
        </td>
     `
    table.appendChild(element);
}

const remove = (id) => {
    const rw = document.getElementById(`note-${id}`).remove();
    axios.delete(localhost+'/note/'+id)
    .then(function (response) {
        addTable(response.data.resp)
    })
    .catch(function (error) {
        console.log(error);
    });
}



get();