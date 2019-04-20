var labels = ["mai",	"juin",	"juillet",	"août",	"sept",	"oct",	"nov","dec", "jan 19", "fév19", "mars 19", "avr 19"];
var ctx = document.getElementById("chart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
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
        },
        layout:{
            padding:{left:15,right:15,top:25,bottom:5}
        },
        animation: {
            onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.fillStyle = "#72a34f";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
        
                this.data.datasets.forEach(function (dataset)
                {
                    for (var i = 0; i < dataset.data.length; i++) {
                        for(var key in dataset._meta)
                        {
                            var model = dataset._meta[key].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 10);
                        }
                    }
                });
            }
        }  
    }
});

var ctx2 = document.getElementById("chart2").getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: labels,        
        datasets: [{
            label: 'Main gauche', 
            data: [ , ,	, , , , , , , -1.0, 4.0], 
            fill: false,
            borderColor: '#3f92ea', 
            backgroundColor: '#3f92ea', 
            borderWidth: 3,
            pointRadius: 5
        },
        {
            label: 'Main droite', 
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
        maintainAspectRatio: false,
        legend: {position: 'bottom'},
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }]
        },
        layout:{
            padding:{left:15,right:15,top:25,bottom:5}
        } 
    }
});

var ctx = document.getElementById("chart3").getContext('2d');
var mychart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,  
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
        },
        layout:{
            padding:{left:15,right:15,top:25,bottom:5}
        },
        animation: {
            onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.fillStyle = "#ffb951";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
        
                this.data.datasets.forEach(function (dataset)
                {
                    for (var i = 0; i < dataset.data.length; i++) {
                        for(var key in dataset._meta)
                        {
                            var model = dataset._meta[key].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 10);
                        }
                    }
                });
            }
        } 
    }
});

var ctx = document.getElementById("chart4").getContext('2d');
var mychart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,  
        datasets: [{
            data: [,,,,,,,1,1,0],
            fill: false,
            borderColor: '#72a34f', 
            backgroundColor: '#72a34f',
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
        },
        layout:{
            padding:{left:15,right:15,top:25,bottom:5}
        },
        animation: {
            onComplete: function () {
                var ctx = this.chart.ctx;
                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
                ctx.fillStyle = "#72a34f";
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
        
                this.data.datasets.forEach(function (dataset)
                {
                    for (var i = 0; i < dataset.data.length; i++) {
                        for(var key in dataset._meta)
                        {
                            var model = dataset._meta[key].data[i]._model;
                            ctx.fillText(dataset.data[i], model.x, model.y - 10);
                        }
                    }
                });
            }
        } 
    }
});
