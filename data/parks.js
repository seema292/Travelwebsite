// Indian National Parks Safari Data
// Complete factual database with zones, pricing, seasonal rules & timings

const PARKS_DATA = [
    {
        id: "jim-corbett",
        slug: "jim-corbett-national-park",
        name: "Jim Corbett National Park",
        shortName: "Jim Corbett",
        state: "Uttarakhand",
        location: "Ramnagar, Nainital District",
        established: 1936,
        badge: "India's 1st National Park",
        heroImage: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        reviewsCount: 1420,
        sightingIndex: 94,
        bestSeason: "October to June (Dhikala opens Nov 15)",
        headline: "Roar of the Royal Bengal Tiger in the Foothills of Himalayas",
        tagline: "India's most storied wilderness where sal forests meet the Ramganga river.",
        desc: "India's oldest national park nestled along the scenic foothills of the Himalayas. Explore ancient sal woodlands, sprawling Dhikala grasslands, and picturesque Ramganga riverbeds renowned for majestic Royal Bengal Tigers, wild elephant herds, and over 600 species of resident and migratory birds.",
        pricing: {
            gypsyCore: 7500,
            gypsyBuffer: 5500,
            canterSeat: 2400,
            foreignerGypsy: 12500,
            guideFee: 1000,
            cameraFee: 500
        },
        safariModes: ["Gypsy (6 Guests)", "Canter (16 Guests)", "Elephant Safari"],
        shifts: [
            { id: "morning", name: "Morning Safari", timing: "06:00 AM - 09:30 AM (Winter: 06:30 - 10:00)" },
            { id: "evening", name: "Evening Safari", timing: "02:30 PM - 06:00 PM (Winter: 01:30 - 05:00)" }
        ],
        zones: [
            { id: "dhikala", name: "Dhikala Zone", type: "Core", popular: true, desc: "Famed grassland panoramic vistas and Ramganga riverbed. Home to big tiger prides and wild elephant herds. Canter safari available.", gypsiesPerShift: 0, cantersPerShift: 4 },
            { id: "bijrani", name: "Bijrani Zone", type: "Core", popular: true, desc: "Deep sal woodland with high tiger sighting density and picturesque Machaan viewpoints.", gypsiesPerShift: 30 },
            { id: "jhirna", name: "Jhirna Zone", type: "Core", popular: false, desc: "Open round the year. Excellent terrain for sloth bear, wild boars, and leopard tracking.", gypsiesPerShift: 30 },
            { id: "dhela", name: "Dhela Zone", type: "Core", popular: false, desc: "Eco-tourism zone added in 2014 with pristine waterholes and active tiger movement.", gypsiesPerShift: 15 },
            { id: "durga-devi", name: "Durga Devi Zone", type: "Core", popular: false, desc: "Hilly terrain along Ramganga; paradise for birdwatchers and Mahseer angling enthusiasts.", gypsiesPerShift: 15 },
            { id: "sitabani", name: "Sitabani Forest", type: "Buffer", popular: false, desc: "Mythological buffer zone steeped in Ramayana lore; no permit restriction, dense birdlife.", gypsiesPerShift: 40 },
            { id: "phato", name: "Phato Zone", type: "Buffer", popular: false, desc: "Latest eco-tourism buffer zone featuring charming treehouse viewpoints.", gypsiesPerShift: 50 }
        ],
        keyFauna: ["Royal Bengal Tiger", "Asian Elephant", "Gharial & Crocodile", "Sloth Bear", "Otter", "Over 600 Bird Species"],
        bookingAdvanceDays: 90,
        rules: [
            "Original Photo ID (Aadhaar / Passport / Voter ID) mandatory at forest checkpost",
            "Permits once issued are strictly non-transferable and non-refundable by Forest Dept",
            "Maximum 6 adults + 2 children under 5 years allowed per 4x4 Gypsy",
            "Zero plastic & no loud music allowed inside protected zones"
        ]
    },
    {
        id: "ranthambore",
        slug: "ranthambore-national-park",
        name: "Ranthambore National Park",
        shortName: "Ranthambore",
        state: "Rajasthan",
        location: "Sawai Madhopur District",
        established: 1980,
        badge: "Royal Tiger Fort",
        heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        rating: 4.9,
        reviewsCount: 1680,
        sightingIndex: 96,
        bestSeason: "October to June (Peak sightings March-May)",
        headline: "Where Bengal Tigers Rule Ancient Fortresses & Banyan Groves",
        tagline: "The world's most photogenic tiger sanctuary with ancient ruins, lakes & royal cenotaphs.",
        desc: "The world's most iconic tiger sanctuary where Royal Bengal Tigers roam past 10th-century fortresses and tranquil lake waters. Experience thrilling open-jeep game drives across historic hunting grounds, scenic banyan groves, and prime core zones like Padam Talao and Rajbagh.",
        pricing: {
            gypsyCore: 8800,
            gypsyBuffer: 6500,
            canterSeat: 1950,
            foreignerGypsy: 14500,
            guideFee: 1200,
            cameraFee: 600
        },
        safariModes: ["Gypsy (6 Guests)", "Canter (20 Guests)"],
        shifts: [
            { id: "morning", name: "Morning Safari", timing: "06:30 AM - 10:00 AM (Winter: 07:00 - 10:30)" },
            { id: "evening", name: "Evening Safari", timing: "02:30 PM - 06:00 PM (Winter: 02:00 - 05:30)" }
        ],
        zones: [
            { id: "zone-1-5", name: "Zones 1 to 5 (Premium Core)", type: "Core", popular: true, desc: "Classic lake zones (Padam Talao, Rajbagh, Malik Talao) with legendary tiger dynasties like Machli, Arrowhead and Riddhi.", gypsiesPerShift: 20 },
            { id: "zone-6-10", name: "Zones 6 to 10 (Scenic Hills)", type: "Buffer", popular: false, desc: "Hilly scenic plateau of Kundal, Balas and Kuwalji. High leopard sightings and birdwatching.", gypsiesPerShift: 20 }
        ],
        keyFauna: ["Bengal Tiger", "Indian Leopard", "Marsh Crocodile", "Striped Hyena", "Sambar Deer", "Chital"],
        bookingAdvanceDays: 90,
        rules: [
            "Zone allotment is decided purely by the Forest Dept computerised roster system",
            "Carry the exact ID registered during permit booking",
            "Wear jungle-toned clothes (khaki, olive green, earthy brown)"
        ]
    },
    {
        id: "tadoba",
        slug: "tadoba-national-park",
        name: "Tadoba Andhari Tiger Reserve",
        shortName: "Tadoba",
        state: "Maharashtra",
        location: "Chandrapur District",
        established: 1955,
        badge: "Highest Tiger Density",
        heroImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80",
        rating: 4.95,
        reviewsCount: 1230,
        sightingIndex: 97,
        bestSeason: "October to June (Peak summer May-June at waterholes)",
        headline: "The Jewel of Vidarbha — Unmatched Tiger Sighting Reliability",
        tagline: "India's real tiger powerhouse where big cats stroll along open safari tracks.",
        desc: "Celebrated as the \"Jewel of Vidarbha,\" Tadoba is Central India's undisputed tiger powerhouse. Dominated by dense teak forests, bamboo thickets, and pristine Telia Lake, it offers legendary predator tracking across Moharli and Kolara gates alongside thrilling nocturnal buffer night safaris.",
        pricing: {
            gypsyCore: 7800,
            gypsyBuffer: 5600,
            canterSeat: 1800,
            foreignerGypsy: 13000,
            guideFee: 1000,
            cameraFee: 400
        },
        safariModes: ["Gypsy (6 Guests)", "Night Safari (Buffer)"],
        shifts: [
            { id: "morning", name: "Morning Safari", timing: "06:00 AM - 10:00 AM" },
            { id: "evening", name: "Evening Safari", timing: "02:00 PM - 06:00 PM" },
            { id: "night", name: "Night Safari (Buffer)", timing: "07:00 PM - 10:00 PM" }
        ],
        zones: [
            { id: "moharli", name: "Moharli Zone (Core)", type: "Core", popular: true, desc: "The legendary gateway of Tadoba. High tiger presence around Telia Dam and Katezari.", gypsiesPerShift: 32 },
            { id: "kolara", name: "Kolara Zone (Core)", type: "Core", popular: true, desc: "Celebrated zone near Kolara gate; favored territory of iconic dominant males.", gypsiesPerShift: 24 },
            { id: "navegaon", name: "Navegaon Zone (Core)", type: "Core", popular: false, desc: "Lush meadows and serene waterbodies, lower vehicle traffic.", gypsiesPerShift: 16 },
            { id: "agarzari", name: "Agarzari Buffer Zone", type: "Buffer", popular: true, desc: "Famous for regular tiger and leopard sightings; night safari permitted.", gypsiesPerShift: 20 },
            { id: "devada-junona", name: "Devada & Junona Buffer", type: "Buffer", popular: false, desc: "Dense bamboo thickets with frequent sloth bear sightings.", gypsiesPerShift: 20 }
        ],
        keyFauna: ["Royal Bengal Tiger", "Indian Leopard", "Dhole (Asiatic Wild Dog)", "Sloth Bear", "Gaur (Indian Bison)", "Marsh Crocodile"],
        bookingAdvanceDays: 120,
        rules: [
            "Advance booking starts 120 days prior for premium core gates",
            "Tadoba core gates are closed on Tuesdays; buffer remains open",
            "Night safari permits require special buffer endorsement"
        ]
    },
    {
        id: "kaziranga",
        slug: "kaziranga-national-park",
        name: "Kaziranga National Park",
        shortName: "Kaziranga",
        state: "Assam",
        location: "Golaghat & Nagaon Districts",
        established: 1905,
        badge: "UNESCO World Heritage Site",
        heroImage: "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=600&q=80",
        rating: 4.88,
        reviewsCount: 990,
        sightingIndex: 98,
        bestSeason: "November to April (Closed during monsoon)",
        headline: "The Land of the Great One-Horned Rhinoceros & Brahmaputra Floods",
        tagline: "Two-thirds of the world's greatest rhinos roam these majestic elephant-grass savannas.",
        desc: "A UNESCO World Heritage sanctuary cradled along the floodplains of the mighty Brahmaputra River. Home to over two-thirds of the world's Great One-horned Rhinoceros population, wild water buffalos, Asian elephants, and elusive swamp deer navigating sprawling elephant-grass savannas.",
        pricing: {
            gypsyCore: 5800,
            gypsyBuffer: 4600,
            canterSeat: 1500,
            foreignerGypsy: 10500,
            guideFee: 800,
            cameraFee: 500
        },
        safariModes: ["Gypsy (6 Guests)", "Elephant Safari (Dawn)"],
        shifts: [
            { id: "morning", name: "Morning Safari", timing: "07:30 AM - 10:30 AM" },
            { id: "evening", name: "Evening Safari", timing: "01:30 PM - 04:30 PM" },
            { id: "elephant", name: "Elephant Safari (Dawn)", timing: "05:30 AM - 07:30 AM" }
        ],
        zones: [
            { id: "kohora", name: "Central Range (Kohora)", type: "Core", popular: true, desc: "Heart of Kaziranga with open swamp wetlands, wild water buffalo herds, and rhinos.", gypsiesPerShift: 40 },
            { id: "bagori", name: "Western Range (Bagori)", type: "Core", popular: true, desc: "Highest density of one-horned rhinos, elephant rides originate here.", gypsiesPerShift: 40 },
            { id: "agoratoli", name: "Eastern Range (Agoratoli)", type: "Core", popular: false, desc: "Heaven for birders; pelicans, storks, and eagles along the Brahmaputra backwaters.", gypsiesPerShift: 25 },
            { id: "burapahar", name: "Burapahar Range", type: "Core", popular: false, desc: "Hilly forested range home to capped langurs and hoolock gibbons.", gypsiesPerShift: 20 }
        ],
        keyFauna: ["Great One-horned Rhinoceros", "Wild Water Buffalo", "Asian Elephant", "Swamp Deer (Barasingha)", "Bengal Tiger"],
        bookingAdvanceDays: 60,
        rules: [
            "Elephant safari operates only in the early morning dawn shift",
            "Park operates strictly from November 1 to April 30 each season"
        ]
    },
    {
        id: "gir-lion",
        slug: "gir-lion-sanctuary",
        name: "Gir National Park & Wildlife Sanctuary",
        shortName: "Gir Forest",
        state: "Gujarat",
        location: "Junagadh & Sasan Gir",
        established: 1965,
        badge: "Only Home of Asiatic Lions",
        heroImage: "https://images.unsplash.com/photo-1614027164847-1b28caa1407c?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1614027164847-1b28caa1407c?auto=format&fit=crop&w=600&q=80",
        rating: 4.89,
        reviewsCount: 1110,
        sightingIndex: 93,
        bestSeason: "December to April",
        headline: "Walk Among the Royal Asiatic Lions of the Sasan Wilderness",
        tagline: "The only place on Earth outside Africa where lions roam free in their natural kingdom.",
        desc: "The sole remaining natural sanctuary of the majestic Asiatic Lion outside Africa. Spanning rugged deciduous teak forests, rocky ravines, and perennial riverbanks, Gir delivers an unforgettable wildlife safari tracking regal lion prides, leopards, and thriving herds of spotted chital.",
        pricing: {
            gypsyCore: 6800,
            gypsyBuffer: 4800,
            canterSeat: 1400,
            foreignerGypsy: 13500,
            guideFee: 800,
            cameraFee: 300
        },
        safariModes: ["Gypsy (6 Guests)", "Devalia Safari Bus"],
        shifts: [
            { id: "morning-1", name: "Dawn Shift", timing: "06:00 AM - 09:00 AM" },
            { id: "morning-2", name: "Morning Shift", timing: "09:00 AM - 12:00 PM" },
            { id: "evening", name: "Evening Shift", timing: "03:00 PM - 06:00 PM" }
        ],
        zones: [
            { id: "sasan-gir", name: "Gir Jungle Trail (Routes 1-13)", type: "Core", popular: true, desc: "Deep teak forest routes; authentic raw safari tracking wild lion prides.", gypsiesPerShift: 30 },
            { id: "devalia", name: "Devalia Safari Park (GIR Interpretation Zone)", type: "Buffer", popular: false, desc: "Fenced eco-tourism zone guaranteed lion and leopard sightings in open safari bus.", gypsiesPerShift: 20 }
        ],
        keyFauna: ["Asiatic Lion (Babbar Sher)", "Indian Leopard", "Chowsingha (Four-horned Antelope)", "Spotted Deer", "Striped Hyena"],
        bookingAdvanceDays: 90,
        rules: [
            "Official permit requires lead passenger original ID plus list of all co-passengers",
            "Gir Jungle Trail is strictly closed during monsoon (June 16 to October 15)"
        ]
    },
    {
        id: "bandhavgarh",
        slug: "bandhavgarh-national-park",
        name: "Bandhavgarh National Park",
        shortName: "Bandhavgarh",
        state: "Madhya Pradesh",
        location: "Umaria District",
        established: 1968,
        badge: "Crown of Madhya Pradesh",
        heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80",
        rating: 4.92,
        reviewsCount: 880,
        sightingIndex: 95,
        bestSeason: "October to June",
        headline: "Legendary White Tiger Land & 2000-Year-Old Ancient Fortress",
        tagline: "India's highest density tiger park framed by 32 hills and bamboo thickets.",
        desc: "Boasting one of the highest tiger densities in the world, Bandhavgarh is steeped in rich wilderness and history. Track majestic big cats across dramatic cliffs, lush sal valleys, and bamboo meadows set against the backdrop of the iconic 2,000-year-old Bandhavgarh Fort and Tala zone.",
        pricing: {
            gypsyCore: 8200,
            gypsyBuffer: 5800,
            canterSeat: 2100,
            foreignerGypsy: 13800,
            guideFee: 1000,
            cameraFee: 500
        },
        safariModes: ["Gypsy (6 Guests)"],
        shifts: [
            { id: "morning", name: "Morning Safari", timing: "06:00 AM - 10:00 AM" },
            { id: "evening", name: "Evening Safari", timing: "02:30 PM - 06:00 PM" }
        ],
        zones: [
            { id: "tala", name: "Tala Zone (Premium Core)", type: "Core", popular: true, desc: "The most famous zone featuring Shesh Shaiya (reclining Vishnu statue) and high tiger density.", gypsiesPerShift: 20 },
            { id: "magdhi", name: "Magdhi Zone (Core)", type: "Core", popular: true, desc: "Mixed forest and grassland with perennial waterholes frequented by tigers.", gypsiesPerShift: 20 },
            { id: "khitauli", name: "Khitauli Zone (Core)", type: "Core", popular: false, desc: "Known for wild elephants, blue bull (nilgai), and sloth bears.", gypsiesPerShift: 16 },
            { id: "dhamokhar", name: "Dhamokhar Buffer", type: "Buffer", popular: false, desc: "Active buffer corridor with steady tiger movements.", gypsiesPerShift: 20 }
        ],
        keyFauna: ["Bengal Tiger", "Indian Leopard", "Sloth Bear", "Chital", "Barking Deer", "Indian Wolf"],
        bookingAdvanceDays: 120,
        rules: [
            "Tala zone permits are released in limited daily quotas and book out weeks in advance",
            "Wednesday evening safari is closed across all MP national parks"
        ]
    },
    {
        id: "kanha",
        slug: "kanha-national-park",
        name: "Kanha Tiger Reserve",
        shortName: "Kanha",
        state: "Madhya Pradesh",
        location: "Mandla & Balaghat Districts",
        established: 1955,
        badge: "Inspiration for Jungle Book",
        heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
        rating: 4.91,
        reviewsCount: 760,
        sightingIndex: 92,
        bestSeason: "October to June",
        headline: "Vast Sal Meadows & The Real Jungle Book Experience",
        tagline: "The pristine jewel of Central India where Mowgli, Bagheera, and Shere Khan came to life.",
        desc: "The crown jewel of Central India that inspired Rudyard Kipling's The Jungle Book. Sprawling green meadows, bamboo corridors, and towering sal forests harbor healthy tiger populations, rare hardground barasingha deer, and leopards in a pristine, untouched wilderness.",
        pricing: {
            gypsyCore: 7600,
            gypsyBuffer: 5400,
            canterSeat: 1850,
            foreignerGypsy: 12800,
            guideFee: 1000,
            cameraFee: 400
        },
        safariModes: ["Gypsy (6 Guests)", "Canter (Select Zones)"],
        shifts: [
            { id: "morning", name: "Morning Safari", timing: "06:00 AM - 10:00 AM" },
            { id: "evening", name: "Evening Safari", timing: "02:30 PM - 06:00 PM" }
        ],
        zones: [
            { id: "kanha-zone", name: "Kanha Zone (Core)", type: "Core", popular: true, desc: "Open sprawling meadows where the rare Hardground Barasingha thrives.", gypsiesPerShift: 25 },
            { id: "kisli", name: "Kisli Zone (Core)", type: "Core", popular: true, desc: "Dense sal forest canopy with high predator activity.", gypsiesPerShift: 25 },
            { id: "mukki", name: "Mukki Zone (Core)", type: "Core", popular: true, desc: "Southern entrance, breathtaking landscape and quiet safari tracks.", gypsiesPerShift: 25 }
        ],
        keyFauna: ["Bengal Tiger", "Hardground Barasingha (Swamp Deer)", "Indian Gaur", "Leopard", "Dhole"],
        bookingAdvanceDays: 120,
        rules: [
            "Entry permit requires original government ID verification at forest gate",
            "Wednesday afternoon core safari remains closed as per MP forest guidelines"
        ]
    },
    {
        id: "pench",
        slug: "pench-national-park",
        name: "Pench Tiger Reserve",
        shortName: "Pench",
        state: "Madhya Pradesh & Maharashtra",
        location: "Seoni & Chhindwara",
        established: 1977,
        badge: "Real Mowgli Land",
        heroImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
        thumbImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80",
        rating: 4.87,
        reviewsCount: 650,
        sightingIndex: 91,
        bestSeason: "October to June",
        headline: "Traverse the Meandering Pench River & Teakwood Forests",
        tagline: "Rich prey base and frequent tiger sightings make Pench an intimate safari haven.",
        desc: "Straddling the scenic forested borders of Madhya Pradesh and Maharashtra, Pench is framed by the serene Pench River. Renowned for open teakwood canopies, active predator corridors, rich prey density, and intimate wildlife safaris tracking tigers and elusive wild dogs.",
        pricing: {
            gypsyCore: 7200,
            gypsyBuffer: 5000,
            canterSeat: 1750,
            foreignerGypsy: 12200,
            guideFee: 900,
            cameraFee: 400
        },
        safariModes: ["Gypsy (6 Guests)"],
        shifts: [
            { id: "morning", name: "Morning Safari", timing: "06:00 AM - 10:00 AM" },
            { id: "evening", name: "Evening Safari", timing: "02:30 PM - 06:00 PM" }
        ],
        zones: [
            { id: "turia", name: "Turia Gate (Core)", type: "Core", popular: true, desc: "The most productive gate in MP Pench, famous for Collarwali tiger cubs lineage.", gypsiesPerShift: 30 },
            { id: "karmajhiri", name: "Karmajhiri Gate (Core)", type: "Core", popular: false, desc: "Quiet and pristine, wonderful birdlife along waterholes.", gypsiesPerShift: 15 },
            { id: "rukhad", name: "Rukhad Buffer", type: "Buffer", popular: false, desc: "Scenic hill forest buffer; night safaris offered.", gypsiesPerShift: 20 }
        ],
        keyFauna: ["Bengal Tiger", "Indian Leopard", "Wild Dog", "Chital", "Wild Boar", "Indian Wolf"],
        bookingAdvanceDays: 120,
        rules: [
            "Turia permits book out rapidly on weekends and long holidays",
            "Carry binocular and zoom lens for birds and elusive canopies"
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PARKS_DATA };
}
