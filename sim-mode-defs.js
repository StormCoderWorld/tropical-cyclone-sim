// ---- Simulation Modes ---- //

const SIMULATION_MODES = ['Normal','Hyper','Wild','Megablobs','Experimental','Northern Hemisphere','Southern Hemisphere', 'Western Hemisphere', 'Eastern Hemisphere', 'North Atlantic','South Atlantic','Mediterranean','Eastern Pacific','Central Pacific','Western Pacific', 'North Pacific','South Pacific', 'North Indian Ocean', 'South Indian Ocean','Australia Region', '2C Warmed Earth', 'PreIndustrial','Mini Ice Age', '4C Warmed Earth','Snowball Earth', 'Drought','Deluge' ]; // Labels for sim mode selector UI
const SIM_MODE_NORMAL = 0; // Base simulation mode
const SIM_MODE_HYPER = 1; // Much more active seasonal simulation 
const SIM_MODE_WILD = 2; // Highly Random fluctuations
const SIM_MODE_MEGABLOBS = 3; // Large areas of extremes
const SIM_MODE_EXPERIMENTAL = 4; // Experimental Simulation
const SIM_MODE_NorthernHemisphere = 5; // The average conditions for any Northern Hemisphere basin
const SIM_MODE_SouthernHemisphere = 6; // The average conditions for any Southern Hemisphere basin
const SIM_MODE_WesternHemisphere = 7; // The average conditions for any Western Hemisphere basin
const SIM_MODE_EasternHemisphere = 8; // The average conditions for any Eastern Hemisphere basin
const SIM_MODE_NorthAtlantic = 9; // North Atlantic Climate
const SIM_MODE_SouthAtlantic = 10; // South Atlantic Climate
const SIM_MODE_Mediterranean = 11; // Mediterranean Climate
const SIM_MODE_EasternPacific = 12; // Eastern Pacific Climate
const SIM_MODE_CentralPacific = 13; // Central Pacific Climate
const SIM_MODE_WesternPacific = 14; // Western Pacific Climate 
const SIM_MODE_NorthPacific = 15; // North Pacific Climate for all basins. For the Entire North Pacific Map
const SIM_MODE_SouthPacific = 16; // South Pacific Climate, for the South Pacific map and it incorporates the entire ocean.
const SIM_MODE_NorthIndianOcean = 17; // North Indian Ocean Climate
const SIM_MODE_SouthIndianOcean = 18; // South Indian Ocean Climate
const SIM_MODE_Australian = 19; // Australian region climate defined as the normal basin for Australia
const SIM_MODE_WarmerEarth2C = 20; // 2C warmer earth than pre industrial period
const SIM_MODE_PreIndustrial = 21; // Earth Climate before Industrialization in the 1800s. 
const SIM_MODE_MiniIceAge = 22; // Puts earth into a mini ice age, poles are much colder, tropics only slightly
const SIM_MODE_Earth4C = 23; // Earth 4C warmer than pre industrial period
const SIM_MODE_SnowballEarth = 24; // All of earth wrapped in Ice
const SIM_MODE_Drought = 25; // Greatly reduced global moisure 
const SIM_MODE_Deluge = 26; // Greatly increased global moisture










// ---- Active Attributes ---- //

// Active attributes are data of ActiveSystem not inherited from StormData; used for simulation of active storm systems
// Here defines the names of these attributes for a given simulation mode

const ACTIVE_ATTRIBS = {};

ACTIVE_ATTRIBS.defaults = [
    'organization',
    'lowerWarmCore',
    'upperWarmCore',
    'depth'
];

ACTIVE_ATTRIBS[SIM_MODE_EXPERIMENTAL] = [
    'organization',
    'lowerWarmCore',
    'upperWarmCore',
    'depth',
    'kaboom'
];

// ---- Spawn Rules ---- //

const SPAWN_RULES = {};

SPAWN_RULES.defaults = {};
SPAWN_RULES[SIM_MODE_NORMAL] = {};
SPAWN_RULES[SIM_MODE_HYPER] = {};
SPAWN_RULES[SIM_MODE_WILD] = {};
SPAWN_RULES[SIM_MODE_MEGABLOBS] = {};
SPAWN_RULES[SIM_MODE_EXPERIMENTAL] = {};
SPAWN_RULES[SIM_MODE_NorthernHemisphere] = {};
SPAWN_RULES[SIM_MODE_SouthernHemisphere] = {};
SPAWN_RULES[SIM_MODE_WesternHemisphere] = {};
SPAWN_RULES[SIM_MODE_EasternHemisphere] = {};
SPAWN_RULES[SIM_MODE_NorthAtlantic] = {};
SPAWN_RULES[SIM_MODE_SouthAtlantic] = {};
SPAWN_RULES[SIM_MODE_Mediterranean] = {};
SPAWN_RULES[SIM_MODE_EasternPacific] = {};
SPAWN_RULES[SIM_MODE_CentralPacific] = {};
SPAWN_RULES[SIM_MODE_WesternPacific] = {};
SPAWN_RULES[SIM_MODE_NorthPacific] = {};
SPAWN_RULES[SIM_MODE_SouthPacific] = {};
SPAWN_RULES[SIM_MODE_NorthIndianOcean] = {};
SPAWN_RULES[SIM_MODE_SouthIndianOcean] = {};
SPAWN_RULES[SIM_MODE_Australian] = {};
SPAWN_RULES[SIM_MODE_WarmerEarth2C] = {};
SPAWN_RULES[SIM_MODE_PreIndustrial] = {};
SPAWN_RULES[SIM_MODE_MiniIceAge] = {};
SPAWN_RULES[SIM_MODE_Earth4C] = {};
SPAWN_RULES[SIM_MODE_SnowballEarth] = {};
SPAWN_RULES[SIM_MODE_Drought] = {};
SPAWN_RULES[SIM_MODE_Deluge] = {};

// -- Defaults -- //

