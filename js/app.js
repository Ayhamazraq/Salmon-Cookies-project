'use strict';

let locationn = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
 
// let container = document.getElementById('Sales');
 
let Seattle = 
{
    Name : 'Seattle',
    MiniNc : 23 ,
    MaxiNc : 65 ,
    AveNc : 6.3 ,
    CustomersPerHour:[],
    soldph : [],
    render : function ()
    {
    let container = document.getElementById('T');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    for(let i=0 ; i<locationn.length;i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${locationn[i]} : ${this.soldph[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<locationn.length;i++)
        { 
            this.soldph.push( this.CustomersPerHour[i] * this.AveNc);
        }
    },
    getRandom : function () 
    {
       let min = Math.ceil(this.MiniNc);
       let max = Math.floor(this.MaxiNc);
       for(let i=0;i<locationn.length;i++)
       {
            this.CustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min)); 
 
       }
    }
}
;
Seattle.getRandom(23,65);
Seattle.generate ();
Seattle.render();



let Tokyoe = 
{
    Name : 'Tokyoe',
    MiniNc : 3 ,
    MaxiNc : 24 ,
    AveNc : 1.2 ,
    CustomersPerHour:[],
    soldph : [],
    render : function ()
    {
    let container = document.getElementById('T1');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    for(let i=0 ; i<locationn.length;i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${locationn[i]} : ${this.soldph[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<locationn.length;i++)
        { 
            this.soldph.push( this.CustomersPerHour[i] * this.AveNc);
        }
    },
    getRandom : function () 
    {
       let min = Math.ceil(this.MiniNc);
       let max = Math.floor(this.MaxiNc);
       for(let i=0;i<locationn.length;i++)
       {
            this.CustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min)); 
 
       }
    }
}
;
Tokyoe.getRandom(3,24);
Tokyoe.generate ();
Tokyoe.render();


let Dubai = 
{
    Name : 'Dubai',
    MiniNc : 11 ,
    MaxiNc : 38 ,
    AveNc : 3.7 ,
    CustomersPerHour:[],
    soldph : [],
    render : function ()
    {
    let container = document.getElementById('T3');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    for(let i=0 ; i<locationn.length;i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${locationn[i]} : ${this.soldph[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<locationn.length;i++)
        { 
            this.soldph.push( this.CustomersPerHour[i] * this.AveNc);
        }
    },
    getRandom : function () 
    {
       let min = Math.ceil(this.MiniNc);
       let max = Math.floor(this.MaxiNc);
       for(let i=0;i<locationn.length;i++)
       {
            this.CustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min)); 
 
       }
    }
}
;
Dubai.getRandom(11,38);
Dubai.generate ();
Dubai.render();

let Paris = 
{
    Name : 'Paris',
    MiniNc : 20 ,
    MaxiNc : 38 ,
    AveNc : 2.3 ,
    CustomersPerHour:[],
    soldph : [],
    render : function ()
    {
    let container = document.getElementById('T4');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    for(let i=0 ; i<locationn.length;i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${locationn[i]} : ${this.soldph[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<locationn.length;i++)
        { 
            this.soldph.push( this.CustomersPerHour[i] * this.AveNc);
        }
    },
    getRandom : function () 
    {
       let min = Math.ceil(this.MiniNc);
       let max = Math.floor(this.MaxiNc);
       for(let i=0;i<locationn.length;i++)
       {
            this.CustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min)); 
 
       }
    }
}
;
Paris.getRandom(20,38);
Paris.generate ();
Paris.render();


let Lima = 
{
    Name : 'Lima',
    MiniNc : 2 ,
    MaxiNc : 16 ,
    AveNc : 4.6 ,
    CustomersPerHour:[],
    soldph : [],
    render : function ()
    {
    let container = document.getElementById('T5');
    let PEl = document.createElement('p');
    container.appendChild(PEl);
    PEl.textContent = this.Name;
    let UlEl = document.createElement('ul');
    container.appendChild(UlEl)
    for(let i=0 ; i<locationn.length;i++)
    {
        let LiEl = document.createElement('li');
        UlEl.appendChild(LiEl);
        LiEl.textContent = `${locationn[i]} : ${this.soldph[i]}`;
    }
},
    generate :function ()
    {
        for(let i=0;i<locationn.length;i++)
        { 
            this.soldph.push( this.CustomersPerHour[i] * this.AveNc);
        }
    },
    getRandom : function () 
    {
       let min = Math.ceil(this.MiniNc);
       let max = Math.floor(this.MaxiNc);
       for(let i=0;i<locationn.length;i++)
       {
            this.CustomersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min)); 
 
       }
    }
}
;
Lima.getRandom(2,16);
Lima.generate ();
Lima.render();
