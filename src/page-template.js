// const Employee = require('./../lib/Employee');
// const Manager = require('./../lib/Manager');

let employeeArr = [];

const formatManager = (element) => {
    let managerEl = element;
    const { name, id, email, officeNum} = managerEl;
    let role = managerEl.getRole();
    return `<div class="col pb-3 pr-3 mb-3 bg-body rounded"><div class="card shadow" style="width: 18rem;"><div class="card-body bg-primary"><h5 class="card-title text-light">${name}/h5><p class="card-text text-light">${role}</p></div><div class=" bg-lgray py-3 px-1" style="width: 18rem;"><ul class="list-group list-group-flush border bd-list mx-auto" style="width: 15rem;"><li class="list-group-item">ID: ${id}</li><li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li><li class="list-group-item">Office Number: ${officeNum}</li></ul></div></div></div>`
//     return `<div class="col pb-3 pr-3 mb-3 bg-body rounded">
//     <div class="card shadow" style="width: 18rem;">
//         <div class="card-body bg-primary">
//           <h5 class="card-title text-light">${name}/h5>
//           <p class="card-text text-light">${role}</p>
//         </div>
//         <div class=" bg-lgray py-3 px-1" style="width: 18rem;">
//             <ul class="list-group list-group-flush border bd-list mx-auto" style="width: 15rem;">
//                 <li class="list-group-item">ID: ${id}</li>
//                 <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
//                 <li class="list-group-item">Office Number: ${officeNum}</li>
//             </ul>
//         </div>
//       </div>
// </div>`
}

const formatEngineer = (element) => {
    let engineerEl = element;
    const { name, id, email, gitName} = engineerEl;
    let role = engineerEl.getRole();
    return `<div class="col pb-3 pr-3 mb-3 bg-body rounded"><div class="card shadow" style="width: 18rem;"><div class="card-body bg-primary"><h5 class="card-title text-light">${name}/h5><p class="card-text text-light">${role}</p></div><div class=" bg-lgray py-3 px-1" style="width: 18rem;"><ul class="list-group list-group-flush border bd-list mx-auto" style="width: 15rem;"><li class="list-group-item">ID: ${id}</li><li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li><li class="list-group-item">Github: <a href="https://github.com/${gitName}">${gitName}</a></li></ul></div></div></div>`
}

const formatIntern = (element) => {
    let internEl = element;
    const { name, id, email, schoolName} = internEl;
    let role = internEl.getRole();
    return `<div class="col pb-3 pr-3 mb-3 bg-body rounded"><div class="card shadow" style="width: 18rem;"><div class="card-body bg-primary"><h5 class="card-title text-light">${name}/h5><p class="card-text text-light">${role}</p></div><div class=" bg-lgray py-3 px-1" style="width: 18rem;"><ul class="list-group list-group-flush border bd-list mx-auto" style="width: 15rem;"><li class="list-group-item">ID: ${id}</li><li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li><li class="list-group-item">School: ${schoolName}</li></ul></div></div></div>`
}

// Will need switch or if statements to check for employee type
const genCard = (employee) => {
    let currentRole = employee.getRole();
    switch (currentRole) {
        case "Manager":
            console.log("Pushing manager to array")
            employeeArr.push(formatManager(employee));
            break;
        case "Engineer":
            console.log("Pushing Engineer to array")
            employeeArr.push(formatEngineer(employee));
            break;
        case "Intern":
            console.log("Pushing Intern to array")
            employeeArr.push(formatIntern(employee));
            break;
        default:
            break;
    }
    console.log("Employee Array", employeeArr);
}

const genHTML = () => {
    const allCards = employeeArr.join('');
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Information</title>
    </head>
    
    <body>
        <header>
            <div class="d-flex p-5 align-items-center justify-content-center bg-danger">
                <h1 class="text-light">My Team</h1>
            </div>
        </header>
        
        ${allCards}
        </div>
        </section>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
</body>

</html>`
}

module.exports = {genCard, genHTML};