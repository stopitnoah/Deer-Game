var svg = document.getElementsByTagName("svg");

var rect = document.getElementsByTagName("rect");

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '10');
text.setAttribute('y', '20');
text.setAttribute('fill', '#000');
text.textContent = 'Hello, I am a blah blah blah blah blah';

var deercount = 10; //Deer
var deerincrement = 1; //Birth Increment
var deermax = 10; //Deer Capacity

var wheatpoint = 0; //Starting Wheat Value
var wheatmax = 100; //Maximum Wheat Valu
var wheatrate = 0; //Wheat Generation
var wheatincrement = 0;

var rockpoint = 0;
var rockmax = 12.1;
var rockrate = 0;
var rockincrement = 0;

var woodpoint = 0;
var woodmax = 25;
var woodrate = 0;
var woodincrement = 0;

var seedpoint = 0; //Starting Seed Value
var seedmax = 1000; //Maximum Seed Value
var seedrate = 0; //Seed Generation

var irrigationproject = false; //Has Irrigation been built?
var irrigationfertilityboost = 1.20; //Irrigation Fertility Boost

{
    
var availablejobs = deercount - jobfarmers - jobscientists - jobminers - jobloggers;

{
var jobfarmers = 0; //Farmer Count
var employablefarmers = 0; //Farmer Jobs Available
var farmerproduction = 0; //Farmer Production Per Tick
var farmerproductionratio = 1; //Total Improvement Ratio to Farmers
var farmeroutput = 0; //Final Output of Farmers
var farmerwheatrate = 0.81; //Farmer Base Generation Rate
var farmerwheatconsumption = 0; //Farmer Total Wheat Consumption
var farmerwheatconsumptionrate = 0.08; //Farmer Base Wheat Consumption Rate
} //Job - Farmer
{
var jobminers = 0; //Miners Count
var employableminers = 0; //Miner Jobs Available
var minerproduction = 0; //Miner Production Per Tick
var minerproductionratio = 1; //Total Improvement Ratio to Forests
var mineroutput = 0; //Final Output of Miners
var minerockrate = 0.025; //Miner Base Generation Rate
var minerwheatconsumption = 0; //Farmer Total Wheat Consumption
var minerwheatconsumptionrate = 0.21; //Farmer Base Wheat Consumption Rate
} // Job - Miner

{
var jobloggers = 0; //Loggers Count
var employableloggers = 0; //Logger Jobs Available
var loggerproduction = 0; //Logger Production Per Tick
var loggerproductionratio = 1; //Total Improvement Ratio to Loggers
var loggeroutput = 0; //Final Output of Loggers
var loggerwoodrate = 0.064; //Logger Base Generation Rate
var loggerwheatconsumption = 0; //Farmer Total Wheat Consumption
var loggerwheatconsumptionrate = 0.21; //Farmer Base Wheat Consumption Rate
} //Job - Logger

} //Jobs Variables

//todo
var jobscientists = 0; //Scientists Count
var jobexplorers = 0; //Explorers Count
var jobmanagers = 0; //Managers Count

{
var forestcount = 0; //Forest Count
var forestwoodrate = 0.25; //Forest Base Generation=
var forestproduction = 0; //Total Output of all Forests
var forestproductionratio = 1; //Total Improvement Ratio to Forests
var forestoutput = 0; //Final Output of Forest Buildings
var forestloggerboost = 0.15; //Forest Logger Boost
var forestcost1 = 5; //Forest Cost (Seed)
var forestcost2 = 1; //Forest Cost (Land)
var forestpriceratio1 = 1.23; //Forest Price Ratio (Seed)
var forestpriceratio2 = 1.12; //Forest Price Ratio (Land)
} //Forest Variables
{
var grasslandcount = 0; //Number of Grasslands
var grasslandwheatrate = 0.5; //Grassland Wheat Production
var grasslandproduction = 0; //Total Output of all Grasslands
var grasslandproductionratio = 1; //Total Improvement Ratio to Grasslands
var grasslandoutput = 0; //Final Output of Grassland Buildings
var grasslandprice1 = 15; //Price of Grasslands (Seeds)
var grasslandprice3 = 1; //Price of Grasslands (Land)
var grasslandpriceratio1 = 1.5; //Grassland Price Ratio (Seeds)
var grasslandpriceratio3 = 1.1; //Grassland Price Ratio (Land)
var grasslandfarmerboost = 0.1; //Farmer Boost from Grasslands
var grasslandseedrate = 0.05; //Grassland Seed Production
} //Grassland Variables
{
var minecount = 0; //Mine Count
var minerockrate = 0.01; //Mine Base Generation
var mineproduction = 0; //Total Output of all Mines
var mineproductionratio = 1; //Total Improvement Ratio to Mines
var mineoutput = 0; //Final Output of Mine Buildings
var mineminerboost = 0.10; //Mine Miner Boost
var minecost1 = 10; //Mine Price (Wood)
var minecost2 = 1;  //Mine Price (Land)
var minepriceratio1 = 1.28; //Mine Price Ratio (Wood)
var minepriceratio2 = 1.05; //Mine Price Ratio (Land)
} //Mine Variables

