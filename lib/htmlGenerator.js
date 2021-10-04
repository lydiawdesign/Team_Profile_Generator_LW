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
}