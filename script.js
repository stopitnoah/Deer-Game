var deercount = 10; //Deer
var deerincrement = 1; //Birth Increment
var deermax = 10; //Deer Capacity

var grasslandcount = 0; //Number of Grasslands
var grasslandprice1 = 10; //Price of Grasslands (Seeds)
var grasslandprice3 = 1; //Price of Grasslands (Land)
var grasslandpriceratio1 = 1.5; //Grassland Price Ratio (Seeds)
var grasslandpriceratio3 = 1.1; //Grassland Price Ratio (Land)
var grasslandfarmerboost = 0.1; //Farmer Boost from Grasslands
var grasslandwheatrate = 0.1; //Grassland Wheat Production
var grasslandseedrate = 0.05; //Grassland Seed Production

var wheatpoint = 0; //Starting Wheat Value
var wheatmax = 100; //Maximum Wheat Valu
var wheatrate = 0; //Wheat Generation
var wheatincrement = 0;

var rockpoint = 0;
var rockmax = 0;
var rockrate = 0;
var rockincrement = 0;

var woodpoint = 0;
var woodmax = 0;
var woodrate = 0;
var woodincrement = 0;

var seedpoint = 0; //Starting Seed Value
var seedmax = 1000; //Maximum Seed Value
var seedrate = 0; //Seed Generation

var irrigationproject = false; //Has Irrigation been built?
var irrigationfertilityboost = 1.20; //Irrigation Fertility Boost

var employabledeer = deercount - jobfarmers - jobscientists - jobminers - jobloggers;
var jobfarmers = 0; //Farmer Count
var farmersrate = 0.01 //Farmer Base Generation Rate

var jobminers = 0; //Miners Count
var minersmineralrate = 0.25; //Miner Base Generation Rate

var jobloggers = 0; //Loggers Count
var loggerswoodrate = 0.10; //Logger Base Generation Rate

var jobscientists = 0; //Scientists Count
var scientistssciencerate = 0.15; //Scientists Base Generation

{
var minecount = 0; //Mine Count
var minemineralrate = 0.02; //Mine Base Generation
var mineminerboost = 0.10; //Mine Miner Boost
var minecost1 = 10; //Mine Price (Wood)
var minecost2 = 1;  //Mine Price (Land)
var minepriceratio1 = 1.28; //Mine Price Ratio (Wood)
var minepriceratio2 = 1.05; //Mine Price Ratio (Land)
} //Mine Variables

var forestcount = 0; //Forest Count
var forestwoodrate = 0.05; //Forest Base Generation
var forestloggerboost = 0.15; //Forest Logger Boost
var forestcost1 = 10; //Forest Cost (Seed)
var forestcost2 = 1; //Forest Cost (Land)
var forestpriceratio1 = 1.23; //Forest Price Ratio (Seed)
var forestpriceratio2 = 1.12; //Forest Price Ratio (Land)

var fieldcount = 0; //Field Count


var eldercount = 0; //Elders
var elderincrement = 1; //ElderIncrement
var eldermax = 5; //Elder Max
var elderrate = 1.25; //Elder Price Ratio
var eldercost = 5; //Elder Base Price
var eldersciprod = 0.05; //Elder Base Science Production

var unicorncount = 0; //Unicorns
var unicornincrement = 0.01;
var unicornmax = 10000000;


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

var minute = "00";
var hour = 0;
var AM = true;
var day = 1;
var month = 1;
var year = 0;

var age = 0;

var aa = false;
var ab = false;

var agriculture = false;
var agriculturecost = 10;
var mining = false;
var miningcost = 10;
var logging = false;
var loggingcost = 10;
var civilservice = false;
var civilservicecost = 25;

var cardID = [0, "Deer", "Grazing", "The Great White North", deercount]; // cardnum, species, verb, location, count