SPAWN_RULES.defaults.archetypes = {
    'tw': {
        x: ()=>random(0,WIDTH-1),
        y: (b)=>b.hemY(random(HEIGHT*0.665,HEIGHT*0.915)), // this is the latitudes at which storms spawn, so for example the current latitude max is 70 so tropical waves currently form between 25 - 8 of the equator.
        pressure: [1000,1005,1010],
        windSpeed: [ 20, 30, 35],
        type: TROPWAVE,
        organization: [0.5,1.0,1.5,2.0,2.5],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
    'ex': {
        x: ()=>random(0,WIDTH-1),
        y: (b,x)=>b.hemY(b.env.get("jetstream",x,0,b.tick)+random(-75,75)),
        pressure: [980, 995, 1005, 1010],
        windSpeed: [10, 20, 30, 40],
        type: EXTROP,
        organization: 0,
        lowerWarmCore: 0,
        upperWarmCore: 0,
        depth: 1
    },
    'l': {
        inherit: 'tw',
        pressure: 1007,
        windSpeed: 20,
        organization: 0.2
    },
    'x': {
        inherit: 'ex',
        pressure: 1005,
        windSpeed: 25
    },
    'tc': {
        pressure: 1005,
        windSpeed: 30,
        type: TROP,
        organization: 1,
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    },
    'stc': {
        inherit: 'tc',
        type: SUBTROP,
        lowerWarmCore: 0.4,
        upperWarmCore: 0.1
    },
    'd': {
        inherit: 'tc'
    },
    'D': {
        inherit: 'stc'
    },
    's': {
        inherit: 'tc',
        pressure: 1000,
        windSpeed: 40
    },
    'S': {
        inherit: 'stc',
        pressure: 1000,
        windSpeed: 40
    },
    '1': {
        inherit: 'tc',
        pressure: 990,
        windSpeed: 75
    },
    '2': {
        inherit: 'tc',
        pressure: 980,
        windSpeed: 90
    },
    '3': {
        inherit: 'tc',
        pressure: 960,
        windSpeed: 105
    },
    '4': {
        inherit: 'tc',
        pressure: 945,
        windSpeed: 130
    },
    '5': {
        inherit: 'tc',
        pressure: 925,
        windSpeed: 150
    },
    '6': {
        inherit: 'tc',
        pressure: 910,
        windSpeed: 170
    },
    '7': {
        inherit: 'tc',
        pressure: 890,
        windSpeed: 210
    },
    '8': {
        inherit: 'tc',
        pressure: 800,
        windSpeed: 270
    },
    '9': {
        inherit: 'tc',
        pressure: 765,
        windSpeed: 330
    },
    '0': {
        inherit: 'tc',
        pressure: 730,
        windSpeed: 400
    },
    'y': {
        inherit: 'tc',
        pressure: 690,
        windSpeed: 440
    }
};

SPAWN_RULES.defaults.doSpawn = function(b){
    // tropical waves
    if(random()<0.010*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.017-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

// -- Normal Mode -- //

SPAWN_RULES[SIM_MODE_NORMAL].doSpawn = SPAWN_RULES.defaults.doSpawn;

// -- Hyper Mode -- //

SPAWN_RULES[SIM_MODE_HYPER].doSpawn = function(b){
    if(random()<(0.012*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.03-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

// -- Wild Mode -- //

SPAWN_RULES[SIM_MODE_WILD].archetypes = {
    'tw': {
        x: ()=>random(0,WIDTH-1),
        y: (b)=>b.hemY(random(HEIGHT*0.2,HEIGHT*0.9)),
        pressure: [1000, 1010],
        windSpeed: [15, 35],
        type: TROPWAVE,
        organization: [0,0.6],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0
    }
};

SPAWN_RULES[SIM_MODE_WILD].doSpawn = function(b){
    if(random()<0.015) b.spawnArchetype('tw');
    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

// -- Megablobs Mode -- //

SPAWN_RULES[SIM_MODE_MEGABLOBS].doSpawn = function(b){
    if(random()<(0.013*sq((seasonalSine(b.tick)+1)/2)+0.002)) b.spawnArchetype('tw');

    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};

// -- Experimental Mode -- //

SPAWN_RULES[SIM_MODE_EXPERIMENTAL].archetypes = {
    'tw': {
        x: ()=>random(0,WIDTH-1),
        y: (b)=>b.hemY(random(HEIGHT*0.7,HEIGHT*0.9)),
        pressure: [998, 1010],
        windSpeed: [15, 30],
        type: TROPWAVE,
        organization: [0,0.3],
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0,
        kaboom: 0
    },
    'ex': {
        x: ()=>random(0,WIDTH-1),
        y: (b,x)=>b.hemY(b.env.get("jetstream",x,0,b.tick)+random(-75,75)),
        pressure: [1000, 1020],
        windSpeed: [15, 35],
        type: EXTROP,
        organization: 0,
        lowerWarmCore: 0,
        upperWarmCore: 0,
        depth: 1,
        kaboom: 0
    },
    'tc': {
        pressure: 1005,
        windSpeed: 25,
        type: TROP,
        organization: 1,
        lowerWarmCore: 1,
        upperWarmCore: 1,
        depth: 0,
        kaboom: 0.2
    },
    'l': {
        inherit: 'tw',
        pressure: 1008,
        windSpeed: 15,
        organization: 0.2,
        kaboom: 0.2
    },
    'x': {
        inherit: 'ex',
        pressure: 1005,
        windSpeed: 15,
        kaboom: 0.2
    }
};
SPAWN_RULES[SIM_MODE_NorthAtlantic].doSpawn = function(b){
    // tropical waves
    if(random()<0.0087*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.02-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_SouthAtlantic].doSpawn = function(b){
    // tropical waves
    if(random()<0.0005*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.035-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_Mediterranean].doSpawn = function(b){
    // tropical waves
    if(random()<0.0015*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.02-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_EasternPacific].doSpawn = function(b){
    // tropical waves
    if(random()<0.0092*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.02-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_CentralPacific].doSpawn = function(b){
    // tropical waves
    if(random()<0.0025*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.019-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_WesternPacific].doSpawn = function(b){
    // tropical waves
    if(random()<0.013*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.016-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_NorthPacific].doSpawn = function(b){
    // tropical waves
    if(random()<0.0195*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.026-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_SouthPacific].doSpawn = function(b){
    // tropical waves
    if(random()<0.0125*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.032-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_NorthIndianOcean].doSpawn = function(b){
    // tropical waves
    if(random()<0.0045*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.01-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_SouthIndianOcean].doSpawn = function(b){
    // tropical waves
    if(random()<0.0085*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.02-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};
SPAWN_RULES[SIM_MODE_Australian].doSpawn = function(b){
    // tropical waves
    if(random()<0.007*sq((seasonalSine(b.tick)+1)/2)) b.spawnArchetype('tw');

    // extratropical cyclones
    if(random()<0.025-0.002*seasonalSine(b.tick)) b.spawnArchetype('ex');
};


SPAWN_RULES[SIM_MODE_EXPERIMENTAL].doSpawn = SPAWN_RULES[SIM_MODE_HYPER].doSpawn;
SPAWN_RULES[SIM_MODE_NorthernHemisphere].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_SouthernHemisphere].doSpawn =SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_WesternHemisphere].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_EasternHemisphere].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_WarmerEarth2C].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_PreIndustrial].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_MiniIceAge].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_Earth4C].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_SnowballEarth].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_Drought].doSpawn = SPAWN_RULES.defaults.doSpawn;
SPAWN_RULES[SIM_MODE_Deluge].doSpawn = SPAWN_RULES.defaults.doSpawn;
// ---- Definitions of Environmental Fields ---- //

const ENV_DEFS = {};

ENV_DEFS.defaults = {}; // Env field attributes that are the same across multiple simulation modes
ENV_DEFS[SIM_MODE_NORMAL] = {}; // Register env fields as part of "Normal" simulation mode and define unique attributes
ENV_DEFS[SIM_MODE_HYPER] = {}; // Same for "Hyper" simulation mode
ENV_DEFS[SIM_MODE_WILD] = {};  // "Wild" simulation mode
ENV_DEFS[SIM_MODE_MEGABLOBS] = {}; // "Megablobs" simulation mode
ENV_DEFS[SIM_MODE_EXPERIMENTAL] = {}; // "Experimental" simulation mode
ENV_DEFS[SIM_MODE_NorthernHemisphere] = {}; // Every simulation below here was explained in a previous line comments above, they each have their own unique climates with ones named after real places being realistic to that.
ENV_DEFS[SIM_MODE_SouthernHemisphere] = {};
ENV_DEFS[SIM_MODE_WesternHemisphere] = {};
ENV_DEFS[SIM_MODE_EasternHemisphere] = {};
ENV_DEFS[SIM_MODE_NorthAtlantic] = {};
ENV_DEFS[SIM_MODE_SouthAtlantic] = {};
ENV_DEFS[SIM_MODE_Mediterranean] = {};
ENV_DEFS[SIM_MODE_EasternPacific] = {};
ENV_DEFS[SIM_MODE_CentralPacific] = {};
ENV_DEFS[SIM_MODE_WesternPacific] = {};
ENV_DEFS[SIM_MODE_NorthPacific] = {};
ENV_DEFS[SIM_MODE_SouthPacific] = {};
ENV_DEFS[SIM_MODE_NorthIndianOcean] = {};
ENV_DEFS[SIM_MODE_SouthIndianOcean] = {};
ENV_DEFS[SIM_MODE_Australian] = {};
ENV_DEFS[SIM_MODE_WarmerEarth2C] = {};
ENV_DEFS[SIM_MODE_PreIndustrial] = {};
ENV_DEFS[SIM_MODE_MiniIceAge] = {};
ENV_DEFS[SIM_MODE_Earth4C] = {};
ENV_DEFS[SIM_MODE_SnowballEarth] = {};
ENV_DEFS[SIM_MODE_Drought] = {};
ENV_DEFS[SIM_MODE_Deluge] = {};
// -- Sample Env Field -- //

// ENV_DEFS.defaults.sample = {
//     version: 0,
//     mapFunc: (u,x,y,z)=>{
//         // Insert code here
//     },
//     hueMap: (v)=>{
//         // Insert code here
//     },
//     oceanic: true,
//     vector: false,
//     invisible: false,
//     magMap: undefined,
//     noWobble: false,
//     noiseChannels: [
//         [6,0.5,150,3000,0.05,1.5]
//     ]
// };
// ENV_DEFS[SIM_MODE_NORMAL].sample = {};
// ENV_DEFS[SIM_MODE_HYPER].sample = {
//     mapFunc: (u,x,y,z)=>{
//         // Insert code here
//     }
// };
// ENV_DEFS[SIM_MODE_WILD].sample = {};
// ENV_DEFS[SIM_MODE_MEGABLOBS].sample = {};
// ENV_DEFS[SIM_MODE_EXPERIMENTAL].sample = {};

// -- jetstream -- //

ENV_DEFS.defaults.jetstream = {
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0,x-z*3,0,z);
        let peakLat = u.modifiers.peakLat;
        let antiPeakLat = u.modifiers.antiPeakLat;
        let peakRange = u.modifiers.peakRange;
        let antiPeakRange = u.modifiers.antiPeakRange;
        let s = seasonalSine(z);
        let l = map(sqrt(map(s,-1,1,0,1)),0,1,antiPeakLat,peakLat);
        let r = map(s,-1,1,antiPeakRange,peakRange);
        v = map(v,0,1,-r,r);
        return (l+v)*HEIGHT;
    },
    invisible: true,
    noiseChannels: [
        [4,0.5,160,300,1,2]
    ],
    modifiers: {
        peakLat: 0.30,
        antiPeakLat: 0.52,
        peakRange: 0.35,
        antiPeakRange: 0.60
    }
};
ENV_DEFS[SIM_MODE_NORMAL].jetstream = {};
ENV_DEFS[SIM_MODE_HYPER].jetstream = {
    modifiers: {
        peakLat: 0.25,
        antiPeakLat: 0.47,
        peakRange: 0.25,
        antiPeakRange: 0.45
    }
};
ENV_DEFS[SIM_MODE_WILD].jetstream = {
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0,x-z*3,0,z);
        let s = u.yearfrac(z);
        let l = u.piecewise(s,[[1,0.65],[2.5,-0.15],[10,-0.15],[11.5,0.65]]);
        let r = u.piecewise(s,[[0.5,0.3],[1.75,0.7],[3,0.2],[9.5,0.2],[10.75,0.7],[12,0.3]]);
        v = map(v,0,1,-r,r);
        return (l+v)*HEIGHT;
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].jetstream = {
    modifiers: {
        peakLat: 0.15,
        antiPeakLat: 0.47,
        peakRange: 0.60,
        antiPeakRange: 0.45
    }
};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].jetstream = {};

ENV_DEFS[SIM_MODE_NorthernHemisphere].jetstream = {
modifiers: {
        peakLat: 0.31,
        antiPeakLat: 0.5,
        peakRange: 0.38,
        antiPeakRange: 0.55
    }
};
ENV_DEFS[SIM_MODE_SouthernHemisphere].jetstream = {
modifiers: {
        peakLat: 0.29,
        antiPeakLat: 0.48,
        peakRange: 0.27,
        antiPeakRange: 0.45
    }
};

ENV_DEFS[SIM_MODE_WesternHemisphere].jetstream = {
modifiers: {
        peakLat: 0.31,
        antiPeakLat: 0.52,
        peakRange: 0.4,
        antiPeakRange: 0.55
    }
};

ENV_DEFS[SIM_MODE_EasternHemisphere].jetstream = {
modifiers: {
        peakLat: 0.30,
        antiPeakLat: 0.52,
        peakRange: 0.35,
        antiPeakRange: 0.45
    }
};
ENV_DEFS[SIM_MODE_NorthAtlantic].jetstream = {
modifiers: {
        peakLat: 0.30,
        antiPeakLat: 0.4,
        peakRange: 0.3,
        antiPeakRange: 0.30
    }
};
ENV_DEFS[SIM_MODE_SouthAtlantic].jetstream = {
modifiers: {
        peakLat: 0.30,
        antiPeakLat: 0.54,
        peakRange: 0.42,
        antiPeakRange: 0.55
    }
};
ENV_DEFS[SIM_MODE_Mediterranean].jetstream = {
modifiers: {
        peakLat: 0.10,
        antiPeakLat: 0.62,
        peakRange: 0.40,
        antiPeakRange: 0.85
    }
};
ENV_DEFS[SIM_MODE_EasternPacific].jetstream = {
modifiers: {
        peakLat: 0.20,
        antiPeakLat: 0.55,
        peakRange: 0.15,
        antiPeakRange: 0.65
    }
};
ENV_DEFS[SIM_MODE_CentralPacific].jetstream = {
modifiers: {
        peakLat: 0.26,
        antiPeakLat: 0.48,
        peakRange: 0.30,
        antiPeakRange: 0.55
    }
};
ENV_DEFS[SIM_MODE_WesternPacific].jetstream = {
modifiers: {
        peakLat: 0.32,
        antiPeakLat: 0.51,
        peakRange: 0.29,
        antiPeakRange: 0.46
    }
};
ENV_DEFS[SIM_MODE_NorthPacific].jetstream = {
modifiers: {
        peakLat: 0.30,
        antiPeakLat: 0.51,
        peakRange: 0.25,
        antiPeakRange: 0.40
    }
};
ENV_DEFS[SIM_MODE_SouthPacific].jetstream = {
modifiers: {
        peakLat: 0.34,
        antiPeakLat: 0.50,
        peakRange: 0.32,
        antiPeakRange: 0.51
    }
};
ENV_DEFS[SIM_MODE_NorthIndianOcean].jetstream = {
modifiers: {
        peakLat: 0.25,
        antiPeakLat: 0.55,
        peakRange: 0.30,
        antiPeakRange: 0.50
    }
};
ENV_DEFS[SIM_MODE_SouthIndianOcean].jetstream = {
modifiers: {
        peakLat: 0.33,
        antiPeakLat: 0.58,
        peakRange: 0.34,
        antiPeakRange: 0.52
    }
};
ENV_DEFS[SIM_MODE_Australian].jetstream = {
modifiers: {
        peakLat: 0.29,
        antiPeakLat: 0.48,
        peakRange: 0.30,
        antiPeakRange: 0.45
    }
};
ENV_DEFS[SIM_MODE_WarmerEarth2C].jetstream = {
modifiers: {
        peakLat: 0.24,
        antiPeakLat: 0.45,
        peakRange: 0.45,
        antiPeakRange: 0.60
    }
};
ENV_DEFS[SIM_MODE_PreIndustrial].jetstream = {
modifiers: {
        peakLat: 0.37,
        antiPeakLat: 0.55,
        peakRange: 0.27,
        antiPeakRange: 0.5
    }
};
ENV_DEFS[SIM_MODE_MiniIceAge].jetstream = {
modifiers: {
        peakLat: 0.43,
        antiPeakLat: 0.68,
        peakRange: 0.20,
        antiPeakRange: 0.42
    }
};
ENV_DEFS[SIM_MODE_Earth4C].jetstream = {
modifiers: {
        peakLat: 0.12,
        antiPeakLat: 0.35,
        peakRange: 0.26,
        antiPeakRange: 0.4
    }
};
ENV_DEFS[SIM_MODE_SnowballEarth].jetstream = {
modifiers: {
        peakLat: 0.50,
        antiPeakLat: 0.68,
        peakRange: 0.50,
        antiPeakRange: 0.30
    }
};
ENV_DEFS[SIM_MODE_Drought].jetstream = {
modifiers: {
        peakLat: 0.45,
        antiPeakLat: 0.60,
        peakRange: 0.2,
        antiPeakRange: 0.46
    }
};
ENV_DEFS[SIM_MODE_Deluge].jetstream = {
modifiers: {
        peakLat: 0.25,
        antiPeakLat: 0.40,
        peakRange: 0.4,
        antiPeakRange: 0.64
    }
};

// -- LLSteering -- //

ENV_DEFS.defaults.LLSteering = {
    displayName: 'Low-level steering',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);    // reset vector

        // Jetstream
        let j = u.field('jetstream');
        // Cosine curve from 0 at poleward side of map to 1 at equatorward side
        let h = map(cos(map(y,0,HEIGHT,0,PI)),-1,1,1,0);
        // westerlies
        let west = constrain(pow(1-h+map(u.noise(0), 0, 1, -u.modifiers.westerlyNoiseRange, u.modifiers.westerlyNoiseRange)+map(j, 0, HEIGHT, -u.modifiers.westerlyJetstreamEffectRange, u.modifiers.westerlyJetstreamEffectRange),2)*4,0, u.modifiers.westerlyMax);
        // ridging and trades
        let ridging = constrain(u.noise(1)+map(j, 0, HEIGHT, u.modifiers.ridgingJetstreamEffectRange, -u.modifiers.ridgingJetstreamEffectRange),0,1);
        let trades = constrain(pow(h+map(ridging, 0, 1, -u.modifiers.tradesRidgingEffectRange, u.modifiers.tradesRidgingEffectRange),2)*3,0, u.modifiers.tradesMax);
        let tAngle = map(h, 0.9, 1, u.modifiers.tradesAngle, u.modifiers.tradesAngleEquator); // trades angle
        // noise angle
        let a = map(u.noise(3),0,1,0,4*TAU);
        // noise magnitude
        let m = pow(u.modifiers.noiseBase, map(u.noise(2), 0, 1, u.modifiers.noiseExponentMin, u.modifiers.noiseExponentMax));

        // apply to vector
        u.vec.rotate(a);
        u.vec.mult(m);
        u.vec.add(west+trades*cos(tAngle),trades*sin(tAngle));
        return u.vec;
    },
    displayFormat: v=>{
        let speed = round(v.mag()*100)/100;
        let direction = v.heading();
        // speed is still in "u/hr" (coordinate units per hour) for now
        return speed + ' u/hr ' + compassHeading(direction);
    },
    vector: true,
    magMap: [0,3,0,16],
    noiseChannels: [
        [4,0.5,80,100,1,3],
        '',
        '',
        [4,0.5,170,300,1,3]
    ],
    modifiers: {
        westerlyNoiseRange: 0.35,
        westerlyJetstreamEffectRange: 0.6,
        westerlyMax: 20,
        ridgingJetstreamEffectRange: 0.4,
        tradesRidgingEffectRange: 0.4,
        tradesMax: 3.25,
        tradesAngleEquator: 17*Math.PI/16,
        tradesAngle: 511*Math.PI/512,
        noiseBase: 1.6,
        noiseExponentMin: -8,
        noiseExponentMax: 4
    }
};
ENV_DEFS[SIM_MODE_NORMAL].LLSteering = {};
ENV_DEFS[SIM_MODE_HYPER].LLSteering = {};
ENV_DEFS[SIM_MODE_WILD].LLSteering = {
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);    // reset vector

        let s = u.yearfrac(z);
        let wind = u.piecewise(s,[[1,3],[2.5,1],[4.5,0.5],[6,0.75],[7.5,0.65],[7.75,0.05],[8,1.1],[10,1.8],[11,3]]); // wind strength
        let windAngle = u.piecewise(s,[[1,13*PI/8],[2.5,9*PI/8],[4.5,PI],[6,17*PI/16],[7.5,17*PI/16],[8,31*PI/16],[10,15*PI/8],[11.5,13*PI/8]]); // wind angle
        // noise angle
        let a = map(u.noise(3),0,1,0,4*TAU);
        // noise magnitude
        let m = pow(u.modifiers.noiseBase, map(u.noise(2), 0, 1, u.modifiers.noiseExponentMin, u.modifiers.noiseExponentMax));

        // apply to vector
        u.vec.rotate(a);
        u.vec.mult(m);
        u.vec.add(wind*cos(windAngle),wind*sin(windAngle));
        return u.vec;
    },
    modifiers: {
        noiseExponentMin: -6,
        noiseExponentMax: 6
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].LLSteering = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].LLSteering = {};
ENV_DEFS[SIM_MODE_NorthernHemisphere].LLSteering = {};
ENV_DEFS[SIM_MODE_SouthernHemisphere].LLSteering = {};
ENV_DEFS[SIM_MODE_WesternHemisphere].LLSteering = {};
ENV_DEFS[SIM_MODE_EasternHemisphere].LLSteering = {};
ENV_DEFS[SIM_MODE_NorthAtlantic].LLSteering = {};
ENV_DEFS[SIM_MODE_SouthAtlantic].LLSteering = {};
ENV_DEFS[SIM_MODE_Mediterranean].LLSteering = {};
ENV_DEFS[SIM_MODE_EasternPacific].LLSteering = {};
ENV_DEFS[SIM_MODE_CentralPacific].LLSteering = {};
ENV_DEFS[SIM_MODE_WesternPacific].LLSteering = {};
ENV_DEFS[SIM_MODE_NorthPacific].LLSteering = {};
ENV_DEFS[SIM_MODE_SouthPacific].LLSteering = {};
ENV_DEFS[SIM_MODE_NorthIndianOcean].LLSteering = {};
ENV_DEFS[SIM_MODE_SouthIndianOcean].LLSteering = {};
ENV_DEFS[SIM_MODE_Australian].LLSteering = {};
ENV_DEFS[SIM_MODE_WarmerEarth2C].LLSteering = {};
ENV_DEFS[SIM_MODE_PreIndustrial].LLSteering = {};
ENV_DEFS[SIM_MODE_MiniIceAge].LLSteering = {};
ENV_DEFS[SIM_MODE_Earth4C].LLSteering = {};
ENV_DEFS[SIM_MODE_SnowballEarth].LLSteering = {};
ENV_DEFS[SIM_MODE_Drought].LLSteering = {};
ENV_DEFS[SIM_MODE_Deluge].LLSteering = {};
// -- ULSteering -- //

