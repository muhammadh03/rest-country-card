let container  = document.createElement('div');
container.className = 'container';

let row = document.createElement('div');
row.className = 'row';

container.append(row);

let restCountry = fetch('https://restcountries.com/v3.1/all');
restCountry.then((data) => data.json()).then((data1) => foo(data1));

function foo(data1){
    console.log(data1);
    for(i = 0; i < data1.length; i++){
        row.innerHTML += `<div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body text-primary">
          <h6 class="card-title">Capital: ${data1[i].capital}</h6>
          <h6 class="card-title">Region: ${data1[i].region}</h6>
        </div>
        </div>`
        document.body.append(container)
    }
}