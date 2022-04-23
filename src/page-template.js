// const Employee = require('./../lib/Employee');
// const Manager = require('./../lib/Manager');

let employeeArr = [];

const genCard = (employeeCard) => {
    employeeArr.push(employeeCard);
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