$(document).ready(function(){
    $("#HerdMgmt").hide();
    $("#PromoteElder").fadeOut();
    
    $("#HerdMgmt").click(function(){
        $("#MissionControl").fadeOut(300);
        $(".sciGroupContainer").slideUp(300);
        setTimeout(300);
        $(".bldGroupContainer").slideDown(300);
    })    
    $("#ScienceShow").click(function(){
        $(".bldGroupContainer").fadeOut(300);
        $("#MissionControl").fadeOut(300);
        setTimeout(300);
        $(".sciGroupContainer").slideDown(300);
    })
    
    $("#SacrificeDeer").mouseover(function(){
        $("#SacrificeDeer2").show();
    })
    $("#SacrificeDeer").mouseout(function(){
        $("#SacrificeDeer2").hide();
    })
    $("#SacrificeDeer").click(function(){    
        if(cardID[0] == 0 && deercount > 0) {
            deercount = deercount - 1;
            faithpoint = faithpoint + faithincrement;
            console.log("Sacrificed")
            checkNumbers();
            if(faithpoint > 4){
                $("#PromoteDeer").fadeIn();
            }
            $("#FaithDiv").slideDown(300);
            if(deercount < 1){
                $("#SacrificeDeer").css("background-color", "#A9A9A9");
            }
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
        if(faithpoint >= eldercost && eldercount < eldermax){
            eldercount = eldercount + elderincrement; //Get Elder
            faithpoint = faithpoint - eldercost; //Pay Faith
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
    $("#Forest").mouseover(function(){
        $("#Forest2").show();
    }).mouseout(function(){
        $("#Forest2").hide();
    })
    $("#Mine").mouseover(function(){
        $("#Mine2").show();
    })
    $("#Mine").mouseout(function(){
        $("#Mine2").hide();
    })
    
    $("#AgricultureSci").click(function(){
        if(sciencepoint >= agriculturecost){
            agriculture = true;
            sciencepoint = sciencepoint - agriculturecost;
            $("#AgricultureSci").fadeOut();
            grasslandcount = grasslandcount + 1;
            $("#Grassland").fadeIn();
            $("#LandDiv").fadeIn(300);
            $("#WheatDiv").fadeIn(300);
            updatePage;
        }
    })
    $("#LoggingSci").click(function(){
        if(sciencepoint >= loggingcost){
            logging = true;
            sciencepoint = sciencepoint - loggingcost;
            $("#LoggingSci").fadeOut();
            forestcount = forestcount + 1;
            $("#Forest").fadeIn();
            $("#LandDiv").fadeIn(300);
            $("#WoodDiv").fadeIn(300);
            updatePage;
        }
    })
    $("#MiningSci").click(function(){
        if(sciencepoint >= miningcost){
            mining = true;
            sciencepoint = sciencepoint - miningcost;
            $("#MiningSci").fadeOut();
            minecount = minecount + 1;
            $("#Mine").fadeIn();
            $("#LandDiv").fadeIn(300);
            $("#RockDiv").fadeIn(300);
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
}

function updatePage() {
    
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
    if(eldercost <= faithpoint){
        $("#PromoteDeer").css("background-color", "palegoldenrod");
    }
    if(eldercost > faithpoint){
        $("#PromoteDeer").css("background-color", "#A9A9A9");
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
    
    {
        $(".bldGroupContainer").css("z-index","3");
    } //Z Indexing

    checkNumbers();
}

function rollUnicorn(){};

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
    
    sciencerate = (eldercount * eldersciprod);
    sciencepoint = sciencepoint + sciencerate;
    
    wheatrate = (grasslandcount * grasslandwheatrate);
    wheatpoint = wheatpoint + wheatrate;
    
    seedrate = grasslandcount * grasslandseedrate;
    seedpoint = seedpoint + seedrate;
    
    landrate = landincrement;
    landcount = landcount + landrate;
    
    window.onload(Particles.init({selector:'.background', connectParticles: true,maxParticles:deercount, speed:0.1}));
    
    updatePage();
    
}, 1000); //math

