module.export = myPage => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

</head>
<body>
    <header>
        <h1 class="h1 text-center p-3 mb-2 bg-info text-dark">My Team</h1>
        <div class="container row row-cols-1 row-cols-md-2 g-4 d-flex justify-content-around align-items-center">
        ${myTeam(teamMember)}
        </div>
        <main>

        </main>
    </header>
</body>
</html>`
}


const myTeam = (teamMember) => { 
    const html = [];

    const generateManager = manager => {
        let managerCard = `
        <div class="card h-100 text-center p-3 mb-2 bg-primary text-white col" style="width: 18rem;">
        <h2 class="card-title">${manager.name}</h2>
        <h6 class="card-subtitle mb-2 text-white">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="card-text list-group-item">ID: ${manager.id}</li>
            <li class="card-text list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="card-text list-group-item">Office #: ${manager.officeNumber}</li>
        </ul>
    </div>`
    };
    html.push(managerCard);

    const generateEngineer = engineer => {
        let engineerCard = `
        <div class="card h-100 text-center p-3 mb-2 bg-success text-white col" style="width: 18rem;">
        <h2 class="card-title">${engineer.name}</h2>
        <h6 class="card-subtitle mb-2 text-white">Engineer</h6>
        <ul class="list-group list-group-flush">
            <li class="card-text list-group-item">ID: ${engineer.id}</li>
            <li class="card-text list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="card-text list-group-item">GitHub: ${engineer.github}</li>
        </ul>
    </div>`
    };
    html.push(engineerCard);

    const generateIntern = intern => {
        let internCard = `
        <div class="card h-100 text-center p-3 mb-2 bg-dark text-white col" style="width: 18rem;">
        <h2 class="card-title">${intern.name}</h2>
        <h6 class="card-subtitle mb-2 text-white">Intern</h6>
        <ul class="list-group list-group-flush">
            <li class="card-text list-group-item">ID: ${intern.id}</li>
            <li class="card-text list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="card-text list-group-item">School: ${intern.school}</li>
        </ul>
    </div>`
    };
    html.push(internCard);

    for (let i = 0; i < myTeam.length; i++ ) {
        if (myTeam[i].getRole() === "Manager") {
            generateManager(teamMember[i]);
        };
        if (myTeam[i].getRole() === "Engineer") {
            generateEngineer(teamMember[i]);
        };
        if (page[i].getRole() === "Intern") {
            generateIntern(teamMember[i]);
        };
    };

    return html.join('');
};