ENV_DEFS.defaults.ULSteering = {
    displayName: 'Upper-level steering',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);                                                                           // reset vector

        const dx = u.modifiers.jetstreamDeltaX;                                                 // delta-x for jetstream differential (used for calculating wind direction in and near jetstream)

        let m = u.noise(1);

        let s = seasonalSine(z);
        let j0 = u.field('jetstream');                                                          // y-position of jetstream
        let j1 = u.field('jetstream',x+dx);                                                     // y-position of jetstream dx to the east for differential
        let j = abs(y-j0);                                                                      // distance of point north/south of jetstream
        let jet = pow(2, 3 - j / u.modifiers.jetstreamHalfDecay);                               // power of jetstream at point
        let jOP = pow(u.modifiers.jetstreamOverpowerBase, jet);                                 // factor for how strong other variables should be if 'overpowered' by jetstream
        let jAngle = atan((j1 - j0) / dx) + map(y-j0, -50, 50, u.modifiers.jetstreamInwardAngle, -u.modifiers.jetstreamInwardAngle, true); // angle of jetstream at point
        let trof = y>j0 ? pow(u.modifiers.troughBase, map(jAngle, -PI/2, PI/2, u.modifiers.troughExponentMax, u.modifiers.troughExponentMin)) * pow(0.7,j/20)*jOP : 0; // pole-eastward push from jetstream dips
        let tAngle = u.modifiers.troughAngle;                                                   // angle of push from jetstream dips
        let ridging = 0.45-j0/HEIGHT-map(sqrt(map(s,-1,1,0,1)),0,1,0.15,0);                     // how much 'ridge' or 'trough' there is from jetstream
        // power of winds equatorward of jetstream
        let hadley = (map(ridging, -0.3, 0.2, u.modifiers.hadleyUpperBound, u.modifiers.hadleyLowerBound, true) + map(m,0,1,-1.5,1.5))*jOP*(y>j0?1:0);
        // angle of winds equatorward of jetstream
        let hAngle = map(ridging,-0.3,0.2, u.modifiers.hadleyAngleMin, u.modifiers.hadleyAngleMax,true);
        let ferrel = 2*jOP*(y<j0?1:0);                                                          // power of winds poleward of jetstream
        let fAngle = 5*PI/8;                                                                    // angle of winds poleward of jetstream

        let a = map(u.noise(0),0,1,0,4*TAU);                                                    // noise angle
        m = pow(u.modifiers.noiseBase, map(m, 0, 1, u.modifiers.noiseExponentMin, u.modifiers.noiseExponentMax))*jOP; // noise magnitude

        // apply noise
        u.vec.rotate(a);
        u.vec.mult(m);

        // apply UL winds
        u.vec.add(jet*cos(jAngle),jet*sin(jAngle));                                             // apply jetstream
        u.vec.add(trof*cos(tAngle),trof*sin(tAngle));                                           // apply trough push
        u.vec.add(hadley*cos(hAngle),hadley*sin(hAngle));                                       // apply winds equatorward of jetstream
        u.vec.add(ferrel*cos(fAngle),ferrel*sin(fAngle));                                       // apply winds poleward of jetstream

        return u.vec;
    },
    displayFormat: v=>{
        let speed = round(v.mag()*100)/100;
        let direction = v.heading();
        // speed is still in "u/hr" (coordinate units per hour) for now
        return speed + ' u/hr ' + compassHeading(direction);
    },
    vector: true,
    magMap: [0,8,0,25],
    modifiers: {
        jetstreamDeltaX: 20,
        jetstreamHalfDecay: 60,
        jetstreamOverpowerBase: 0.7,
        jetstreamInwardAngle: Math.PI/4,
        troughBase: 1.5,
        troughExponentMin: -4,
        troughExponentMax: 4,
        troughAngle: -Math.PI/16,
        hadleyUpperBound: 4,
        hadleyLowerBound: 1,
        hadleyAngleMin: -Math.PI/16,
        hadleyAngleMax: -15*Math.PI/16,
        noiseBase: 1.5,
        noiseExponentMin: -5,
        noiseExponentMax: 5
    },
    noiseChannels: [
        [4,0.5,180,300,1,2],
        [4,0.5,90,100,1,3]
    ]
};
ENV_DEFS[SIM_MODE_NORMAL].ULSteering = {};
ENV_DEFS[SIM_MODE_HYPER].ULSteering = {
    modifiers: {
        hadleyUpperBound: 3
    }
};
ENV_DEFS[SIM_MODE_WILD].ULSteering = {
    mapFunc: (u,x,y,z)=>{
        u.vec.set(1);                                                                   // reset vector

        const dx = 10;                                                                  // delta-x for jetstream differential (used for calculating wind direction in and near jetstream)

        let m = u.noise(1);

        let s = u.yearfrac(z);
        let j0 = u.field('jetstream');                                                  // y-position of jetstream
        let j1 = u.field('jetstream',x+dx);                                             // y-position of jetstream dx to the east for differential
        let j = abs(y-j0);                                                              // distance of point north/south of jetstream
        let jet = pow(2,3-j/30);                                                        // power of jetstream at point
        let jOP = pow(0.7,jet);                                                         // factor for how strong other variables should be if 'overpowered' by jetstream
        let jAngle = atan((j1-j0)/dx)+map(y-j0,-50,50,PI/15,-PI/17,true);               // angle of jetstream at point
        // power of winds equatorward of jetstream
        let hadley = (u.piecewise(s,[[1,4.5],[2.5,1.2],[4,0.5],[4.5,1.7],[5,0.6],[6.5,0.65],[7.5,0.65],[7.75,0.05],[8,1.3],[9,1.7],[10,2.3],[11.5,4.5]]))*jOP*(y>j0?1:0);
        // angle of winds equatorward of jetstream
        let hAngle = u.piecewise(s,[[1,11*PI/8],[2.5,9*PI/8],[4,17*PI/16],[4.5,11*PI/8],[5,17*PI/16],[6.5,35*PI/32],[7.5,17*PI/16],[8,31*PI/16],[9,15*PI/8],[10,7*PI/4],[10.5,11*PI/8]]);
        let ferrel = 2*jOP*(y<j0?map(j0-y,0,400,1,0,true):0);                           // power of winds poleward of jetstream
        let fAngle = 5*PI/8;                                                            // angle of winds poleward of jetstream

        let a = map(u.noise(0),0,1,0,4*TAU);                                            // noise angle
        m = pow(u.modifiers.noiseBase, map(m, 0, 1, u.modifiers.noiseExponentMin, u.modifiers.noiseExponentMax))*jOP; // noise magnitude

        // apply noise
        u.vec.rotate(a);
        u.vec.mult(m);

        // apply UL winds
        u.vec.add(jet*cos(jAngle),jet*sin(jAngle));                                     // apply jetstream
        u.vec.add(hadley*cos(hAngle),hadley*sin(hAngle));                               // apply winds equatorward of jetstream
        u.vec.add(ferrel*cos(fAngle),ferrel*sin(fAngle));                               // apply winds poleward of jetstream

        return u.vec;
    },
    modifiers: {
        noiseExponentMin: -3,
        noiseExponentMax: 3
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].ULSteering = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].ULSteering = {};
ENV_DEFS[SIM_MODE_NorthernHemisphere].ULSteering = {};
ENV_DEFS[SIM_MODE_SouthernHemisphere].ULSteering = {};
ENV_DEFS[SIM_MODE_WesternHemisphere].ULSteering = {};
ENV_DEFS[SIM_MODE_EasternHemisphere].ULSteering = {};
ENV_DEFS[SIM_MODE_NorthAtlantic].ULSteering = {};
ENV_DEFS[SIM_MODE_SouthAtlantic].ULSteering = {};
ENV_DEFS[SIM_MODE_Mediterranean].ULSteering = {};
ENV_DEFS[SIM_MODE_EasternPacific].ULSteering = {};
ENV_DEFS[SIM_MODE_CentralPacific].ULSteering = {};
ENV_DEFS[SIM_MODE_WesternPacific].ULSteering = {};
ENV_DEFS[SIM_MODE_NorthPacific].ULSteering = {};
ENV_DEFS[SIM_MODE_SouthPacific].ULSteering = {};
ENV_DEFS[SIM_MODE_NorthIndianOcean].ULSteering = {};
ENV_DEFS[SIM_MODE_SouthIndianOcean].ULSteering = {};
ENV_DEFS[SIM_MODE_Australian].ULSteering = {};
ENV_DEFS[SIM_MODE_WarmerEarth2C].ULSteering = {};
ENV_DEFS[SIM_MODE_PreIndustrial].ULSteering = {};
ENV_DEFS[SIM_MODE_MiniIceAge].ULSteering = {};
ENV_DEFS[SIM_MODE_Earth4C].ULSteering = {};
ENV_DEFS[SIM_MODE_SnowballEarth].ULSteering = {};
ENV_DEFS[SIM_MODE_Drought].ULSteering = {};
ENV_DEFS[SIM_MODE_Deluge].ULSteering = {};
// -- shear -- //

