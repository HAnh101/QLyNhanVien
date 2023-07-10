function createEmp(EmpData) {
    var ulEl = document.getElementById("employee-list")
    var liEl = document.createElement('li')

    liEl.id = 'emp-' + EmpData.id
    var spanEl1 = document.createElement('span')
    spanEl1.innerHTML = EmpData.first_name + EmpData.last_name
    var spanEl2 = document.createElement('span')
    spanEl2.innerHTML = EmpData.email
    var spanEl3 = document.createElement('span')
    spanEl3.innerHTML = EmpData.create_at
    var spanEl4 = document.createElement('span')
    spanEl4.innerHTML = EmpData.salary + ' $.'

    liEl.append(spanEl1,spanEl2,spanEl3,spanEl4)
    ulEl.appendChild(liEl)
}

async function getEmp() {
    try{
        var response = await axios.get('http://localhost:4001/EmpData')
        if(response.status === 200) {
            for(var _emp of response.data) {
                createEmp(_emp)
            }
        } else {
            alert('get employee failed')
        }
    } catch(error) {
        alert('get employee failed')
    }
}

getEmp()