var scrapyardcount = 0; //Field Count

{
    
var eldercount = 0; //Elders
var elderincrement = 1; //ElderIncrement
var eldermax = 5; //Elder Max
var elderrate = 1.25; //Elder Price Ratio
var eldercost = 5; //Elder Base Price
var eldersciprod = 0.05; //Elder Base Science Production

var unicorncount = 0; //Unicorns
var unicornincrement = 0.01;
var unicornmax = 10000000;
    
} //Elder Variables

{
    
var faithpoint = 0; //Faith Points
var faithincrement = 1;  //Faith Points per Sacrifice
var faithmax = 25; //Faith storage
var faithrate = 0; //Faith per second

var sciencepoint = 0;
var scienceincrement = 0;
var sciencemax = 20;
var sciencerate = 0;

var landcount = 50;
var landincrement = 0;
var landmax = 50;
var landrate = 0;
    
} //Abstract Resource Variables

{
var minute = "00";
var hour = 0;
var AM = true;
var day = 1;
var month = 1;
var year = 0;

var age = 0;
} //Time Variables

{
    
var aa = false;
var ab = false;
    
} //single-use booleans

{
    
var agriculture = false;
var agriculturecost = 10;
var mining = false;
var miningcost = 10;
var logging = false;
var loggingcost = 10;
var civilservice = false;
var civilservicecost = 25;
    
} //Science Variables