ENV_DEFS.defaults.shear = {
    displayName: 'Wind shear',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let ll = u.field('LLSteering');
        let ul = u.field('ULSteering');
        u.vec.set(ul);
        u.vec.sub(ll);
        return u.vec;
    },
    displayFormat: v=>{
        let speed = round(v.mag()*100)/100;
        let direction = v.heading();
        // speed is still in "u/hr" (coordinate units per hour) for now
        return speed + ' u/hr ' + compassHeading(direction);
    },
    vector: true,
    noVectorFlip: true,
    magMap: [0,10,0,25],
    hueMap: (v)=>{
        colorMode(HSB);
let extreme = color(0,100,100) 
        let strong = color(90,100,100);
        let moderate = color(180,100,100);
        let weak = color(270,100,100);
        let c;
        if(v < 2)
            c = lerpColor(weak, moderate, map(v,1,2,0,1));
        else if(v < 4)
            c = lerpColor(moderate, strong, map(v,2,4,0,1));
else 
c = lerpColor(strong, extreme, map(v,4,8,0,1));
        colorMode(RGB);
        return c;
    }
};
ENV_DEFS[SIM_MODE_NORMAL].shear = {};
ENV_DEFS[SIM_MODE_HYPER].shear = {};
ENV_DEFS[SIM_MODE_WILD].shear = {};
ENV_DEFS[SIM_MODE_MEGABLOBS].shear = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].shear = {};
ENV_DEFS[SIM_MODE_NorthernHemisphere].shear = {};
ENV_DEFS[SIM_MODE_SouthernHemisphere].shear = {};
ENV_DEFS[SIM_MODE_WesternHemisphere].shear = {};
ENV_DEFS[SIM_MODE_EasternHemisphere].shear = {};
ENV_DEFS[SIM_MODE_NorthAtlantic].shear = {};
ENV_DEFS[SIM_MODE_SouthAtlantic].shear = {};
ENV_DEFS[SIM_MODE_Mediterranean].shear = {};
ENV_DEFS[SIM_MODE_EasternPacific].shear = {};
ENV_DEFS[SIM_MODE_CentralPacific].shear = {};
ENV_DEFS[SIM_MODE_WesternPacific].shear = {};
ENV_DEFS[SIM_MODE_NorthPacific].shear = {};
ENV_DEFS[SIM_MODE_SouthPacific].shear = {};
ENV_DEFS[SIM_MODE_NorthIndianOcean].shear = {};
ENV_DEFS[SIM_MODE_SouthIndianOcean].shear = {};
ENV_DEFS[SIM_MODE_Australian].shear = {};
ENV_DEFS[SIM_MODE_WarmerEarth2C].shear = {};
ENV_DEFS[SIM_MODE_PreIndustrial].shear = {};
ENV_DEFS[SIM_MODE_MiniIceAge].shear = {};
ENV_DEFS[SIM_MODE_Earth4C].shear = {};
ENV_DEFS[SIM_MODE_SnowballEarth].shear = {};
ENV_DEFS[SIM_MODE_Drought].shear = {};
ENV_DEFS[SIM_MODE_Deluge].shear = {};
// -- SSTAnomaly -- //

