var ctx1 = document.getElementById("chart1").getContext('2d');
var chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["mai",	"juin",	"juillet",	"août",	"sept",	"oct",	"nov","dec", "jan 19", "fév19", "mars 19", "avr 19"],
        datasets: [{
            label: 'Aucune aide', 
            data: [], 
            fill: false,
            borderColor: '#3f92ea', 
            backgroundColor: '#3f92ea',
            borderWidth: 3,
            pointRadius: 8
        },
            {
            label: 'Canne/béquille', 
            data: [], 
            fill: false,
            borderColor: '#481d70', 
            backgroundColor: '#481d70', 
            pointRadius: 8
        },
        {
            label: 'Déambulateur', 
            data: [], 
            fill: false,
            borderColor: '#ffb951', 
            backgroundColor: '#ffb951', 
            pointRadius: 8
        },
        {
            label: 'Un accompagnant', 
            data: [ , ,	, , , , , , , 2418.87, 12.14], 
            fill: false,
            borderColor: '#72a34f', 
            backgroundColor: '#72a34f', 
            pointRadius: 8
        },
        {
            label: 'Deux accompagnants', 
            data: [], 
            fill: false,
            borderColor: '#e8719d', 
            backgroundColor: '#e8719d', 
            pointRadius: 8
        },
        {
            label: 'N/A', 
            data: [], 
            fill: false,
            borderColor: '#2d2c2d', 
            backgroundColor: '#2d2c2d', 
            pointRadius: 8
        }]
    },
    options: {
        showLines: false,
        responsive: true, 
        maintainAspectRatio: false,
        legend: {position: 'bottom'},
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
                
            }]
        }
    }
});

var ctx2 = document.getElementById("chart2").getContext('2d');
var chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["mai",	"juin",	"juillet",	"août",	"sept",	"oct",	"nov","dec", "jan 19", "fév19", "mars 19", "avr 19"],
        datasets: [{
            label: 'main gauche', 
            data: [ , ,	, , , , , , , -1.0, 4.0], 
            fill: false,
            borderColor: '#3f92ea', 
            backgroundColor: '#3f92ea', 
            borderWidth: 3,
            pointRadius: 5
        },
                  {
            label: 'Series 2', 
            data: [ , ,	, , , , , , , 1.3, -1.0], 
            fill: false,
            borderColor: '#481d70', 
            backgroundColor: '#481d70', 
            borderWidth: 3,
            pointRadius: 5
        }]
    },
    options: {
        responsive: true, 
        maintainAspectRatio: true, 
        maintainAspectRatio: false,
        legend: {position: 'bottom'},
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }]
        }
    }
});

var ctx3 = document.getElementById("chart3").getContext('2d');
var chart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["mai",	"juin",	"juillet",	"août",	"sept",	"oct",	"nov","dec", "jan 19", "fév19", "mars 19", "avr 19"],
        datasets: [{
            data: [ , , , , ,21, ,0,0,18], 
            fill: false,
            borderColor: '#ffb951', 
            backgroundColor: '#ffb951',
            borderWidth: 3,
            pointRadius: 8
        }]
    },
    options: {
        showLines: false,
        responsive: true, 
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
                
            }]
        },
        legend: {
            display: false
        }  
    }
});

var ctx4 = document.getElementById("chart4").getContext('2d');
var chart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["mai",	"juin",	"juillet",	"août",	"sept",	"oct",	"nov","dec", "jan 19", "fév19", "mars 19", "avr 19"],
        datasets: [{
            data: [,,,,,,,1,1,0],
            fill: false,
            borderColor: '#72a34f', 
            backgroundColor: '#72a34f',
            borderWidth: 3,
            pointRadius: 5
        }]
    },
    options: {
        showLines: false,
        responsive: true, 
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
                
            }],
            display: true,
        },
        legend: {
            display: false
        }
        
    }
});