$(document).ready(function(){
    $("#HerdMgmt").hide();
    $("#PromoteElder").hide();
    
    $("#HerdMgmt").click(function(){
        $("#MissionControl").fadeOut(300);
        $(".sciGroupContainer").slideUp(300);
        setTimeout(300);
        $(".bldGroupContainer").toggle();
    })    
    $("#ScienceShow").click(function(){
        $(".bldGroupContainer").fadeOut(300);
        $("#MissionControl").fadeOut(300);
        setTimeout(300);
        $("#sciencePage").toggle();
    })
    
    $("#SacrificeDeer").mouseover(function(){
        $("#SacrificeDeer2").show();
    })
    $("#SacrificeDeer").mouseout(function(){
        $("#SacrificeDeer2").hide();
    })
    $("#SacrificeDeer").click(function(){    
        if(deercount > 0 && faithpoint < faithmax) {
            deercount = deercount - 1;
            faithpoint = faithpoint + faithincrement;
            console.log("Sacrificed")
            if(eldercount == 0){
                $("#PromoteDeer").show();
            }
            checkNumbers();
            updatePage();
        }
    });
    $("#PromoteDeer").mouseover(function(){
        $("#PromoteDeer2").show();
    })
    $("#PromoteDeer").mouseout(function(){
        $("#PromoteDeer2").hide();
    })
    $("#PromoteDeer").click(function(){
        if(deercount > 1 && faithpoint >= eldercost && eldercount < eldermax){
            eldercount = eldercount + elderincrement; //Get Elder
            faithpoint = faithpoint - eldercost; //Pay Faith
            deercount = deercount - 1; //Deer Converts to Elder
            $("#ElderDiv").slideDown(300); //Show Elder Resource
            $("#ScienceDiv").slideDown(300); //Show Science Resource
            $("#log").prepend("<br> You have promoted an Elder");
            eldercost = eldercost * elderrate;
            updatePage();
        }
    })
    $("#Grassland").mouseover(function(){
        $("#Grassland2").show();
    })
    $("#Grassland").mouseout(function(){
        $("#Grassland2").hide();
    })
    $("#Grassland").click(function(){
        if(grasslandprice1 <= seedpoint && grasslandprice3 <= landcount){
            grasslandcount = grasslandcount + 1;
            seedpoint = seedpoint - grasslandprice1;
            landcount = landcount - grasslandprice3;
            updatePage();
        }
    })
    $("#Forest").mouseover(function(){
        $("#Forest2").show();
    })
    $("#Forest").mouseout(function(){
        $("#Forest2").hide();
    })
    $("#Forest").click(function(){
        if(forestcost1 <= rockpoint && forestcost2 <= landcount){
            forestcount = forestcount + 1;
            rockpoint = rockpoint - forestcost1;
            landcount = landcount - forestcost2;
            updatePage();
        }
    })
    $("#Mine").mouseover(function(){
        $("#Mine2").show();
    })
    $("#Mine").mouseout(function(){
        $("#Mine2").hide();
    })
    $("#Mine").click(function(){
        if(minecost1 <= woodpoint && minecost2 <= landcount){
            minecount = minecount + 1;
            woodpoint = woodpoint - minecost1;
            landcount = landcount - minecost2;
            updatePage();
        }
    })
    $("#loggerplus").click(function(){
        if(employableloggers > 0){
            jobloggers = jobloggers + 1;
            deercount = deercount - 1;
        }
    })
    $("#loggerminus").click(function(){
        if(jobloggers > 0){
            jobloggers = jobloggers - 1;
        }
    })
    $("#minerplus").click(function(){
        if(employableminers > 0){
            jobminers = jobminers + 1;
            deercount = deercount - 1;
        }
    })
    $("#minerminus").click(function(){
        if(jobminers > 0){
            jobminers = jobminers - 1;
        }
    })
    $("#farmerplus").click(function(){
        if(employablefarmers > 0){
            jobfarmers = jobfarmers + 1;
            deercount = deercount - 1;
        }
    })
    $("#farmerminus").click(function(){
        if(jobfarmers > 0){
            jobfarmers = jobfarmers - 1;
        }
    })
    
    $("#AgricultureSci").click(function(){
        if(sciencepoint >= agriculturecost && agriculture === false){
            agriculture = true;
            sciencepoint = sciencepoint - agriculturecost;
            AgricultureRect.style.fill='#565656';
            grasslandcount = grasslandcount + 1;
            $("#Grassland").toggle();
            $("#LandDiv").toggle();
            $("#WheatDiv").toggle();
            $("#FarmerDiv").toggle();
            updatePage;
        }
    })
    $("#LoggingSci").click(function(){
        if(sciencepoint >= loggingcost && logging === false){
            logging = true;
            sciencepoint = sciencepoint - loggingcost;
            LoggingRect.style.fill='#565656';
            forestcount = forestcount + 1;
            $("#Forest").toggle();
            $("#LandDiv").toggle();
            $("#WoodDiv").toggle();
            $("#LoggerDiv").toggle();
            updatePage;
        }
    })
    $("#MiningSci").click(function(){
        if(sciencepoint >= miningcost && mining === false){
            mining = true;
            sciencepoint = sciencepoint - miningcost;
            MiningRect.style.fill='#565656';
            minecount = minecount + 1;
            $("#Mine").toggle();
            $("#LandDiv").toggle();
            $("#RockDiv").toggle();
            $("#MinerDiv").toggle();
            updatePage;
        }
    })
})

function checkNumbers(){
    if(faithpoint > faithmax){
        faithpoint = faithmax;
    }
    if(deercount > deermax){
        deercount = deermax;
    }
    if(sciencepoint > sciencemax){
        sciencepoint = sciencemax;
    }
    if(eldercount > eldermax){
        eldercount = eldermax;
    }
    if(landcount > landmax){
        landcount = landmax;
    }
    if(wheatpoint > wheatmax){
        wheatpoint = wheatmax;
    }
    if(rockpoint > rockmax){
        rockpoint = rockmax;
    }
    if(woodpoint > woodmax){
        woodpoint = woodmax;
    }
    grasslandprice1 = 10 * Math.pow(grasslandpriceratio1, grasslandcount);
    grasslandprice3 = 10 * Math.pow(grasslandpriceratio3, grasslandcount);
    forestcost1 = 10 * Math.pow(forestpriceratio2, forestcount);
    forestcost2 = 10 * Math.pow(forestpriceratio2, forestcount);
    minecost1 = 10 * Math.pow(minepriceratio1, minecount);
    minecost2 = 10 * Math.pow(minepriceratio2, minecount);
    
    forestproduction = forestcount * forestwoodrate;
    forestoutput = forestproduction * forestproductionratio;
    grasslandproduction = grasslandcount * grasslandwheatrate;
    grasslandoutput = grasslandproduction * grasslandproductionratio;
    mineproduction = minecount * minerockrate;
    mineoutput = mineproduction * mineproductionratio;
    
    employableminers = minecount - jobminers;
    minerproduction = jobminers * minerockrate;
    mineroutput = minerproduction * minerproductionratio;
    employablefarmers = grasslandcount - jobfarmers;
    farmerproduction = jobfarmers * farmerwheatrate;
    farmeroutput = farmerproduction * farmerproductionratio;
    employableloggers = forestcount - jobloggers;
    loggerproduction = jobloggers * loggerwoodrate;
    loggeroutput = loggerproduction * loggerproductionratio;
    
    minerwheatconsumption = jobminers * minerwheatconsumptionrate;
    loggerwheatconsumption = jobloggers * loggerwheatconsumptionrate;
    farmerwheatconsumption = jobfarmers * farmerwheatconsumptionrate;
    totalwheatconsumption = minerwheatconsumption + loggerwheatconsumption + farmerwheatconsumption;
    
}