ENV_DEFS.defaults.SSTAnomaly = {
    displayName: 'Sea surface temp. anomaly',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0);
        v = v*2;
        let i = v<1 ? -1 : 1;
        v = 1-abs(1-v);
        if(v===0) v = 0.000001;
        v = log(v);
        let r;
        if(u.modifiers.r!==undefined) r = u.modifiers.r;
        else r = map(y,0,HEIGHT,0,7);
        v = -r*v;
        v = v*i;
        if(u.modifiers.bigBlobBase!==undefined && v>u.modifiers.bigBlobExponentThreshold) v += pow(u.modifiers.bigBlobBase,v-u.modifiers.bigBlobExponentThreshold)-1;
        return v;
    },
    displayFormat: v=>{
        let str = '';
        if(v >= 0)
            str += '+';
        str += round(v*10)/10;
        str += '\u2103'; // degrees celsius sign
        return str;
    },
    hueMap: (v)=>{
        colorMode(HSB);
        let cold = color(300,100,50);
        let hot = color(0,100,50);
        let cNeutral = color(200,100,100);
        let hNeutral = color(65,100,100);
        let c;
        if(v<0) c = lerpColor(cold,cNeutral,map(v,-7,0,0,1));
        else c = lerpColor(hNeutral,hot,map(v,0,7,0,1));
        colorMode(RGB);
        return c;
    },
    oceanic: true,
    noiseChannels: [
        [6,0.5,150,3000,0.05,1.5]
    ]
};
ENV_DEFS[SIM_MODE_NORMAL].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_HYPER].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_WILD].SSTAnomaly = {
    modifiers: {
        r: 9,
        bigBlobBase: 1.3,
        bigBlobExponentThreshold: 1.2
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].SSTAnomaly = {
    modifiers: {
        r: 7,
        bigBlobBase: 1.8,
        bigBlobExponentThreshold: 1
    }
};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_NorthernHemisphere].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_SouthernHemisphere].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_WesternHemisphere].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_EasternHemisphere].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_NorthAtlantic].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_SouthAtlantic].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_Mediterranean].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_EasternPacific].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_CentralPacific].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_WesternPacific].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_NorthPacific].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_SouthPacific].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_NorthIndianOcean].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_SouthIndianOcean].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_Australian].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_WarmerEarth2C].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_PreIndustrial].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_MiniIceAge].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_Earth4C].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_SnowballEarth].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_Drought].SSTAnomaly = {};
ENV_DEFS[SIM_MODE_Deluge].SSTAnomaly = {};
// -- SST -- //

ENV_DEFS.defaults.SST = {
    displayName: 'Sea surface temperature',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        if(y<0) return 0;
        let anom = u.field('SSTAnomaly');
        let s = seasonalSine(z);
        let w = map(cos(map(x,0,WIDTH, 3*-PI/4, 2*PI)),-1,1,0.275,0.825);
        let h0 = y/HEIGHT;
        let h1 = (sqrt(h0)+h0)/2;
        let h2 = sqrt(sqrt(h0));
        let h = map(cos(lerp(PI,0,lerp(h1,h2,sq(w)))),-1,1,0,1);
        let ospt = u.modifiers.offSeasonPolarTemp;
        let pspt = u.modifiers.peakSeasonPolarTemp;
        let ostt = u.modifiers.offSeasonTropicsTemp;
        let pstt = u.modifiers.peakSeasonTropicsTemp;
        let t = lerp(map(s,-1,1,ospt,pspt), map(s,-1,1,ostt,pstt),h);
        return t+anom;

    }, 

    displayFormat: v=>{
        let str = '';
        str += round(v*10)/10;
        str += '\u2103'; // degrees celsius sign
        return str;
    },
    hueMap: (v)=>{
        colorMode(HSB);
        let c;
        if(v<10) c = lerpColor(color(240,1,100),color(240,100,70),map(v,0,10,0,1));
        else if(v<20) c = lerpColor(color(240,100,70),color(180,50,90),map(v,10,20,0,1));
        else if(v<26) c = lerpColor(color(180,50,90),color(120,100,65),map(v,20,26,0,1));
        else if(v<29) c = lerpColor(color(60,100,100),color(0,100,70),map(v,26,29,0,1));
        else if(v<34) c = lerpColor(color(359,100,70),color(300,5,100),map(v,29,34,0,1));
        else if(v<40) c = lerpColor(color(300,5,100),color(150,10,90),map(v,34,40,0,1));
        else if(v<50) c = lerpColor(color(150,10,90),color(150,60,75),map(v,40,50,0,1));
        else if(v<75) c = lerpColor(color(30,90,90),color(30,30,90),map(v,50,75,0,1));
        else if(v<150) c = lerpColor(color(0,0,35),color(0,0,95),map(v,75,150,0,1));
        else c = lerpColor(color(0,0,25),color(0,0,95),map(v%150,0,150,0,1));
        colorMode(RGB);
        return c;
    },
    oceanic: true,
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 5,
        offSeasonTropicsTemp: 27,
        peakSeasonTropicsTemp: 30
    }
};
ENV_DEFS[SIM_MODE_NORMAL].SST = {};
ENV_DEFS[SIM_MODE_HYPER].SST = {
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 20,
        offSeasonTropicsTemp: 28,
        peakSeasonTropicsTemp: 35
    }
};
ENV_DEFS[SIM_MODE_WILD].SST = {
    mapFunc: (u,x,y,z)=>{
        if(y<0) return 0;
        let anom = u.field('SSTAnomaly');
        let s = u.yearfrac(z);
        let t = u.piecewise(s,[[0,22],[2,25.5],[4,25],[5,26.5],[6,27],[6.25,30],[6.75,31],[7,28],[9,27],[10,26],[11,23]]);
        return t+anom;
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].SST = {
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 20,
        offSeasonTropicsTemp: 23,
        peakSeasonTropicsTemp: 28.5
    }
};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 20,
        peakSeasonPolarTemp: 22,
        offSeasonTropicsTemp: 27,
        peakSeasonTropicsTemp: 30
    }
};
ENV_DEFS[SIM_MODE_NorthernHemisphere].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 3,
        offSeasonTropicsTemp: 27.4,
        peakSeasonTropicsTemp: 30
    }
};
ENV_DEFS[SIM_MODE_SouthernHemisphere].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -7,
        peakSeasonPolarTemp: -8,
        offSeasonTropicsTemp: 26.8,
        peakSeasonTropicsTemp: 29.65
    }
};
ENV_DEFS[SIM_MODE_WesternHemisphere].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -4,
        peakSeasonPolarTemp: 5,
        offSeasonTropicsTemp: 27.2,
        peakSeasonTropicsTemp: 29.6
    }
};
ENV_DEFS[SIM_MODE_EasternHemisphere].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 3,
        offSeasonTropicsTemp: 27.7,
        peakSeasonTropicsTemp: 29.8
    }
};
ENV_DEFS[SIM_MODE_NorthAtlantic].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 3,
        offSeasonTropicsTemp: 27.85,
        peakSeasonTropicsTemp: 30.2

    }
};
ENV_DEFS[SIM_MODE_SouthAtlantic].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -9,
        peakSeasonPolarTemp: -3,
        offSeasonTropicsTemp: 27,
        peakSeasonTropicsTemp: 29.2
    }
};
ENV_DEFS[SIM_MODE_Mediterranean].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 3,
        peakSeasonPolarTemp: 12,
        offSeasonTropicsTemp: 16,
        peakSeasonTropicsTemp: 29
    }
};
ENV_DEFS[SIM_MODE_EasternPacific].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -4,
        peakSeasonPolarTemp: 4,
        offSeasonTropicsTemp: 27,
        peakSeasonTropicsTemp: 29.7
    }
};
ENV_DEFS[SIM_MODE_CentralPacific].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -3,
        peakSeasonPolarTemp: 2,
        offSeasonTropicsTemp: 27.7,
        peakSeasonTropicsTemp: 29.3
    }
};
ENV_DEFS[SIM_MODE_WesternPacific].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 2.7,
        offSeasonTropicsTemp: 28.1,
        peakSeasonTropicsTemp: 30.2
    }
};
ENV_DEFS[SIM_MODE_NorthPacific].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -5.5,
        peakSeasonPolarTemp: 3,
        offSeasonTropicsTemp: 28,
        peakSeasonTropicsTemp: 30.3
    }
};
ENV_DEFS[SIM_MODE_SouthPacific].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -10,
        peakSeasonPolarTemp: -4,
        offSeasonTropicsTemp: 27.4,
        peakSeasonTropicsTemp: 29.3
    }
};
ENV_DEFS[SIM_MODE_NorthIndianOcean].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -5,
        peakSeasonPolarTemp: 2,
        offSeasonTropicsTemp: 28.3,
        peakSeasonTropicsTemp: 29.7
    }
};
ENV_DEFS[SIM_MODE_SouthIndianOcean].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -8,
        peakSeasonPolarTemp: -3.5,
        offSeasonTropicsTemp: 27.5,
        peakSeasonTropicsTemp: 29.6
    }
};
ENV_DEFS[SIM_MODE_Australian].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -7,
        peakSeasonPolarTemp: -4,
        offSeasonTropicsTemp: 27.2,
        peakSeasonTropicsTemp: 29.6
    }
};
ENV_DEFS[SIM_MODE_WarmerEarth2C].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -2.2,
        peakSeasonPolarTemp: 7,
        offSeasonTropicsTemp: 28.2,
        peakSeasonTropicsTemp: 31
    }
};
ENV_DEFS[SIM_MODE_PreIndustrial].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -7,
        peakSeasonPolarTemp: 0,
        offSeasonTropicsTemp: 27,
        peakSeasonTropicsTemp: 29.5
    }
};
ENV_DEFS[SIM_MODE_MiniIceAge].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -13,
        peakSeasonPolarTemp: -7,
        offSeasonTropicsTemp: 24,
        peakSeasonTropicsTemp: 28.7
    }
};
ENV_DEFS[SIM_MODE_Earth4C].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 1,
        peakSeasonPolarTemp: 9,
        offSeasonTropicsTemp: 28.6,
        peakSeasonTropicsTemp: 31.7
    }
};
ENV_DEFS[SIM_MODE_SnowballEarth].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -50,
        peakSeasonPolarTemp: -49,
        offSeasonTropicsTemp: -16.5,
        peakSeasonTropicsTemp: -12.5
    }
};
ENV_DEFS[SIM_MODE_Drought].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: -15,
        peakSeasonPolarTemp: -3,
        offSeasonTropicsTemp: 24,
        peakSeasonTropicsTemp: 28
    }
};
ENV_DEFS[SIM_MODE_Deluge].SST = {
    version:1,
    modifiers: {
        offSeasonPolarTemp: 3,
        peakSeasonPolarTemp: 15,
        offSeasonTropicsTemp: 28,
        peakSeasonTropicsTemp: 30.5
    }
};
// -- moisture -- //

