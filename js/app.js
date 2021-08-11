'use strict';
let Hours=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

let locationDetailsArray=[];
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);


  function LocationDetails (locationName,minCustomersHourly,maxCustomersHourly,avgPerCustHourly){
  this.locationName=locationName;
  this.minCustomersHourly=minCustomersHourly;
  this.maxCustomersHourly=maxCustomersHourly;
  this.avgPerCustHourly=avgPerCustHourly;
  this.cookiesSalesHourly=[];
  this.randomCustomersHourly=[];
  this.totalSalesDaily=0;
  locationDetailsArray.push(this)  
}
LocationDetails.prototype.calculateRandomCustomersHourly= function(){
   let min = Math.ceil(this.minCustomersHourly);
  let  max = Math.floor(this.maxCustomersHourly);
    
    for (let i=0; i<Hours.length; i++){
        
        this.randomCustomersHourly.push(Math.floor(Math.random() * (max - min + 1) + min))  
    }
    
  };


  LocationDetails.prototype.calculateCookiesSalesHourly= function(){
    for (let i=0; i<Hours.length; i++){
      let hourlySales= Math.ceil(this.randomCustomersHourly[i]*this.avgPerCustHourly);
      this.cookiesSalesHourly.push(hourlySales);
      this.totalSalesDaily += hourlySales;
    }
  };
     LocationDetails.prototype.render = function () {
         let trEl= document.createElement('tr');
         tableEl.appendChild(trEl)
         let tdEl1 = document.createElement('td');
         trEl.appendChild(tdEl1);
         tdEl1.textContent = `${this.locationName}`;
    for (let i=0;i<Hours.length;i++)
    {  let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = `${this.cookiesSalesHourly[i]}`;
     }
    let tdEl5 = document.createElement('td');
     trEl.appendChild(tdEl5);
     tdEl5.textContent = this.totalSalesDaily; 
}
     

   
    
    function createTableHeader() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
     
        let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent = '';
     
        for (let x = 0; x <= Hours.length-1; x++) {
            let thEl1 = document.createElement('th');
            trEl.appendChild(thEl1);
            thEl1.textContent = `${Hours[x]}`;
     
        }
        //  for (let i=0; i<place.length;i++)
        let thEl10 = document.createElement('th');
        trEl.appendChild(thEl10);
        thEl10.textContent = 'Daily Location Total';
    }
      createTableHeader();

      let addshopform = document.getElementById('addshopform');
      addshopform.addEventListener('submit',addShop);
function addShop(event)
{
  event.preventDefault();
   let shopLocation = event.target.name.value;
   let minCustomersHourly = event.target.minCustomersHourly.value;
   let maxCustomersHourly = event.target.maxCustomersHourly.value;
   let avgPerCustHourly   = event.target.avgPerCustHourly.value;
   let newShop = new LocationDetails (shopLocation,minCustomersHourly,maxCustomersHourly,avgPerCustHourly);
   addshopform.reset();
   var roww = tableEl.rows.length;
   tableEl.deleteRow(roww - 1)
   newShop.calculateRandomCustomersHourly();
    newShop.calculateCookiesSalesHourly();
    newShop.render();
    createTableFooter();
}


     
    function createTableFooter(){
        
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl)
        let thEl20 = document.createElement('td');
        trEl.appendChild(thEl20);
        thEl20.textContent = "total";
     
        let TotalofT =0;
        
        for(let i=0 ; i<Hours.length;i++){
            let totalSalesDaily=0;
             
            for(let j=0 ; j<locationDetailsArray.length;j++){
                totalSalesDaily +=locationDetailsArray[j].cookiesSalesHourly[i];
                TotalofT += locationDetailsArray[j].cookiesSalesHourly[i];
     
        }
         
    let thEl10 = document.createElement('td');
        trEl.appendChild(thEl10);
        thEl10.textContent = totalSalesDaily;
    }
    let thEl70 = document.createElement('td');
        trEl.appendChild(thEl70);
        thEl70.textContent = TotalofT;
    };


    let Seattle= new LocationDetails ('seatlle', 23, 65,6.3)
    let Tokyo=   new LocationDetails ('Tokyo', 3, 24,1.2)
    let Dubai=   new LocationDetails ('Dubai', 11, 38,3.7)
    let Paris=   new LocationDetails ('Paris', 20, 38,2.3)
    let Lima=    new LocationDetails ('Lima', 2, 16,4.6)
    Seattle.calculateRandomCustomersHourly();
    Seattle.calculateCookiesSalesHourly();
    Seattle.render()

    Tokyo.calculateRandomCustomersHourly();
    Tokyo.calculateCookiesSalesHourly();
    Tokyo.render()

    Dubai.calculateRandomCustomersHourly();
    Dubai.calculateCookiesSalesHourly();
    Dubai.render()

    Paris.calculateRandomCustomersHourly();
    Paris.calculateCookiesSalesHourly();
    Paris.render()

    Lima.calculateRandomCustomersHourly();
    Lima.calculateCookiesSalesHourly();
    Lima.render()
    createTableFooter();

 