function updatePage() {
    
    checkNumbers();
    
    {
        
    if(ab === false && sciencepoint > 1){
        $("#ScienceShow").fadeIn();
        ab = true;
    }
        
    if(deercount === 10){
        $("#HerdMgmt").fadeIn();
    }
        
    if(AM === false){
        $("#Meridian").text("pm");
    }
    if(AM === true){
        $("#Meridian").text("am");
    }
        
    document.getElementById("Date").innerHTML = month + "/" + day + "/" + year;
    document.getElementById("Time").innerHTML = hour + ":" + minute;
        
    } //Ticker Data Active Styling
    
    {
        
    $(".jobminers").text(jobminers.toFixed(0));
    $(".employableminers").text(employableminers.toFixed(0));
    $(".minerproduction").text(minerproduction.toFixed(2));
        
    $(".jobfarmers").text(jobfarmers.toFixed(0));
    $(".employablefarmers").text(employablefarmers.toFixed(0));
    $(".farmerproduction").text(farmerproduction.toFixed(2));
        
    $(".jobloggers").text(jobloggers.toFixed(0));
    $(".employableloggers").text(employableloggers.toFixed(0));
    $(".loggerproduction").text(loggerproduction.toFixed(2));
        
    $(".Faithpoints").text(faithpoint.toFixed(2));
    $(".FaithMax").text("/" + faithmax.toFixed(0));
    $(".FaithRate").text("(+" + faithrate.toFixed(2) + "/tick)");
    
    $(".Sciencepoints").text(sciencepoint.toFixed(2));
    $(".ScienceMax").text("/" + sciencemax.toFixed(0));
    $(".ScienceRate").text("(+" + sciencerate.toFixed(2) + "/tick)");
        
    $(".Landcount").text(landcount.toFixed(2));
    $(".Landmax").text("/" + landmax.toFixed(0));
    $(".Landrate").text("(+" + landrate.toFixed(2) + "/tick)");
        
    $(".Seedpoints").text(seedpoint.toFixed(2));
    $(".Seedmax").text("/" + seedmax.toFixed(0));
    $(".Seedsrate").text("(+" + seedrate.toFixed(2) + "/tick)");
        
    $(".Wheatpoints").text(wheatpoint.toFixed(2));
    $(".Wheatmax").text("/" + wheatmax.toFixed(0));
    $(".Wheatrate").text("(+" + wheatrate.toFixed(2) + "/tick)");
        
    $(".Rockpoints").text(rockpoint.toFixed(2));
    $(".Rockmax").text("/" + rockmax.toFixed(0));
    $(".RockRate").text("(+" + rockrate.toFixed(2) + "/tick)");
        
    $(".Woodpoints").text(woodpoint.toFixed(2));
    $(".Woodmax").text("/" + woodmax.toFixed(0));
    $(".Woodrate").text("(+" + woodrate.toFixed(2) + "/tick)");
        
    $(".Deercount").text(deercount.toFixed(0));
    $(".DeerMax").text("/" + deermax.toFixed(0));
        
    $(".Unicorncount").text(unicorncount.toFixed(2));
        
    $(".Eldercost").text(eldercost.toFixed(1));
    $(".Eldercount").text(eldercount.toFixed(0));
    $(".ElderMax").text("/" + eldermax.toFixed(0));
        
    if(deercount > 0){
        $("#DeerDiv").slideDown(300);
    } //Show Deer Resource
    if(faithpoint > 0){
        $("#FaithDiv").show();
    }
        
    } //Resources Active Styling
    
    {
        
    if(faithpoint > 5){
        $("#PromoteElder").fadeIn();
    }
        
    $("#GrasslandNum").text(grasslandcount);
    $(".Grasslandcost1").text(grasslandprice1.toFixed(2));
    $(".Grasslandcost3").text(grasslandprice3.toFixed(2));
        
    $("#ForestNum").text(forestcount);
    $(".Forestcost1").text(forestcost1.toFixed(2));
    $(".Forestcost2").text(forestcost2.toFixed(2));
        
    $("#MineNum").text(minecount);
    $(".Minecost1").text(minecost1.toFixed(2));
    $(".Minecost2").text(minecost2.toFixed(2));
        
    if(deercount >= 1){
        $("#SacrificeDeer").css("background-color", "palegoldenrod");
    }
    if(deercount > 1 && faithpoint >= eldercost && eldercount < eldermax){
        $("#PromoteDeer").css("background-color", "palegoldenrod");
    }
    if(deercount < 1 || faithpoint <= eldercost || eldercount >= eldermax){
        $("#PromoteDeer").css("background-color", "#A9A9A9");
    }
    if(deercount >= 1 && faithpoint < faithmax){
        $("#SacrificeDeer").css("background-color", "palegoldenrod");
    }
    if(deercount < 1 || faithpoint >= faithmax){
        $("#SacrificeDeer").css("background-color", "#A9A9A9");
    }
    if(seedpoint >= grasslandprice1 && landcount >= grasslandprice3){
        $("#Grassland").css("background-color", "palegoldenrod");
    }
    if(grasslandprice1 > seedpoint || grasslandprice3 > landcount){
        $("#Grassland").css("background-color", "#A9A9A9");
    }
    if(forestcost1 <= rockpoint && forestcost2 <= landcount){
        $("#Forest").css("background-color", "palegoldenrod");
    }
    if(forestcost1 > rockpoint || forestcost2 > landcount){
        $("#Forest").css("background-color", "#A9A9A9");
    }
    if(minecost1 <= woodpoint && minecost2 <= landcount){
        $("#Mine").css("background-color", "palegoldenrod");
    }
    if(minecost1 > woodpoint || minecost2 > landcount){
        $("#Mine").css("background-color", "#A9A9A9");
    }
        
    } //Herd Buttons Active Styling
    
    {
    if(sciencepoint < agriculturecost || agriculture === true){
        $("#AgricultureSci").css("background-color", "#A9A9A9");
    }
    if(sciencepoint >= agriculturecost && agriculture === false){
        $("#AgricultureSci").css("background-color", "#CAEBF2");
    }
    if(sciencepoint < miningcost || mining === true){
        $("#MiningSci").css("background-color", "#A9A9A9");
    }
    if(sciencepoint >= miningcost && mining === false){
        $("#MiningSci").css("background-color", "#CAEBF2");
    }
    if(sciencepoint < loggingcost || logging === true){
        $("#LoggingSci").css("background-color", "#A9A9A9");
    }
    if(sciencepoint >= loggingcost && logging === false){
        $("#LoggingSci").css("background-color", "#CAEBF2");
    }
    if(sciencepoint < civilservicecost || civilservice === true){
        $("#CivilServiceSci").css("background-color", "#A9A9A9");
    }
    if(sciencepoint >= civilservicecost && civilservice === false){
        $("#CivilServiceSci").css("background-color", "#CAEBF2");
    }
    } //Science Buttons Active Styling
    
}