ENV_DEFS.defaults.moisture = {
    displayName: 'Relative humidity',
    version: 0,
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0);
        let s = seasonalSine(z);
        let l = land.get(Coordinate.convertFromXY(u.basin.mapType, x, u.basin.hemY(y)));
        let pm = u.modifiers.polarMoisture;
        let tm = u.modifiers.tropicalMoisture;
        let mm = u.modifiers.mountainMoisture;
        let m = map(l,0.6,0.8,map(y,0,HEIGHT,pm,tm),mm,true);
        m += map(s,-1.4,1,-0.08,0.08);
        m += map(v,0,1,-0.3,0.3);
        m = constrain(m,0,1);
        return m;
    },
    displayFormat: v=>{
        return round(v*1000)/10 + '%';
    },
    hueMap: v=>{
        colorMode(HSB);
        let c;
        if(v<0.5) c = lerpColor(color(45,100,30),color(45,1,90),map(v,0,0.5,0,1));
        else c = lerpColor(color(120,1,90),color(240,100,30),map(v,0.5,1,0,1));
        colorMode(RGB);
        return c;
    },
    modifiers: {
        polarMoisture: 0.30,
        tropicalMoisture: 0.60,
        mountainMoisture: 0.10
    },
    noiseChannels: [
        [4,0.5,120,120,0.3,2]
    ]
};
ENV_DEFS[SIM_MODE_NORMAL].moisture = {};
ENV_DEFS[SIM_MODE_HYPER].moisture = {
    modifiers: {
        polarMoisture: 0.52,
        tropicalMoisture: 0.62,
        mountainMoisture: 0.3
    }
};
ENV_DEFS[SIM_MODE_WILD].moisture = {
    mapFunc: (u,x,y,z)=>{
        let v = u.noise(0);
        let s = u.yearfrac(z);
        let l = land.get(Coordinate.convertFromXY(u.basin.mapType, x, u.basin.hemY(y)));
        let om = u.piecewise(s,[
            [0.5,0.35],[2,0.55],[4,0.6],[5.75,0.58],[6,0.1],[7,0.2],[7.25,0.6],[8.5,0.72],[10,0.55],[11.5,0.35]
        ]);
        let mm = u.modifiers.mountainMoisture;
        let m = map(l,0.5,0.7,om,mm,true);
        m += map(v,0,1,-0.3,0.3);
        m = constrain(m,0,1);
        return m;
    }
};
ENV_DEFS[SIM_MODE_MEGABLOBS].moisture = {};
ENV_DEFS[SIM_MODE_EXPERIMENTAL].moisture = {};
ENV_DEFS[SIM_MODE_NorthernHemisphere].moisture = {
    modifiers: {
        polarMoisture: 0.31,
        tropicalMoisture: 0.62,
        mountainMoisture: 0.10
    }
};
ENV_DEFS[SIM_MODE_SouthernHemisphere].moisture = {
    modifiers: {
        polarMoisture: 0.1,
        tropicalMoisture: 0.62,
        mountainMoisture: 0.11
    }
};
ENV_DEFS[SIM_MODE_WesternHemisphere].moisture = {
    modifiers: {
        polarMoisture: 0.31,
        tropicalMoisture: 0.62,
        mountainMoisture: 0.12
    }
};
ENV_DEFS[SIM_MODE_EasternHemisphere].moisture = {
    modifiers: {
        polarMoisture: 0.31,
        tropicalMoisture: 0.62,
        mountainMoisture: 0.08
    }
};
ENV_DEFS[SIM_MODE_NorthAtlantic].moisture = {
    modifiers: {
        polarMoisture: 0.31,
        tropicalMoisture: 0.62,
        mountainMoisture: 0.06
    }
};
ENV_DEFS[SIM_MODE_SouthAtlantic].moisture = {
    modifiers: {
        polarMoisture: 0.27,
        tropicalMoisture: 0.55,
        mountainMoisture: 0.1
    }
};
ENV_DEFS[SIM_MODE_Mediterranean].moisture = {
    modifiers: {
        polarMoisture: 0.55,
        tropicalMoisture: 0.35,
        mountainMoisture: 0.10
    }
};
ENV_DEFS[SIM_MODE_EasternPacific].moisture = {
    modifiers: {
        polarMoisture: 0.32,
        tropicalMoisture: 0.64,
        mountainMoisture: 0.15
    }
};
ENV_DEFS[SIM_MODE_CentralPacific].moisture = {
    modifiers: {
        polarMoisture: 0.30,
        tropicalMoisture: 0.61,
        mountainMoisture: 0.20
    }
};
ENV_DEFS[SIM_MODE_WesternPacific].moisture = {
    modifiers: {
        polarMoisture: 0.36,
        tropicalMoisture: 0.72,
        mountainMoisture: 0.08
    }
};
ENV_DEFS[SIM_MODE_NorthPacific].moisture = {
    modifiers: {
        polarMoisture: 0.32,
        tropicalMoisture: 0.65,
        mountainMoisture: 0.05
    }
};
ENV_DEFS[SIM_MODE_SouthPacific].moisture = {
    modifiers: {
        polarMoisture: 0.33,
        tropicalMoisture: 0.6,
        mountainMoisture: 0.15
    }
};
ENV_DEFS[SIM_MODE_NorthIndianOcean].moisture = {
    modifiers: {
        polarMoisture: 0.34,
        tropicalMoisture: 0.68,
        mountainMoisture: 0.07
    }
};
ENV_DEFS[SIM_MODE_SouthIndianOcean].moisture = {
    modifiers: {
        polarMoisture: 0.33,
        tropicalMoisture: 0.66,
        mountainMoisture: 0.1
    }
};
ENV_DEFS[SIM_MODE_Australian].moisture = {
    modifiers: {
        polarMoisture: 0.32,
        tropicalMoisture: 0.64,
        mountainMoisture: 0.05
    }
};
ENV_DEFS[SIM_MODE_WarmerEarth2C].moisture = {
    modifiers: {
        polarMoisture: 0.37,
        tropicalMoisture: 0.74,
        mountainMoisture: 0.13
    }
};
ENV_DEFS[SIM_MODE_PreIndustrial].moisture = {
    modifiers: {
        polarMoisture: 0.3,
        tropicalMoisture: 0.6,
        mountainMoisture: 0.07
    }
};
ENV_DEFS[SIM_MODE_MiniIceAge].moisture = {
    modifiers: {
        polarMoisture: 0.17,
        tropicalMoisture: 0.48,
        mountainMoisture: 0.01
    }
};
ENV_DEFS[SIM_MODE_Earth4C].moisture = {
    modifiers: {
        polarMoisture: 0.4,
        tropicalMoisture: 0.8,
        mountainMoisture: 0.2
    }
};
ENV_DEFS[SIM_MODE_SnowballEarth].moisture = {
    modifiers: {
        polarMoisture: 0.12,
        tropicalMoisture: 0.22,
        mountainMoisture: 0.01
    }
};
ENV_DEFS[SIM_MODE_Drought].moisture = {
    modifiers: {
        polarMoisture: 0.27,
        tropicalMoisture: 0.55,
        mountainMoisture: 0.02
    }
};
ENV_DEFS[SIM_MODE_Deluge].moisture = {
    modifiers: {
        polarMoisture: 0.45,
        tropicalMoisture: 0.85,
        mountainMoisture: 0.35
    }
};
// ---- Active Storm System Algorithm ---- //

const STORM_ALGORITHM = {};

STORM_ALGORITHM.defaults = {};
STORM_ALGORITHM[SIM_MODE_NORMAL] = {};
STORM_ALGORITHM[SIM_MODE_HYPER] = {};
STORM_ALGORITHM[SIM_MODE_WILD] = {};
STORM_ALGORITHM[SIM_MODE_MEGABLOBS] = {};
STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL] = {};
STORM_ALGORITHM[SIM_MODE_NorthernHemisphere] = {};
STORM_ALGORITHM[SIM_MODE_SouthernHemisphere] = {};
STORM_ALGORITHM[SIM_MODE_WesternHemisphere] = {};
STORM_ALGORITHM[SIM_MODE_EasternHemisphere] = {};
STORM_ALGORITHM[SIM_MODE_NorthAtlantic] = {};
STORM_ALGORITHM[SIM_MODE_SouthAtlantic] = {};
STORM_ALGORITHM[SIM_MODE_Mediterranean] = {};
STORM_ALGORITHM[SIM_MODE_EasternPacific] = {};
STORM_ALGORITHM[SIM_MODE_CentralPacific] = {};
STORM_ALGORITHM[SIM_MODE_WesternPacific] = {};
STORM_ALGORITHM[SIM_MODE_NorthPacific] = {};
STORM_ALGORITHM[SIM_MODE_SouthPacific] = {};
STORM_ALGORITHM[SIM_MODE_NorthIndianOcean] = {};
STORM_ALGORITHM[SIM_MODE_SouthIndianOcean] = {};
STORM_ALGORITHM[SIM_MODE_Australian] = {};
STORM_ALGORITHM[SIM_MODE_PreIndustrial] = {};
STORM_ALGORITHM[SIM_MODE_WarmerEarth2C] = {};
STORM_ALGORITHM[SIM_MODE_MiniIceAge] = {};
STORM_ALGORITHM[SIM_MODE_Earth4C] = {};
STORM_ALGORITHM[SIM_MODE_SnowballEarth] = {};
STORM_ALGORITHM[SIM_MODE_Drought] = {};
STORM_ALGORITHM[SIM_MODE_Deluge] = {};
// -- Interaction -- //

