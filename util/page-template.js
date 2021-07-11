const generateHeader = function () {
    return `<h1>My Team</h1>`
}

const generateMain = function (employeeList) {

    var mainEmployees = ``;

    for (var i = 0; i < employeeList.length; i++)
    {
        mainEmployees +=
            `<div id="${i}" class="employeeCard card-group col-4">
            <div class="card text-white bg-primary mb-3 style="max-width: 18rem;">
            <div class="card-body">
            <h5 class="card-title emp-name">${employeeList[i].getName()} \n
             <h5 emp-role>${employeeList[i].getRole()}</h5></h5>
             <ul class="list-group list-group-flush">
             <li class="list-group-item id">ID: ${employeeList[i].getId()}</li>
             <li class="list-group-item email">Email: <a href="mailto:${employeeList[i].getEmail()}">${employeeList[i].getEmail()}</a></li>`;

        if (employeeList[i].getRole() === 'Manager'){
            mainEmployees += `<li class="list-group-item office-number">Office number: ${employeeList[i].getOfficeNumber()}</li>`;
        }
        else if (employeeList[i].getRole() === 'Engineer'){
            mainEmployees += `<li class="list-group-item github">GitHub profile: <a href="https://github.com/${employeeList[i].getGitHub()}">${employeeList[i].getGitHub()}</a></li>`;
        }
        else if (employeeList[i].getRole() === 'Intern'){
            mainEmployees += `<li class="list-group-item school">School: ${employeeList[i].getSchool()}</li>`;
        };

        mainEmployees += `
            </ul>
            </div>
            </div>
            </div>
            `;
    }

    return mainEmployees;
}

const generateFooter = function (officeNumber) {
    return `<p>Employees of Office: ${officeNumber}</p>`
}

const generateHtmlDoc = function (employeeList) {

   return `<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TeamBuildify</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
  </head>

  <body>
    <header>
      ${generateHeader()}
    </header>
    <main>
      <div class="container">
      <div class="row justify-content-around">
        ${generateMain(employeeList)}
        
      </div>
      </div>
    </main>
    <footer>
      ${generateFooter(employeeList[0].getOfficeNumber())}
    </footer>
  </body>
  </html>
  `;
}

module.exports = {generateHtmlDoc};