function rollUnicorn(){};


function particles(){
    window.onload(Particles.init({selector:'.background', connectParticles:true, maxParticles:deercount, speed:0.1}));
}
setInterval(function gameTick(){
    hour = hour + 1;
    if ( hour == 13 ) {
        hour = 1;
        if( AM == false ){
            document.getElementById("Meridian").innerHTML = "am";
            day = day + 1;
            if(deercount < deermax){
                deercount = deercount + deerincrement;
            }
        }
        AM = !AM;
    }


    if ( day === 31 ) {
        day = 1;
        month = month + 1;
    }
    
    if ( month === 13 ) {
        month = 1;
        year = year + 1;
    }

    updatePage();

}, 1000); //game tick

setInterval(function gameMath(){
    
    faithrate = 0;
    faithpoint = faithpoint + faithrate;
    
    sciencerate = eldercount * eldersciprod;
    sciencepoint = sciencepoint + sciencerate;
    
    wheatrate = grasslandoutput + farmeroutput;
    wheatpoint = wheatpoint + wheatrate;
    
    woodrate = forestoutput + loggeroutput;
    woodpoint = woodpoint + woodrate;
    
    rockrate = mineoutput + mineroutput;
    rockpoint = rockpoint + rockrate;
    
    seedrate = grasslandcount * grasslandseedrate;
    seedpoint = seedpoint + seedrate;
    
    landrate = landincrement;
    landcount = landcount + landrate;
    
    updatePage();
    
}, 1000); //math