STORM_ALGORITHM.defaults.interactionInit = {
    fuji: true,
    shear: false,
    kill: false
};

STORM_ALGORITHM.defaults.interaction = function(sys0, sys1){
    let interactionData = {};

    let v = createVector();
    v.set(sys0.pos);
    v.sub(sys1.pos);
    let m = v.mag();
    let r = map(sys1.lowerWarmCore,0,1,150,50);
    if(m<r && m>0){
        v.rotate(sys0.basin.hem(-TAU/4+((3/m)*TAU/16)));
        v.setMag(map(m,r,0,0,map(constrain(sys1.pressure,990,1013),1013,990,0.2,2.2)));
        interactionData.fuji = v;
        interactionData.shear = map(m,r,0,0,map(sys1.pressure,1013,900,0,6));
        if((m < map(sys0.pressure,1013,1000,r/5,r/15) || m<5) && sys0.pressure > sys1.pressure)
            interactionData.kill = 1;
    }

    return interactionData;
};

// -- Steering -- //

STORM_ALGORITHM.defaults.steering = function(sys,vec,u){
    let ll = u.f("LLSteering");
    let ul = u.f("ULSteering");
    let d = sqrt(sys.depth);
    let x = lerp(ll.x,ul.x,d);       // Deeper systems follow upper-level steering more and lower-level steering less
    let y = lerp(ll.y,ul.y,d);
    vec.set(x,y);
    vec.add(sys.interaction.fuji);
};

// -- Core -- //

STORM_ALGORITHM.defaults.core = function(sys,u){
    let SST = u.f("SST");
    let jet = u.f("jetstream");
    jet = sys.basin.hemY(sys.pos.y)-jet;
    let lnd = u.land();
    let moisture = u.f("moisture");
    let shear = u.f("shear").mag()+sys.interaction.shear;
    
    let targetWarmCore = (lnd ?
        sys.lowerWarmCore :
        max(pow(map(SST,24,28,0,1,true),3),sys.lowerWarmCore)
    )*map(jet,0,75,sq(1-sys.depth),1,true);
    sys.lowerWarmCore = lerp(sys.lowerWarmCore,targetWarmCore,sys.lowerWarmCore>targetWarmCore ? map(jet,0,75,0.4,0.06,true) : 0.04);
    sys.upperWarmCore = lerp(sys.upperWarmCore,sys.lowerWarmCore,sys.lowerWarmCore>sys.upperWarmCore ? 0.05 : 0.4);
    sys.lowerWarmCore = constrain(sys.lowerWarmCore,0,1);
    sys.upperWarmCore = constrain(sys.upperWarmCore,0,1);
    let tropicalness = constrain(map(sys.lowerWarmCore,0.5,1,0,1),0,sys.upperWarmCore);
    let nontropicalness = constrain(map(sys.lowerWarmCore,0.75,0,0,1,true),0,1);

    sys.organization *= 100;
    if(!lnd && moisture >= 0.8) {
 sys.organization += sq(map(SST,20,31,0,1.6,true))*3*tropicalness;
     }
 else if (!lnd && moisture >= 0.7 && moisture < 0.8) {
 sys.organization += sq(map(SST,20,31,0,0.8,true))*3*tropicalness;
 }
 else if (!lnd && moisture >= 0.6 && moisture < 0.7) {
 sys.organization += sq(map(SST,20,31,0,0.6,true))*3*tropicalness;
 }
 else if (!lnd && moisture >= 0.5 && moisture < 0.6) {
 sys.organization += sq(map(SST,20,31,0,0.4,true))*3*tropicalness;
 }
 else if (!lnd && moisture < 0.5) {
 sys.organization += sq(map(SST,20,31,0,0.2,true))*3*tropicalness;
 }


    if(!lnd && sys.organization<40) sys.organization += lerp(0,3,nontropicalness);

    if (lnd < 0.6 && moisture >= 0.5) {
        if (!(sys.pressure > 1013)) {
            sys.pressure = 1013; // Or any value below 1013 that you want to set it to
        }
    }
    // if(lnd) sys.organization -= pow(10,map(lnd,0.5,1,-3,1));
    // if(lnd && sys.organization<70 && moisture>0.3) sys.organization += pow(5,map(moisture,0.3,0.5,-1,1,true))*tropicalness;
    sys.organization -= pow(2,4-((HEIGHT-sys.basin.hemY(sys.pos.y))/(HEIGHT*0.01)));
    sys.organization -= (pow(map(sys.depth,0,1,1.17,1.31),shear)-1)*map(sys.depth,0,1,4.7,1.2,true);
    sys.organization -= map(moisture,0,1,4,0,true)*shear;



 if (moisture >= 0 && moisture < 0.02) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 4.5;
}
else if (moisture >= 0.02 && moisture < 0.04) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 4.25;
}
else if (moisture >= 0.04 && moisture < 0.06) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 4;
}
else if (moisture >= 0.06 && moisture < 0.08) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 3.85;
}
else if (moisture >= 0.08 && moisture < 0.09) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 3.6;
}
else if (moisture >= 0.09 && moisture < 0.1) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 3.35;
}
else if (moisture >= 0.1 && moisture < 0.115) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 3.15;
}
else if (moisture >= 0.115 && moisture < 0.12) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.98;
}
else if (moisture >= 0.12 && moisture < 0.15) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.93;
}
else if (moisture >= 0.15 && moisture < 0.18) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.8;
}
else if (moisture >= 0.18 && moisture < 0.2) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.74;
}
else if (moisture >= 0.2 && moisture < 0.22) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.6;
}
else if (moisture >= 0.22 && moisture < 0.23) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.3;
}
else if (moisture >= 0.23 && moisture < 0.26) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.25;
}
else if (moisture >= 0.26 && moisture < 0.29) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.16;
}
else if (moisture >= 0.29 && moisture < 0.3) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 2.05;
}
else if (moisture >= 0.3 && moisture < 0.31) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.8;
}
else if (moisture >= 0.31 && moisture < 0.325) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.64;
}
else if (moisture >= 0.325 && moisture < 0.342) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.55;
}
else if (moisture >= 0.342 && moisture < 0.358) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.32;
}
else if (moisture >= 0.358 && moisture < 0.37) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.3;
}
else if (moisture >= 0.37 && moisture < 0.4) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.19;
}
else if (moisture >= 0.4 && moisture < 0.415) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.08;
}
 else if (moisture >= 0.415 && moisture < 0.43) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 1.02;
}
else if (moisture >= 0.43 && moisture < 0.45) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 0.96;
}
else if (moisture >= 0.45 && moisture < 0.465) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 0.82;
}
else if (moisture >= 0.465 && moisture < 0.48) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 0.78;
}
else if (moisture >= 0.48 && moisture < 0.5) {
    sys.organization -= sq(map(moisture, 0, 1, 0, 6, true)) * 0.6;
}
else if (moisture >= 0.5 && moisture < 0.53) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.4;
}
else if (moisture >= 0.53 && moisture < 0.56) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.45;
}
else if (moisture >= 0.56 && moisture < 0.58) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.5;
}
else if (moisture >= 0.58 && moisture < 0.6) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.55;
}
else if (moisture >= 0.6 && moisture <0.62) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.58;
}
else if (moisture >= 0.62 && moisture <0.65) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.65;
}
else if (moisture >= 0.65 && moisture <0.68) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.74;
}
else if (moisture >= 0.68 && moisture <0.7) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 0.88;
}
else if (moisture >= 0.7 && moisture <0.72) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1;
}
else if (moisture >= 0.72 && moisture <0.74) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.1;
}
else if (moisture >= 0.74 && moisture <0.75) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.2;
}
else if (moisture >= 0.75 && moisture <0.77) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.4;
}
else if (moisture >= 0.77 && moisture <0.8) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.55;
}
else if (moisture >= 0.8 && moisture <0.82) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.6;
}
else if (moisture >= 0.82 && moisture <0.84) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.76;
}
else if (moisture >= 0.84 && moisture <0.86) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.85;
}
else if (moisture >= 0.86 && moisture <0.88) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.9;
}
else if (moisture >= 0.88 && moisture <0.9) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 1.94;
}
else if (moisture >= 0.9 && moisture <0.93) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 2;
}
else if (moisture >= 0.93 && moisture <0.95) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 2.13;
}
else if (moisture >= 0.95 && moisture <0.98) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 2.22;
}
else if (moisture >= 0.98 && moisture <= 1) {
    sys.organization += sq(map(moisture, 0, 1, 0, 6, true)) * 2.5;
}
sys.organization -= pow(1.3,24-SST)*tropicalness;
sys.organization = constrain(sys.organization,0,100);
sys.organization /= 100;

    let targetPressure = 1010-25*log((lnd||SST<25)?1:map(SST,25,30,1,2,true))/log(1.17);
    targetPressure = lerp(1010,targetPressure,pow(sys.organization,3));
    sys.pressure = lerp(sys.pressure,targetPressure,(sys.pressure>targetPressure?0.05:0.08)*tropicalness);
    sys.pressure -= random(-3,3.5)*nontropicalness;
    if(sys.organization<2.51) sys.pressure += random(-2,2.5)*tropicalness;
    sys.pressure += random(constrain(900-sys.pressure,0,140))*nontropicalness;
    sys.pressure += 0.5*sys.interaction.shear/(1+map(sys.lowerWarmCore,0,1,4,0,true));
    sys.pressure += map(jet,0,75,5*pow(1-sys.depth,4),0,true);

    let targetWind = map(sys.pressure,1013,920,10,135,true)*map(sys.lowerWarmCore,1,0,1,0.6,true);
    sys.windSpeed = lerp(sys.windSpeed,targetWind,0.15);


    let targetDepth = map(
        sys.upperWarmCore,
        0,1,
        1,map(
            sys.organization,
            0,1,
            sys.depth*pow(0.95,shear),max(map(sys.pressure,1010,950,0,0.7,true),sys.depth)
        )
    );
    sys.depth = lerp(sys.depth,targetDepth,0.05);

    if(sys.pressure > 1013 || sys.interaction.kill > 0)
        sys.kill = true;
    console.log('Initial values:', {
        organization: sys.organization,
        moisture: moisture,
        SST: SST,
        shear: shear,
        pressure: sys.pressure,
        upperWarmCore: sys.upperWarmCore,
        depth: sys.depth,
        HEIGHT: HEIGHT,
        hemY: sys.basin.hemY(sys.pos.y)
    });
};

STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL].core = function(sys,u){
    let SST = u.f("SST");
    let jet = u.f("jetstream");
    jet = sys.basin.hemY(sys.pos.y)-jet;
    let lnd = u.land();
    let moisture = u.f("moisture");
    let shear = u.f("shear").mag()+sys.interaction.shear;
    
    sys.lowerWarmCore = lerp(sys.lowerWarmCore,0,map(jet,0,75,0.07,0));
    sys.lowerWarmCore = lerp(sys.lowerWarmCore,1,map(jet,50,100,0,map(SST,20,26,0,0.13,true),true));
    if(sys.upperWarmCore > sys.lowerWarmCore)
        sys.upperWarmCore = sys.lowerWarmCore;
    else
        sys.upperWarmCore = lerp(sys.upperWarmCore,sys.lowerWarmCore,0.015);
    sys.lowerWarmCore = constrain(sys.lowerWarmCore,0,1);
    sys.upperWarmCore = constrain(sys.upperWarmCore,0,1);
    let tropicalness = (sys.lowerWarmCore+sys.upperWarmCore)/2;

    if(!lnd)
        sys.organization = lerp(sys.organization,1,sq(tropicalness)*map(SST,20,26,30,0,0.35,1,true));
    sys.organization = lerp(sys.organization,0,pow(3,shear*(1-moisture)*2.3)*0.0005);
if(lnd<0.53)
        sys.organization = lerp(sys.organization,0.5,0.9);
    sys.organization = constrain(sys.organization,0,1);
    if(lnd >= 0.53 && lnd<0.65)
        sys.organization = lerp(sys.organization,0.1,0.5);
    sys.organization = constrain(sys.organization,0,0.5);
  if(lnd >= 0.65 && lnd<0.75)
        sys.organization = lerp(sys.organization,0.05,0.2);
    sys.organization = constrain(sys.organization,0,0.15);
if(lnd>=0.75)
        sys.organization = lerp(sys.organization,0,0.01);
    sys.organization = constrain(sys.organization,0,0.04);



    let hardCeiling = map(SST,23,31,1000,860);
    if(lnd)
        hardCeiling = 990;
    let softCeiling = map(sys.organization,0.93,0.98,lerp(1007,hardCeiling,0.58),hardCeiling,true);
    sys.pressure = lerp(sys.pressure,1013,0.006);
    sys.pressure = lerp(sys.pressure,980,(1-tropicalness)*map(jet,0,75,0.025,0,true));
    sys.pressure = lerp(sys.pressure,softCeiling,tropicalness*sys.organization*0.03);
    if(sys.pressure<1000)
        sys.pressure = lerp(sys.pressure,1000,tropicalness*(1-sys.organization)*0.01);
    sys.pressure = lerp(sys.pressure,1010,map(sys.pos.y,HEIGHT*0.97,HEIGHT,0,0.15,true));
    sys.pressure = lerp(sys.pressure,1010,map(lnd,0.8,0.93,0,0.2,true));
    sys.pressure += random(-1,1);

    let targetWind = map(sys.pressure,1010,900,10,180)*map(sys.lowerWarmCore,1,0,1,0.6);
    sys.windSpeed = lerp(sys.windSpeed,targetWind,0.15);

    sys.depth = lerp(sys.depth,1,(1-tropicalness)*0.02);
    sys.depth = lerp(sys.depth,0,tropicalness*(1-sys.organization)*0.02);
    sys.depth = lerp(sys.depth,lnd ? 0.5 : map(SST,26,28,30,0.5,1,4,true),tropicalness*sys.organization*0.025);

    if(sys.kaboom > 0 && sys.kaboom < 1)
        sys.kaboom = random()<sys.kaboom ? 1 : 0;

    let namedBoom = false;
    if(sys.fetchStorm()){
        let d = sys.fetchStorm().designations.primary;
        for(let i = 0; i < d.length; i++){
            if(d[i].value === 'Boom'){
                namedBoom = true;
                sys.kaboom = 2;
            }
        }
    }

    if(sys.kaboom){
        if((!lnd || namedBoom) && (sys.organization > 0.8 || sys.kaboom === 2)){
            sys.kaboom = 2;
            if(sys.pressure > 600)
                sys.pressure -= random(5,10,15,20,25);
            sys.organization = 1;
            sys.lowerWarmCore = 1;
            if(sys.upperWarmCore < 0.8)
                sys.upperWarmCore = 0.8;
            sys.depth = 1;
        }

        if(lnd && !namedBoom){
            if(sys.kaboom === 2)
                sys.kaboom = 1;
            sys.organization = 0;
        }
    }else if(random()<0.0001)
        sys.kaboom = 1;

    if(sys.pressure > 1013 || sys.interaction.kill > 0)
        sys.kill = true;
   
    
   
};

// -- Type Determination -- //

STORM_ALGORITHM.defaults.typeDetermination = function(sys,u){
    switch(sys.type){
        case TROP:
            sys.type = sys.lowerWarmCore<0.9 ? EXTROP : ((sys.organization<0.35 && sys.windSpeed<25) || sys.windSpeed<29) ? sys.upperWarmCore<0.35 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.65 ? SUBTROP : TROP;
            break;
        case SUBTROP:
            sys.type = sys.lowerWarmCore<0.25 ? EXTROP : ((sys.organization<0.20 && sys.windSpeed<25) || sys.windSpeed<29) ? sys.upperWarmCore<0.25 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.50 ? SUBTROP : TROP;
            break;
        case TROPWAVE:
            sys.type = sys.lowerWarmCore<0.9 ? EXTROP : (sys.organization<0.15 || sys.windSpeed<20) ? sys.upperWarmCore<0.7 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.75 ? SUBTROP : TROP;
            break;
        default:
            sys.type = sys.lowerWarmCore<0.35 ? EXTROP : (sys.organization<0.15 || sys.windSpeed<20) ? sys.upperWarmCore<0.25 ? EXTROP : TROPWAVE : sys.upperWarmCore<0.75 ? SUBTROP : TROP;
    }
};

// -- Version -- //
// Version number of a simulation mode's storm algorithm
// Used for upgrading the active attribute values if needed

STORM_ALGORITHM[SIM_MODE_NORMAL].version = 0;
STORM_ALGORITHM[SIM_MODE_HYPER].version = 0;
STORM_ALGORITHM[SIM_MODE_WILD].version = 0;
STORM_ALGORITHM[SIM_MODE_MEGABLOBS].version = 0;
STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL].version = 1;
STORM_ALGORITHM[SIM_MODE_NorthernHemisphere].version = 0;
STORM_ALGORITHM[SIM_MODE_SouthernHemisphere].version = 0;
STORM_ALGORITHM[SIM_MODE_WesternHemisphere].version = 0;
STORM_ALGORITHM[SIM_MODE_EasternHemisphere].version = 0;
STORM_ALGORITHM[SIM_MODE_NorthAtlantic].version = 0;
STORM_ALGORITHM[SIM_MODE_SouthAtlantic].version = 0;
STORM_ALGORITHM[SIM_MODE_Mediterranean].version = 0;
STORM_ALGORITHM[SIM_MODE_EasternPacific].version = 0;
STORM_ALGORITHM[SIM_MODE_CentralPacific].version = 0;
STORM_ALGORITHM[SIM_MODE_WesternPacific].version = 0;
STORM_ALGORITHM[SIM_MODE_NorthPacific].version = 0;
STORM_ALGORITHM[SIM_MODE_SouthPacific].version = 0;
STORM_ALGORITHM[SIM_MODE_NorthIndianOcean].version = 0;
STORM_ALGORITHM[SIM_MODE_SouthIndianOcean].version = 0;
STORM_ALGORITHM[SIM_MODE_Australian].version = 0;
STORM_ALGORITHM[SIM_MODE_PreIndustrial].version = 0;
STORM_ALGORITHM[SIM_MODE_WarmerEarth2C].version = 0;
STORM_ALGORITHM[SIM_MODE_MiniIceAge].version = 0;
STORM_ALGORITHM[SIM_MODE_Earth4C].version = 0;
STORM_ALGORITHM[SIM_MODE_SnowballEarth].version = 0;
STORM_ALGORITHM[SIM_MODE_Drought].version = 0;
STORM_ALGORITHM[SIM_MODE_Deluge].version = 0;
// -- Upgrade -- //
// Converts active attributes in case an active system is loaded after an algorithm change breaks old values

// STORM_ALGORITHM[SIM_MODE_NORMAL].upgrade = function(sys,data,oldVersion){

// };

// STORM_ALGORITHM[SIM_MODE_HYPER].upgrade = function(sys,data,oldVersion){

// };

// STORM_ALGORITHM[SIM_MODE_WILD].upgrade = function(sys,data,oldVersion){

// };

// STORM_ALGORITHM[SIM_MODE_MEGABLOBS].upgrade = function(sys,data,oldVersion){

// };

STORM_ALGORITHM[SIM_MODE_EXPERIMENTAL].upgrade = function(sys,data,oldVersion){
    if(oldVersion < 1){
        sys.organization = data.organization;
        sys.lowerWarmCore = data.lowerWarmCore;
        sys.upperWarmCore = data.upperWarmCore;
        sys.depth = data.depth;
        sys.kaboom = 0;
    }
};


