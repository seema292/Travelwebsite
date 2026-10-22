// Indian National Parks Safari Data
// Complete factual database with zones, pricing, seasonal rules, facts & logistics

const PARKS_DATA = [
    {
        "id": "jim-corbett",
        "slug": "jim-corbett-national-park",
        "name": "Jim Corbett National Park",
        "shortName": "Jim Corbett",
        "state": "Uttarakhand",
        "location": "Ramnagar, Nainital District",
        "established": 1936,
        "badge": "India's 1st National Park",
        "heroImage": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 1420,
        "sightingIndex": 94,
        "bestSeason": "October to June (Dhikala opens Nov 15)",
        "headline": "Roar of the Royal Bengal Tiger in the Foothills of Himalayas",
        "tagline": "India's most storied wilderness where sal forests meet the Ramganga river.",
        "desc": "India's oldest national park nestled along the scenic foothills of the Himalayas. Explore ancient sal woodlands, sprawling Dhikala grasslands, and picturesque Ramganga riverbeds renowned for majestic Royal Bengal Tigers, wild elephant herds, and over 600 species of resident and migratory birds.",
        "pricing": {
            "gypsyCore": 7500,
            "gypsyBuffer": 5500,
            "canterSeat": 2400,
            "foreignerGypsy": 12500,
            "guideFee": 1000,
            "cameraFee": 500
        },
        "safariModes": [
            "Gypsy (6 Guests)",
            "Canter (16 Guests)",
            "Elephant Safari"
        ],
        "shifts": [
            {
                "id": "morning",
                "name": "Morning Safari",
                "timing": "06:00 AM - 09:30 AM (Winter: 06:30 - 10:00)"
            },
            {
                "id": "evening",
                "name": "Evening Safari",
                "timing": "02:30 PM - 06:00 PM (Winter: 01:30 - 05:00)"
            }
        ],
        "zones": [
            {
                "id": "dhikala",
                "name": "Dhikala Zone",
                "type": "Core",
                "popular": true,
                "desc": "Famed grassland panoramic vistas and Ramganga riverbed. Home to big tiger prides and wild elephant herds. Canter safari available.",
                "gypsiesPerShift": 0,
                "cantersPerShift": 4
            },
            {
                "id": "bijrani",
                "name": "Bijrani Zone",
                "type": "Core",
                "popular": true,
                "desc": "Deep sal woodland with high tiger sighting density and picturesque Machaan viewpoints.",
                "gypsiesPerShift": 30
            },
            {
                "id": "jhirna",
                "name": "Jhirna Zone",
                "type": "Core",
                "popular": false,
                "desc": "Open round the year. Excellent terrain for sloth bear, wild boars, and leopard tracking.",
                "gypsiesPerShift": 30
            },
            {
                "id": "dhela",
                "name": "Dhela Zone",
                "type": "Core",
                "popular": false,
                "desc": "Eco-tourism zone added in 2014 with pristine waterholes and active tiger movement.",
                "gypsiesPerShift": 15
            },
            {
                "id": "durga-devi",
                "name": "Durga Devi Zone",
                "type": "Core",
                "popular": false,
                "desc": "Hilly terrain along Ramganga; paradise for birdwatchers and Mahseer angling enthusiasts.",
                "gypsiesPerShift": 15
            },
            {
                "id": "sitabani",
                "name": "Sitabani Forest",
                "type": "Buffer",
                "popular": false,
                "desc": "Mythological buffer zone steeped in Ramayana lore; no permit restriction, dense birdlife.",
                "gypsiesPerShift": 40
            },
            {
                "id": "phato",
                "name": "Phato Zone",
                "type": "Buffer",
                "popular": false,
                "desc": "Latest eco-tourism buffer zone featuring charming treehouse viewpoints.",
                "gypsiesPerShift": 50
            }
        ],
        "keyFauna": [
            "Royal Bengal Tiger",
            "Asian Elephant",
            "Gharial & Crocodile",
            "Sloth Bear",
            "Otter",
            "Over 600 Bird Species"
        ],
        "bookingAdvanceDays": 90,
        "rules": [
            "Original Photo ID (Aadhaar / Passport / Voter ID) mandatory at forest checkpost",
            "Permits once issued are strictly non-transferable and non-refundable by Forest Dept",
            "Maximum 6 adults + 2 children under 5 years allowed per 4x4 Gypsy",
            "Zero plastic & no loud music allowed inside protected zones"
        ],
        "facts": {
            "area": "1,318.54 sq. km (Core: 520.82 km\u00b2)",
            "established": 1936,
            "gatesCount": "6 Tourism Gates",
            "coreGates": 4,
            "bufferGates": 2,
            "nearestAirport": "Pantnagar (PGH) ~80 km \u00b7 Delhi (DEL) ~260 km",
            "nearestRailway": "Ramnagar Railway Station (RMR) ~3 km",
            "weeklyOff": "Open all 7 days during season",
            "sightingRate": "94% Big Cat Sighting Reliability"
        },
        "naturalistNote": {
            "quote": "The early morning mist rising over the Ramganga river, accented by frantic cheetal alarm calls, is the most thrilling prelude to catching sight of a Bengal tiger walking right along the Gypsy track.",
            "author": "Vikram Rawat",
            "role": "Chief Wildlife Naturalist (18 Years in Corbett Reserve)"
        },
        "story": "Established in 1936 as Hailey National Park and later christened in honor of the legendary author and conservationist Jim Corbett, this sanctuary is the birthplace of India's wildlife preservation movement and the launchpad for Project Tiger in 1973. Spanning dramatic elevation gradients from sub-Himalayan ridges to sweeping riverine floodplains, Corbett is dominated by dense deciduous sal (Shorea robusta) forests, Khair-Sissoo riverbeds, and expansive chaurs (grasslands) that shelter over 250 wild tigers alongside hundreds of Asian elephants.",
        "dayOnSafari": [
            {
                "time": "05:30 AM",
                "title": "Dawn Gathering at Ramnagar Forest Gate",
                "desc": "Crisp Himalayan morning air, piping hot ginger tea, and Gypsy engine revs as naturalists review government permits and assign registered forest guides."
            },
            {
                "time": "06:15 AM",
                "title": "Entering Core Forest \u2014 Tracking Fresh Pugmarks",
                "desc": "Cruising down Sambhar Road or Bijrani Machaan. Naturalists listen intently to langur bark calls and examine fresh pugmarks across damp sandbanks."
            },
            {
                "time": "11:00 AM",
                "title": "Midday Siesta & Wildlife Photo Review",
                "desc": "Return to your jungle lodge for breakfast by the river, lens calibration, and briefing on animal territorial shifts with senior safari trackers."
            },
            {
                "time": "02:45 PM",
                "title": "Afternoon Golden-Hour Riverbed Vigil",
                "desc": "Second game drive focused on Ramganga riverbanks and Dhikala grassland fringes as elephants herd to drink and big cats awaken from siestas."
            },
            {
                "time": "06:30 PM",
                "title": "Campfire Debrief & Forest Naturalist Stories",
                "desc": "Gather around the lodge bonfire under starlit Kumaon skies to share sighting logs, species tallies, and conservation tales with local trackers."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "October to February",
                "temp": "5\u00b0C \u2013 22\u00b0C",
                "desc": "Pleasant sunny afternoons, crisp mornings with scenic river fog. Excellent for Asian elephant herds, Himalayan bird migrations, and crisp photography.",
                "badge": "Scenic & Misty"
            },
            "summer": {
                "months": "March to June",
                "temp": "25\u00b0C \u2013 42\u00b0C",
                "desc": "Dry conditions force predators and prey toward the perennial Ramganga and Kosi riverbeds. Statistically the highest tiger sighting probability of the year.",
                "badge": "Peak Sightings"
            },
            "monsoon": {
                "months": "July to September",
                "temp": "22\u00b0C \u2013 32\u00b0C",
                "desc": "Core gates (Dhikala & Bijrani) close for wildlife breeding season; Jhirna, Dhela, and Sitabani remain open year-round for lush eco-tourism drives.",
                "badge": "Eco-Buffer Open"
            }
        },
        "howToReach": {
            "air": "Fly to Pantnagar Domestic Airport (80 km / 2 hrs drive) or Indira Gandhi International Airport, New Delhi (260 km / 5-6 hrs drive via NH9).",
            "rail": "Ramnagar Railway Station (RMR) is directly connected with Delhi by Ranikhet Express (15014) and Corbett Park Link Express (25014).",
            "road": "Smooth 4-lane highway from Delhi/NCR via Hapur, Moradabad, and Kashipur to Ramnagar (260 km, approx 5.5 hours drive)."
        },
        "gates": [
            {
                "name": "Dhangarhi Gate (Dhikala)",
                "type": "Core",
                "entry": "Dhangarhi Complex",
                "distance": "18 km from Ramnagar"
            },
            {
                "name": "Amdanda Gate (Bijrani)",
                "type": "Core",
                "entry": "Ranikhet Road",
                "distance": "1 km from Ramnagar"
            },
            {
                "name": "Dhela Gate (Jhirna & Dhela)",
                "type": "Core",
                "entry": "Dhela Village",
                "distance": "13 km from Ramnagar"
            },
            {
                "name": "Durga Devi Gate",
                "type": "Core",
                "entry": "Mohan Checkpost",
                "distance": "28 km from Ramnagar"
            },
            {
                "name": "Sitabani Gate",
                "type": "Buffer",
                "entry": "Ramnagar Tanda",
                "distance": "10 km from Ramnagar"
            },
            {
                "name": "Phato Gate",
                "type": "Buffer",
                "entry": "Maldhan Chaur",
                "distance": "26 km from Ramnagar"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
                "caption": "Royal Bengal Tiger on morning patrol"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
                "caption": "Close encounter in Bijrani forest"
            },
            {
                "url": "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=800&q=80",
                "caption": "Wild elephant herd along the Ramganga"
            },
            {
                "url": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
                "caption": "Spotted deer (Chital) herd at sunrise"
            },
            {
                "url": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
                "caption": "Open 4x4 Gypsy crossing the riverbed"
            },
            {
                "url": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
                "caption": "Crested Serpent Eagle on high branch"
            }
        ],
        "reviews": [
            {
                "author": "Dr. Rohit Aggarwal",
                "location": "New Delhi",
                "rating": 5,
                "time": "Last week",
                "text": "Booked 2 morning Gypsies for Bijrani zone. Our naturalist knew every call in the forest \u2014 spotted a magnificent male tiger walking leisurely alongside our Gypsy for 15 minutes! Totally transparent permit pricing."
            },
            {
                "author": "Meenakshi Sundaram",
                "location": "Bengaluru",
                "rating": 5,
                "time": "2 weeks ago",
                "text": "The Dhikala canter safari was a dream come true. We saw wild elephants bathing in the river and a tigress relaxing under the sal trees. Smooth pickup right from our Ramnagar resort."
            },
            {
                "author": "Marcus & Elena Lindqvist",
                "location": "Sweden",
                "rating": 5,
                "time": "1 month ago",
                "text": "As international wildlife photographers, we appreciated the swift assistance with forest department foreigner permits and vehicle coordination. Our driver was exceptionally polite and respectful of animal distances."
            },
            {
                "author": "Kavita Singhal",
                "location": "Chandigarh",
                "rating": 5,
                "time": "3 weeks ago",
                "text": "Seamless booking for our family. Kids loved the Jhirna safari and seeing sloth bears and sambar stags up close. Excellent customer service from start to finish."
            }
        ],
        "faqs": [
            {
                "q": "How can I book Jim Corbett safari online?",
                "a": "You can reserve your safari permit online through our platform up to 90 days in advance for Indian citizens and foreign nationals. You need to provide valid photo ID details (Aadhaar, Passport, or Voter ID), travel date, preferred shift (Morning or Evening), and zone preference. Forest permits are issued by the Forest Department and verified at the gate."
            },
            {
                "q": "What types of safari are available in Jim Corbett?",
                "a": "Two primary modes are available: 4x4 Open Gypsy Safari (up to 6 passengers per vehicle, offering maximum flexibility and private tracking) and Open Canter Safari (16-seater bus, exclusively operating in the legendary Dhikala grassland zone). Elephant rides are also offered on select seasonal shifts."
            },
            {
                "q": "Which is the best zone for tiger sighting in Corbett?",
                "a": "Dhikala and Bijrani are celebrated worldwide for the highest frequency of Royal Bengal Tiger sightings due to their vast water availability and open grasslands. Jhirna and Dhela are also very productive, particularly for year-round tracking of leopards, sloth bears, and elephants."
            },
            {
                "q": "What documents are required for Jim Corbett safari?",
                "a": "Every passenger must carry the exact original Government Photo ID (Aadhaar Card, Passport, or Voter ID Card) that was registered at the time of permit booking. Forest guards inspect physical IDs against the computerised permit roster at the entrance barrier."
            },
            {
                "q": "Are children allowed in Jim Corbett safari?",
                "a": "Yes, children of all ages are welcome on safaris. Children under 5 years old are accommodated free of charge without occupying a separate seat. Children aged 5 and above require regular registration on the vehicle permit."
            },
            {
                "q": "When does Jim Corbett National Park open and close?",
                "a": "Core zones like Dhikala and Bijrani open on November 15 and close on June 15 for the monsoon breeding season. Jhirna, Dhela, and Sitabani buffer zones remain open throughout all 12 months, subject to daily weather and track conditions."
            },
            {
                "q": "How far is Jim Corbett from Delhi and how to reach?",
                "a": "Jim Corbett (Ramnagar) is approximately 260 km from Delhi. It takes around 5 to 6 hours by road via NH9. Alternatively, you can take direct overnight or daytime express trains like the Ranikhet Express from Old Delhi Railway Station to Ramnagar."
            },
            {
                "q": "What is the recommended dress code and safari etiquette?",
                "a": "Wear muted earthy colors such as khaki, olive green, beige, or brown. Avoid bright reds, neon yellows, and stark white. Never alight from the Gypsy inside the forest, avoid talking loudly, and do not carry plastic bottles or snacks into the core reserve."
            }
        ]
    },
    {
        "id": "ranthambore",
        "slug": "ranthambore-national-park",
        "name": "Ranthambore National Park",
        "shortName": "Ranthambore",
        "state": "Rajasthan",
        "location": "Sawai Madhopur District",
        "established": 1980,
        "badge": "Royal Tiger Fort",
        "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 1680,
        "sightingIndex": 96,
        "bestSeason": "October to June (Peak sightings March-May)",
        "headline": "Where Bengal Tigers Rule Ancient Fortresses & Banyan Groves",
        "tagline": "The world's most photogenic tiger sanctuary with ancient ruins, lakes & royal cenotaphs.",
        "desc": "The world's most iconic tiger sanctuary where Royal Bengal Tigers roam past 10th-century fortresses and tranquil lake waters. Experience thrilling open-jeep game drives across historic hunting grounds, scenic banyan groves, and prime core zones like Padam Talao and Rajbagh.",
        "pricing": {
            "gypsyCore": 8800,
            "gypsyBuffer": 6500,
            "canterSeat: ": 1950,
            "canterSeat": 1950,
            "foreignerGypsy": 14500,
            "guideFee": 1200,
            "cameraFee": 600
        },
        "safariModes": [
            "Gypsy (6 Guests)",
            "Canter (20 Guests)"
        ],
        "shifts": [
            {
                "id": "morning",
                "name": "Morning Safari",
                "timing": "06:30 AM - 10:00 AM (Winter: 07:00 - 10:30)"
            },
            {
                "id": "evening",
                "name": "Evening Safari",
                "timing": "02:30 PM - 06:00 PM (Winter: 02:00 - 05:30)"
            }
        ],
        "zones": [
            {
                "id": "zone-1-5",
                "name": "Zones 1 to 5 (Premium Core)",
                "type": "Core",
                "popular": true,
                "desc": "Classic lake zones (Padam Talao, Rajbagh, Malik Talao) with legendary tiger dynasties like Machli, Arrowhead and Riddhi.",
                "gypsiesPerShift": 20
            },
            {
                "id": "zone-6-10",
                "name": "Zones 6 to 10 (Scenic Hills)",
                "type": "Buffer",
                "popular": false,
                "desc": "Hilly scenic plateau of Kundal, Balas and Kuwalji. High leopard sightings and birdwatching.",
                "gypsiesPerShift": 20
            }
        ],
        "keyFauna": [
            "Bengal Tiger",
            "Indian Leopard",
            "Marsh Crocodile",
            "Striped Hyena",
            "Sambar Deer",
            "Chital"
        ],
        "bookingAdvanceDays": 90,
        "rules": [
            "Zone allotment is decided purely by the Forest Dept computerised roster system",
            "Carry the exact ID registered during permit booking",
            "Wear jungle-toned clothes (khaki, olive green, earthy brown)"
        ],
        "facts": {
            "area": "1,700 sq. km (Core: 1,113 km\u00b2)",
            "established": 1980,
            "gatesCount": "10 Safari Zones",
            "coreGates": 5,
            "bufferGates": 5,
            "nearestAirport": "Jaipur International Airport (JAI) ~160 km",
            "nearestRailway": "Sawai Madhopur Junction (SWM) ~11 km",
            "weeklyOff": "Open all 7 days during season",
            "sightingRate": "96% Big Cat Sightings"
        },
        "naturalistNote": {
            "quote": "Watching a majestic Bengal tiger emerge from the 1,000-year-old stone gateway of Ranthambore Fort down to Padam Talao is like peering into a living royal painting.",
            "author": "Govind Singh Rathore",
            "role": "Master Tracker & Heritage Guide (22 Years Experience)"
        },
        "story": "Spanning the dramatic confluence of the Aravalli and Vindhya hill systems, Ranthambore was once the private hunting preserve of the Maharajas of Jaipur. Crowned by the monumental 10th-century UNESCO World Heritage Ranthambore Fort, the park is globally celebrated for diurnal Bengal tigers that comfortably navigate ancient royal cenotaphs, crumbling stone ramparts, and picturesque lakes filled with lotus blossoms and basking mugger crocodiles.",
        "dayOnSafari": [
            {
                "time": "06:00 AM",
                "title": "Dawn Rendezvous at Sawai Madhopur Hotel",
                "desc": "Open 4x4 Gypsy arrives at your hotel porch. Warm blankets, steaming masala chai, and a quick check of vehicle permits."
            },
            {
                "time": "06:45 AM",
                "title": "Climbing Past Ganesh Temple into Forest Core",
                "desc": "Winding through ancient stone portals. Guides listen for peacock shrieks and spotted deer alarms near Padam Talao."
            },
            {
                "time": "11:30 AM",
                "title": "Royal Heritage Rest & Fort Views",
                "desc": "Return for lunch, a dip in the resort pool, or an optional hike to the majestic cliffside ramparts of Ranthambore Fort."
            },
            {
                "time": "03:00 PM",
                "title": "Afternoon Game Drive \u2014 Lake Shallows",
                "desc": "Late afternoon sun casts a golden amber hue across Rajbagh Lake. Sambar stags feed on lotus roots as big cats stir."
            },
            {
                "time": "06:30 PM",
                "title": "Rajasthani Folk Music & Tiger Tales",
                "desc": "Evenings around the courtyard fire with traditional Rajasthani folk music and stories of legendary tigress Machli's lineage."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "October to February",
                "temp": "8\u00b0C \u2013 24\u00b0C",
                "desc": "Comfortable climate, crisp morning chills requiring light woollens. Superb conditions for birdwatching and photography.",
                "badge": "Pleasant & Clear"
            },
            "summer": {
                "months": "March to June",
                "temp": "28\u00b0C \u2013 44\u00b0C",
                "desc": "Vegetation thins out dramatically; big cats spend extensive hours resting in water bodies like Padam Talao and Rajbagh.",
                "badge": "Supreme Sighting"
            },
            "monsoon": {
                "months": "July to September",
                "temp": "24\u00b0C \u2013 34\u00b0C",
                "desc": "Core Zones 1 to 5 close for rejuvenation; buffer Zones 6 to 10 remain accessible for lush green scenery and leopard tracking.",
                "badge": "Buffer Zones Open"
            }
        },
        "howToReach": {
            "air": "Jaipur International Airport (160 km / 3 hours drive) is the closest commercial airport with domestic and international flights.",
            "rail": "Sawai Madhopur Junction (SWM) is a major stop on the main Delhi-Mumbai railway corridor with multiple premium express trains.",
            "road": "Connected via the Delhi-Mumbai Expressway and state highways from Jaipur (160 km / 3 hrs) and Agra (250 km / 5 hrs)."
        },
        "gates": [
            {
                "name": "Zone 1 (Sultanpur)",
                "type": "Core",
                "entry": "Main Gate",
                "distance": "8 km from Sawai Madhopur"
            },
            {
                "name": "Zone 2 (Jogi Mahal)",
                "type": "Core",
                "entry": "Ranthambore Road",
                "distance": "12 km from Sawai Madhopur"
            },
            {
                "name": "Zone 3 (Padam Talao)",
                "type": "Core",
                "entry": "Fort Gate",
                "distance": "14 km from Sawai Madhopur"
            },
            {
                "name": "Zone 4 (Rajbagh Lake)",
                "type": "Core",
                "entry": "Rajbagh Checkpost",
                "distance": "13 km from Sawai Madhopur"
            },
            {
                "name": "Zone 5 (Bakola)",
                "type": "Core",
                "entry": "Kachida Gate",
                "distance": "15 km from Sawai Madhopur"
            },
            {
                "name": "Zones 6 to 10 (Kundal/Balas)",
                "type": "Buffer",
                "entry": "Kailashpuri Gate",
                "distance": "16 km from Sawai Madhopur"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
                "caption": "Tiger walking past ancient ruins"
            },
            {
                "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
                "caption": "Leopard resting on rock outcrop"
            },
            {
                "url": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
                "caption": "Tiger cooling off in lake shallows"
            },
            {
                "url": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
                "caption": "Open 4x4 Gypsy on dusty safari trail"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
                "caption": "Marsh crocodile sunning on lake bank"
            },
            {
                "url": "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=800&q=80",
                "caption": "Spotted deer grazing near Banyan trees"
            }
        ],
        "reviews": [
            {
                "author": "Arunabh Mukherjee",
                "location": "Kolkata",
                "rating": 5,
                "time": "3 days ago",
                "text": "Zone 3 safari was unbelievable! Within 40 minutes we had a clear view of tigress Arrowhead drinking from Rajbagh lake. Driver was very disciplined, never revved engine unnecessarily."
            },
            {
                "author": "Sophie & David Brown",
                "location": "UK",
                "rating": 5,
                "time": "2 weeks ago",
                "text": "Very well organized trip. The Gypsy picked us up directly from our Sawai Madhopur resort. Our guide was an expert on Ranthambore dynasty history and pointed out rare bird species too."
            },
            {
                "author": "Nitin Bansal",
                "location": "Jaipur",
                "rating": 5,
                "time": "1 month ago",
                "text": "Booked both morning and afternoon safaris through Wild Path. Transparent charges, proper forest department receipts, and superb service."
            }
        ],
        "faqs": [
            {
                "q": "How does the zone system work in Ranthambore?",
                "a": "Ranthambore is partitioned into 10 safari zones. Zones 1 to 5 encompass the historic core lake circuit (Padam Talao, Rajbagh, Malik Talao) with legendary tiger dynasties. Zones 6 to 10 are scenic hill and plateau ranges with frequent leopard and tiger movement."
            },
            {
                "q": "What is the difference between Gypsy and Canter in Ranthambore?",
                "a": "A 4x4 Gypsy carries up to 6 guests, offering high trail agility, private guide attention, and flexible stopping for wildlife photography. A Canter is an elevated 20-seat open safari bus, which offers great visibility over tall grass and represents a more budget-friendly option."
            },
            {
                "q": "Which zones have the highest tiger sightings in Ranthambore?",
                "a": "Zones 1, 2, 3, 4, and 5 have historically recorded the most frequent tiger encounters, particularly near waterholes and historical ruins. However, Zones 6, 7, and 8 have also reported frequent sightings of dominant males."
            },
            {
                "q": "How many days in advance should I book Ranthambore permits?",
                "a": "Forest permits open 90 days in advance. Because Ranthambore has strict daily vehicle quotas per zone, we strongly recommend booking at least 60 to 90 days ahead, especially for weekend travel between November and May."
            },
            {
                "q": "Can we visit Ranthambore Fort during the safari?",
                "a": "Ranthambore Fort is located inside the reserve perimeter. You can visit the fort separately via private vehicle or road; however, regular safari gypsies do not double as fort sightseeing transport as they are restricted to their allotted forest route."
            }
        ]
    },
    {
        "id": "tadoba",
        "slug": "tadoba-national-park",
        "name": "Tadoba Andhari Tiger Reserve",
        "shortName": "Tadoba",
        "state": "Maharashtra",
        "location": "Chandrapur District",
        "established": 1955,
        "badge": "Highest Tiger Density",
        "heroImage": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80",
        "rating": 4.95,
        "reviewsCount": 1230,
        "sightingIndex": 97,
        "bestSeason": "October to June (Peak summer May-June at waterholes)",
        "headline": "The Jewel of Vidarbha \u2014 Unmatched Tiger Sighting Reliability",
        "tagline": "India's real tiger powerhouse where big cats stroll along open safari tracks.",
        "desc": "Celebrated as the 'Jewel of Vidarbha,' Tadoba is Central India's undisputed tiger powerhouse. Dominated by dense teak forests, bamboo thickets, and pristine Telia Lake, it offers legendary predator tracking across Moharli and Kolara gates alongside thrilling nocturnal buffer night safaris.",
        "pricing": {
            "gypsyCore": 7800,
            "gypsyBuffer": 5600,
            "canterSeat": 1800,
            "foreignerGypsy": 13000,
            "guideFee": 1000,
            "cameraFee": 400
        },
        "safariModes": [
            "Gypsy (6 Guests)",
            "Night Safari (Buffer)"
        ],
        "shifts": [
            {
                "id": "morning",
                "name": "Morning Safari",
                "timing": "06:00 AM - 10:00 AM"
            },
            {
                "id": "evening",
                "name": "Evening Safari",
                "timing": "02:00 PM - 06:00 PM"
            },
            {
                "id": "night",
                "name": "Night Safari (Buffer)",
                "timing": "07:00 PM - 10:00 PM"
            }
        ],
        "zones": [
            {
                "id": "moharli",
                "name": "Moharli Zone (Core)",
                "type": "Core",
                "popular": true,
                "desc": "The legendary gateway of Tadoba. High tiger presence around Telia Dam and Katezari.",
                "gypsiesPerShift": 32
            },
            {
                "id": "kolara",
                "name": "Kolara Zone (Core)",
                "type": "Core",
                "popular": true,
                "desc": "Celebrated zone near Kolara gate; favored territory of iconic dominant males.",
                "gypsiesPerShift": 24
            },
            {
                "id": "navegaon",
                "name": "Navegaon Zone (Core)",
                "type": "Core",
                "popular": false,
                "desc": "Lush meadows and serene waterbodies, lower vehicle traffic.",
                "gypsiesPerShift": 16
            },
            {
                "id": "agarzari",
                "name": "Agarzari Buffer Zone",
                "type": "Buffer",
                "popular": true,
                "desc": "Famous for regular tiger and leopard sightings; night safari permitted.",
                "gypsiesPerShift": 20
            },
            {
                "id": "devada-junona",
                "name": "Devada & Junona Buffer",
                "type": "Buffer",
                "popular": false,
                "desc": "Dense bamboo thickets with frequent sloth bear sightings.",
                "gypsiesPerShift": 20
            }
        ],
        "keyFauna": [
            "Royal Bengal Tiger",
            "Indian Leopard",
            "Dhole (Asiatic Wild Dog)",
            "Sloth Bear",
            "Gaur (Indian Bison)",
            "Marsh Crocodile"
        ],
        "bookingAdvanceDays": 120,
        "rules": [
            "Advance booking starts 120 days prior for premium core gates",
            "Tadoba core gates are closed on Tuesdays; buffer remains open",
            "Night safari permits require special buffer endorsement"
        ],
        "facts": {
            "area": "1,727 sq. km (Core: 625.8 km\u00b2)",
            "established": 1955,
            "gatesCount": "12 Gate Access Points",
            "coreGates": 6,
            "bufferGates": 6,
            "nearestAirport": "Dr. Babasaheb Ambedkar Int'l Airport, Nagpur (NAG) ~140 km",
            "nearestRailway": "Chandrapur (CD) ~45 km \u00b7 Nagpur (NGP) ~140 km",
            "weeklyOff": "Core gates closed on TUESDAYS (Buffer open)",
            "sightingRate": "97% Tiger Tracking Consistency"
        },
        "naturalistNote": {
            "quote": "In Tadoba, tigers do not hide. They boldly stroll down the tire ruts of Moharli and lounge beside Telia Dam like absolute monarchs.",
            "author": "Anand Shinde",
            "role": "Senior Forest Tracker & Vidarbha Naturalist (16 Years)"
        },
        "story": "Named after the revered deity 'Taru' or 'Tadoba' worshipped by local Gond tribes, Tadoba is Maharashtra's oldest and largest tiger sanctuary. Together with the Andhari Wildlife Sanctuary, it covers 1,727 sq km of pristine dry deciduous teak woods, bamboo thickets, and rolling meadows. The park has gained international renown as one of the densest wild tiger sanctuaries on earth, where fearless big cats are regularly observed raising cubs, hunting gaur, and swimming in forest water reservoirs.",
        "dayOnSafari": [
            {
                "time": "05:30 AM",
                "title": "Dawn Departure from Moharli Gate",
                "desc": "The forest awakens with the eerie calls of the brown fish owl. Morning chill gives way to warm sunrise over Irai Lake."
            },
            {
                "time": "06:30 AM",
                "title": "Prowling around Telia Lake & Katezari",
                "desc": "Gypsies line the embankments as fresh pugmarks indicate a tiger has walked towards the waterhole. Heart-stopping sightings occur in plain view."
            },
            {
                "time": "11:30 AM",
                "title": "Vidarbha Cuisine & Rest at Lodge",
                "desc": "Relax with authentic Maharashtrian lunch, compare telephoto captures, and discuss predator territory dynamics."
            },
            {
                "time": "02:30 PM",
                "title": "Afternoon Tracking \u2014 Deep Bamboo Thickets",
                "desc": "Heading into Devada or Agarzari buffers. Sloth bears dig for termites and wild dogs (dholes) pack-hunt along the forest fringe."
            },
            {
                "time": "07:00 PM",
                "title": "Optional Buffer Night Safari",
                "desc": "Equipped with specialized spotlights, explore nocturnal activity \u2014 civets, leopards, flying squirrels, and glowing eyes in the dark."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "October to February",
                "temp": "12\u00b0C \u2013 28\u00b0C",
                "desc": "Pleasant morning temperatures, lush green post-monsoon foliage, ideal for wildlife photographers seeking warm golden light.",
                "badge": "Pleasant Weather"
            },
            "summer": {
                "months": "March to June",
                "temp": "30\u00b0C \u2013 46\u00b0C",
                "desc": "The ultimate destination for hardcore tiger enthusiasts. Extreme dry heat forces tigers into artificial water troughs and Telia Lake.",
                "badge": "99% Tiger Sighting"
            },
            "monsoon": {
                "months": "July to September",
                "temp": "24\u00b0C \u2013 32\u00b0C",
                "desc": "Core gates are closed; vibrant green buffer zones remain operational, offering lush landscape photography and active wildlife.",
                "badge": "Buffer Available"
            }
        },
        "howToReach": {
            "air": "Nagpur International Airport (140 km / 2.5-3 hours drive) with regular flights from Mumbai, Delhi, Bengaluru, Hyderabad, and Kolkata.",
            "rail": "Chandrapur Railway Station (45 km / 1 hour) or Nagpur Junction (140 km / 3 hours) on the central railway line.",
            "road": "Well-paved 4-lane highways connecting Nagpur to Chandrapur and Moharli/Kolara gate entrance."
        },
        "gates": [
            {
                "name": "Moharli Gate",
                "type": "Core",
                "entry": "Moharli Village",
                "distance": "28 km from Chandrapur"
            },
            {
                "name": "Kolara Gate",
                "type": "Core",
                "entry": "Kolara Village",
                "distance": "105 km from Nagpur"
            },
            {
                "name": "Navegaon Gate",
                "type": "Core",
                "entry": "Navegaon Village",
                "distance": "120 km from Nagpur"
            },
            {
                "name": "Agarzari Gate",
                "type": "Buffer",
                "entry": "Moharli Road",
                "distance": "22 km from Chandrapur"
            },
            {
                "name": "Devada & Junona Gate",
                "type": "Buffer",
                "entry": "Junona Forest",
                "distance": "24 km from Chandrapur"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
                "caption": "Male tiger on open dirt track in Tadoba"
            },
            {
                "url": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
                "caption": "Tigress resting near Telia waterhole"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
                "caption": "Leopard descending teak tree"
            },
            {
                "url": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
                "caption": "Asiatic wild dogs (dhole) hunting pack"
            }
        ],
        "reviews": [
            {
                "author": "Pradeep Deshmukh",
                "location": "Pune",
                "rating": 5,
                "time": "1 week ago",
                "text": "Tadoba never disappoints! Saw Maya the tigress\u2019s lineage cubs near Katezari on our first morning safari. The booking process was straightforward and on time."
            },
            {
                "author": "Vikas & Shreya Joshi",
                "location": "Mumbai",
                "rating": 5,
                "time": "3 weeks ago",
                "text": "Did 3 core safaris and 1 night safari in Agarzari. Night safari was so exciting \u2014 we spotted a leopard and Indian civet cat. Highly recommended!"
            }
        ],
        "faqs": [
            {
                "q": "Are core gates closed on any specific weekday in Tadoba?",
                "a": "Yes, all core gates in Tadoba are strictly closed on Tuesdays for forest maintenance and ecological rest. However, buffer zones (like Agarzari, Devada, Junona) remain fully open on Tuesdays."
            },
            {
                "q": "What is the advance booking window for Tadoba?",
                "a": "Tadoba permits open 120 days in advance on the forest department portal. Because it is India's highest tiger sighting park, core permits for Moharli and Kolara get booked out very rapidly."
            },
            {
                "q": "What is the Tadoba Night Safari and how is it conducted?",
                "a": "Night safaris operate exclusively in designated buffer zones (such as Agarzari and Junona) from 07:00 PM to 10:00 PM. Registered 4x4 Gypsies are accompanied by licensed forest guards equipped with specialized spotlights to observe nocturnal predators like leopards and civets."
            },
            {
                "q": "How far is Tadoba from Nagpur Airport and how to reach?",
                "a": "Tadoba (Moharli / Kolara gates) is approximately 140 km from Dr. Babasaheb Ambedkar International Airport in Nagpur. The drive takes around 2.5 to 3 hours over smooth 4-lane highways."
            },
            {
                "q": "What is the best time of year to see tigers in Tadoba?",
                "a": "Tadoba provides great sightings all season, but the summer months (March through June) deliver phenomenal, near-guaranteed tiger sightings as big cats spend long hours immersed in Telia Dam and artificial waterholes."
            }
        ]
    },
    {
        "id": "kaziranga",
        "slug": "kaziranga-national-park",
        "name": "Kaziranga National Park",
        "shortName": "Kaziranga",
        "state": "Assam",
        "location": "Golaghat & Nagaon Districts",
        "established": 1905,
        "badge": "UNESCO World Heritage Site",
        "heroImage": "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=600&q=80",
        "rating": 4.88,
        "reviewsCount": 990,
        "sightingIndex": 98,
        "bestSeason": "November to April (Closed during monsoon)",
        "headline": "The Land of the Great One-Horned Rhinoceros & Brahmaputra Floods",
        "tagline": "Two-thirds of the world's greatest rhinos roam these majestic elephant-grass savannas.",
        "desc": "A UNESCO World Heritage sanctuary cradled along the floodplains of the mighty Brahmaputra River. Home to over two-thirds of the world's Great One-horned Rhinoceros population, wild water buffalos, Asian elephants, and elusive swamp deer navigating sprawling elephant-grass savannas.",
        "pricing": {
            "gypsyCore": 5800,
            "gypsyBuffer": 4600,
            "canterSeat": 1500,
            "foreignerGypsy": 10500,
            "guideFee": 800,
            "cameraFee": 500
        },
        "safariModes": [
            "Gypsy (6 Guests)",
            "Elephant Safari (Dawn)"
        ],
        "shifts": [
            {
                "id": "morning",
                "name": "Morning Safari",
                "timing": "07:30 AM - 10:30 AM"
            },
            {
                "id": "evening",
                "name": "Evening Safari",
                "timing": "01:30 PM - 04:30 PM"
            },
            {
                "id": "elephant",
                "name": "Elephant Safari (Dawn)",
                "timing": "05:30 AM - 07:30 AM"
            }
        ],
        "zones": [
            {
                "id": "kohora",
                "name": "Central Range (Kohora)",
                "type": "Core",
                "popular": true,
                "desc": "Heart of Kaziranga with open swamp wetlands, wild water buffalo herds, and rhinos.",
                "gypsiesPerShift": 40
            },
            {
                "id": "bagori",
                "name": "Western Range (Bagori)",
                "type": "Core",
                "popular": true,
                "desc": "Highest density of one-horned rhinos, elephant rides originate here.",
                "gypsiesPerShift": 40
            },
            {
                "id": "agoratoli",
                "name": "Eastern Range (Agoratoli)",
                "type": "Core",
                "popular": false,
                "desc": "Heaven for birders; pelicans, storks, and eagles along the Brahmaputra backwaters.",
                "gypsiesPerShift": 25
            },
            {
                "id": "burapahar",
                "name": "Burapahar Range",
                "type": "Core",
                "popular": false,
                "desc": "Hilly forested range home to capped langurs and hoolock gibbons.",
                "gypsiesPerShift": 20
            }
        ],
        "keyFauna": [
            "Great One-horned Rhinoceros",
            "Wild Water Buffalo",
            "Asian Elephant",
            "Swamp Deer (Barasingha)",
            "Bengal Tiger"
        ],
        "bookingAdvanceDays": 60,
        "rules": [
            "Elephant safari operates only in the early morning dawn shift",
            "Park operates strictly from November 1 to April 30 each season"
        ],
        "facts": {
            "area": "1,090 sq. km",
            "established": 1905,
            "gatesCount": "4 Forest Ranges",
            "coreGates": 4,
            "bufferGates": 0,
            "nearestAirport": "Jorhat (JRH) ~97 km \u00b7 Guwahati (GAU) ~217 km",
            "nearestRailway": "Furkating Junction (FKG) ~75 km \u00b7 Guwahati (GHY) ~220 km",
            "weeklyOff": "Open all 7 days (Nov 1 to Apr 30)",
            "sightingRate": "98% Rhino & Big Herbivore Sighting"
        },
        "naturalistNote": {
            "quote": "Standing in the open grasslands as dawn fog clears to reveal five massive prehistoric rhinos grazing peacefully beside wild water buffalos is pure magic.",
            "author": "Tarun Saikia",
            "role": "Assam Forest Naturalist & Birding Guide (19 Years)"
        },
        "story": "Located along the southern banks of the Brahmaputra River, Kaziranga was declared a reserved forest in 1905 on the initiative of Mary Curzon. It has achieved legendary status as the single greatest conservation success story in Asian wildlife history \u2014 reviving the Great One-horned Rhinoceros population from under 20 individuals in 1905 to more than 2,600 today. It holds one of the highest densities of tigers in protected areas and is designated an Important Bird Area by BirdLife International.",
        "dayOnSafari": [
            {
                "time": "05:15 AM",
                "title": "Dawn Elephant Safari in Bagori Range",
                "desc": "Board trained elephants to move quietly through tall elephant grass, coming within feet of grazing rhinos in morning mist."
            },
            {
                "time": "07:30 AM",
                "title": "Morning 4x4 Gypsy Drive in Kohora",
                "desc": "Traversing wetlands and wooden bridges. Spotting herds of wild water buffaloes, swamp deer, and otters playing in beels."
            },
            {
                "time": "11:30 AM",
                "title": "Traditional Assamese Thali & Tea Garden Walk",
                "desc": "Savor authentic regional cuisine, tour neighboring organic tea estates, and visit the Orchid and Biodiversity Park."
            },
            {
                "time": "02:00 PM",
                "title": "Afternoon Drive in Agoratoli (Eastern Range)",
                "desc": "Birdwatcher's paradise. Hundreds of pelicans, storks, fishing eagles, and wild elephants crossing the water channels."
            },
            {
                "time": "05:30 PM",
                "title": "Bihu Dance & Brahmaputra Sunset",
                "desc": "Witness golden sunset over the Brahmaputra river followed by vibrant traditional Bihu cultural folk dance performances."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "November to February",
                "temp": "10\u00b0C \u2013 25\u00b0C",
                "desc": "Crisp sunny days with misty mornings. Thousands of migratory birds arrive from Siberia. Peak season for elephant safaris.",
                "badge": "Best Birding"
            },
            "summer": {
                "months": "March to April",
                "temp": "20\u00b0C \u2013 32\u00b0C",
                "desc": "Grass is controlled-burnt revealing incredible wide-open landscapes; easiest time to spot tigers, rhinos, and wild buffalo.",
                "badge": "Clear Views"
            },
            "monsoon": {
                "months": "May to October",
                "temp": "25\u00b0C \u2013 35\u00b0C",
                "desc": "Completely closed to tourists due to extensive Brahmaputra river flooding. Animals migrate to Karbi Anglong highlands.",
                "badge": "Closed (Floods)"
            }
        },
        "howToReach": {
            "air": "Fly to Jorhat Airport (97 km / 2 hours drive) or Lokpriya Gopinath Bordoloi International Airport, Guwahati (217 km / 4.5 hours drive).",
            "rail": "Furkating Junction (75 km) or Guwahati Railway Station (220 km) with extensive train links across India.",
            "road": "Well-maintained 4-lane Asian Highway 1 (NH-37) runs straight through Kaziranga, connecting Guwahati and Jorhat."
        },
        "gates": [
            {
                "name": "Kohora (Central Range)",
                "type": "Core",
                "entry": "Kohora Town",
                "distance": "At Kohora Highway"
            },
            {
                "name": "Bagori (Western Range)",
                "type": "Core",
                "entry": "Bagori Gate",
                "distance": "12 km from Kohora"
            },
            {
                "name": "Agoratoli (Eastern Range)",
                "type": "Core",
                "entry": "Agoratoli Gate",
                "distance": "22 km from Kohora"
            },
            {
                "name": "Burapahar (Ghorakati)",
                "type": "Core",
                "entry": "Ghorakati Checkpost",
                "distance": "35 km from Kohora"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=800&q=80",
                "caption": "One-horned rhino grazing in elephant grass"
            },
            {
                "url": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
                "caption": "Wild water buffalo herd in Kaziranga wetlands"
            },
            {
                "url": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
                "caption": "Asian elephant herd crossing river"
            }
        ],
        "reviews": [
            {
                "author": "Debashish Roy",
                "location": "Guwahati",
                "rating": 5,
                "time": "2 weeks ago",
                "text": "The elephant safari at Bagori was extraordinary. We were within 10 feet of a mother rhino and baby calf. Unforgettable experience."
            }
        ],
        "faqs": [
            {
                "q": "When is Kaziranga National Park open for tourists?",
                "a": "Kaziranga is officially open for tourism only from November 1st to April 30th each season. It remains closed from May to October due to extensive monsoon floods caused by the Brahmaputra river."
            },
            {
                "q": "How can I book elephant safari in Kaziranga?",
                "a": "Elephant safaris operate only during the early morning dawn shifts (05:30 AM and 06:30 AM) in Bagori and Kohora ranges. Because elephant slots are strictly limited by the forest department, early advance reservation is essential."
            },
            {
                "q": "Which range is best for rhino sightings in Kaziranga?",
                "a": "The Western Range (Bagori) has the highest concentration of Great One-horned Rhinoceros, while the Central Range (Kohora) offers expansive wetland scenery with wild buffalos, elephants, and rich birdlife."
            },
            {
                "q": "What animals can be spotted in Kaziranga besides Rhinos?",
                "a": "Kaziranga is home to the 'Big Five' of Asia: the Great One-horned Rhino, Asian Elephant, Royal Bengal Tiger, Wild Water Buffalo, and Eastern Swamp Deer (Barasingha), along with hundreds of bird species."
            }
        ]
    },
    {
        "id": "gir-lion",
        "slug": "gir-lion-sanctuary",
        "name": "Gir National Park & Wildlife Sanctuary",
        "shortName": "Gir Forest",
        "state": "Gujarat",
        "location": "Junagadh & Sasan Gir",
        "established": 1965,
        "badge": "Only Home of Asiatic Lions",
        "heroImage": "https://images.unsplash.com/photo-1614027164847-1b28caa1407c?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1614027164847-1b28caa1407c?auto=format&fit=crop&w=600&q=80",
        "rating": 4.89,
        "reviewsCount": 1110,
        "sightingIndex": 93,
        "bestSeason": "December to April",
        "headline": "Walk Among the Royal Asiatic Lions of the Sasan Wilderness",
        "tagline": "The only place on Earth outside Africa where lions roam free in their natural kingdom.",
        "desc": "The sole remaining natural sanctuary of the majestic Asiatic Lion outside Africa. Spanning rugged deciduous teak forests, rocky ravines, and perennial riverbanks, Gir delivers an unforgettable wildlife safari tracking regal lion prides, leopards, and thriving herds of spotted chital.",
        "pricing": {
            "gypsyCore": 6800,
            "gypsyBuffer": 4800,
            "canterSeat": 1400,
            "foreignerGypsy": 13500,
            "guideFee": 800,
            "cameraFee": 300
        },
        "safariModes": [
            "Gypsy (6 Guests)",
            "Devalia Safari Bus"
        ],
        "shifts": [
            {
                "id": "morning-1",
                "name": "Dawn Shift",
                "timing": "06:00 AM - 09:00 AM"
            },
            {
                "id": "morning-2",
                "name": "Morning Shift",
                "timing": "09:00 AM - 12:00 PM"
            },
            {
                "id": "evening",
                "name": "Evening Shift",
                "timing": "03:00 PM - 06:00 PM"
            }
        ],
        "zones": [
            {
                "id": "sasan-gir",
                "name": "Gir Jungle Trail (Routes 1-13)",
                "type": "Core",
                "popular": true,
                "desc": "Deep teak forest routes; authentic raw safari tracking wild lion prides.",
                "gypsiesPerShift": 30
            },
            {
                "id": "devalia",
                "name": "Devalia Safari Park (GIR Interpretation Zone)",
                "type": "Buffer",
                "popular": false,
                "desc": "Fenced eco-tourism zone guaranteed lion and leopard sightings in open safari bus.",
                "gypsiesPerShift": 20
            }
        ],
        "keyFauna": [
            "Asiatic Lion (Babbar Sher)",
            "Indian Leopard",
            "Chowsingha (Four-horned Antelope)",
            "Spotted Deer",
            "Striped Hyena"
        ],
        "bookingAdvanceDays": 90,
        "rules": [
            "Official permit requires lead passenger original ID plus list of all co-passengers",
            "Gir Jungle Trail is strictly closed during monsoon (June 16 to October 15)"
        ],
        "facts": {
            "area": "1,412 sq. km (National Park: 258 km\u00b2)",
            "established": 1965,
            "gatesCount": "Sinh Sadan Reception Centre",
            "coreGates": 1,
            "bufferGates": 1,
            "nearestAirport": "Keshod (70 km) \u00b7 Diu (100 km) \u00b7 Rajkot (160 km)",
            "nearestRailway": "Junagadh (JND) ~55 km \u00b7 Veraval (VRL) ~45 km",
            "weeklyOff": "Devalia closed on WEDNESDAYS",
            "sightingRate": "93% Lion Pride Sighting Rate"
        },
        "naturalistNote": {
            "quote": "There is no majesty on earth quite like observing an Asiatic male lion with his distinctive belly fold and shorter mane resting beneath the Gir teak trees.",
            "author": "Bhavesh Makwana",
            "role": "Sasan Gir Senior Naturalist (15 Years)"
        },
        "story": "Gir is the sole abode of the Asiatic Lion (Panthera leo persica), once on the brink of extinction with merely a dozen individuals left in the early 20th century. Saved through the decisive intervention of the Nawab of Junagadh and continued conservation by the Gujarat Forest Department, the population has grown to over 674 lions. The habitat consists of dry deciduous scrub forest, rocky ridges, and seven perennial rivers, co-inhabited peacefully with indigenous pastoral Maldhari tribes.",
        "dayOnSafari": [
            {
                "time": "05:45 AM",
                "title": "Check-in at Sinh Sadan Reception Centre",
                "desc": "Driver and authorized forest department tracker meet you at Sinh Sadan. Verification of government biometric permit."
            },
            {
                "time": "06:15 AM",
                "title": "Tracking Along Gir Jungle Trail (Route 1 to 13)",
                "desc": "Entering the quiet teak forests. Keep an eye out on sandy riverbeds where lion prides frequently bask at sunrise."
            },
            {
                "time": "10:30 AM",
                "title": "Kathiyawadi Brunch & Maldhari Village Visit",
                "desc": "Enjoy traditional Kathiyawadi cuisine featuring Bajra Rotla and garlic chutney. Visit a traditional Maldhari Ness settlement."
            },
            {
                "time": "03:15 PM",
                "title": "Afternoon Drive to Kamleshwar Dam",
                "desc": "Scenic reservoir inside the core forest, famous as the largest marsh crocodile nursery in Western India."
            },
            {
                "time": "06:15 PM",
                "title": "Return to Sasan Gir & Souvenir Shopping",
                "desc": "Shop for pure Gir Forest wild honey, famous Gir Kesar mango preserves, and handcrafted Saurashtra embroidery."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "December to March",
                "temp": "12\u00b0C \u2013 28\u00b0C",
                "desc": "Crisp morning temperatures, perfect weather for family safaris and daytime tracking across all 13 forest routes.",
                "badge": "Pleasant Weather"
            },
            "summer": {
                "months": "April to June",
                "temp": "28\u00b0C \u2013 43\u00b0C",
                "desc": "Dry golden scrubland. Lions gather near perennial streams and artificial water points, guaranteeing stellar photo ops.",
                "badge": "Peak Sightings"
            },
            "monsoon": {
                "months": "June 16 to October 15",
                "temp": "24\u00b0C \u2013 32\u00b0C",
                "desc": "Gir Jungle Trail is completely closed for the lion mating season; Devalia Safari Park remains open.",
                "badge": "Devalia Open"
            }
        },
        "howToReach": {
            "air": "Keshod Airport (70 km / 1.5 hrs), Diu Airport (100 km / 2.5 hrs), or Rajkot International Airport (160 km / 3.5 hrs).",
            "rail": "Junagadh Railway Station (55 km) or Veraval (45 km) with direct trains from Ahmedabad, Mumbai, and Delhi.",
            "road": "Well-surfaced state highways from Ahmedabad (360 km / 7 hrs) and Rajkot (160 km / 3.5 hrs)."
        },
        "gates": [
            {
                "name": "Sinh Sadan (Gir Jungle Trail)",
                "type": "Core",
                "entry": "Sasan Gir Town",
                "distance": "Central Sasan"
            },
            {
                "name": "Devalia Safari Park",
                "type": "Buffer",
                "entry": "Devalia Reception",
                "distance": "12 km from Sasan Gir"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1614027164847-1b28caa1407c?auto=format&fit=crop&w=800&q=80",
                "caption": "Male Asiatic lion with dark mane in Gir"
            },
            {
                "url": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
                "caption": "Lioness with cubs resting under teak tree"
            },
            {
                "url": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
                "caption": "Spotted chital herd in dry deciduous scrub"
            }
        ],
        "reviews": [
            {
                "author": "Hitesh Patel",
                "location": "Ahmedabad",
                "rating": 5,
                "time": "1 month ago",
                "text": "Gir is pure pride of Gujarat! We saw a pride of 4 lions including a massive male lion on Route 6. Booking through Wild Path Safari was smooth and hassle-free."
            }
        ],
        "faqs": [
            {
                "q": "Can I see lions in Devalia Safari Park if core permits are full?",
                "a": "Yes! Devalia Safari Park (Gir Interpretation Zone) is a specially fenced eco-tourism reserve that offers high probability lion sightings in 45-minute open mini-bus safaris, ideal if core permits are sold out."
            },
            {
                "q": "When does the Gir Jungle Trail close for monsoon?",
                "a": "The main Gir Jungle Trail closes on June 16th every year for the annual lion breeding season and reopens on October 16th. Devalia Safari Park remains open year-round except on Wednesdays."
            },
            {
                "q": "What is the difference between Gir Jungle Trail and Devalia Safari?",
                "a": "Gir Jungle Trail (Routes 1 to 13) is a 3-hour authentic wilderness open Gypsy safari across deep natural teak forests. Devalia is a 412-hectare fenced interpretation park offering quick, guaranteed sightings in safari buses."
            },
            {
                "q": "What is the closest airport to Gir National Park?",
                "a": "Keshod Airport is the closest (70 km), followed by Diu Airport (100 km) and Rajkot International Airport (160 km), with frequent daily flights from Mumbai and Delhi."
            }
        ]
    },
    {
        "id": "bandhavgarh",
        "slug": "bandhavgarh-national-park",
        "name": "Bandhavgarh National Park",
        "shortName": "Bandhavgarh",
        "state": "Madhya Pradesh",
        "location": "Umaria District",
        "established": 1968,
        "badge": "Crown of Madhya Pradesh",
        "heroImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80",
        "rating": 4.92,
        "reviewsCount": 880,
        "sightingIndex": 95,
        "bestSeason": "October to June",
        "headline": "Legendary White Tiger Land & 2000-Year-Old Ancient Fortress",
        "tagline": "India's highest density tiger park framed by 32 hills and bamboo thickets.",
        "desc": "Boasting one of the highest tiger densities in the world, Bandhavgarh is steeped in rich wilderness and history. Track majestic big cats across dramatic cliffs, lush sal valleys, and bamboo meadows set against the backdrop of the iconic 2,000-year-old Bandhavgarh Fort and Tala zone.",
        "pricing": {
            "gypsyCore": 8200,
            "gypsyBuffer": 5800,
            "canterSeat": 2100,
            "foreignerGypsy": 13800,
            "guideFee": 1000,
            "cameraFee": 500
        },
        "safariModes": [
            "Gypsy (6 Guests)"
        ],
        "shifts": [
            {
                "id": "morning",
                "name": "Morning Safari",
                "timing": "06:00 AM - 10:00 AM"
            },
            {
                "id": "evening",
                "name": "Evening Safari",
                "timing": "02:30 PM - 06:00 PM"
            }
        ],
        "zones": [
            {
                "id": "tala",
                "name": "Tala Zone (Premium Core)",
                "type": "Core",
                "popular": true,
                "desc": "The most famous zone featuring Shesh Shaiya (reclining Vishnu statue) and high tiger density.",
                "gypsiesPerShift": 20
            },
            {
                "id": "magdhi",
                "name": "Magdhi Zone (Core)",
                "type": "Core",
                "popular": true,
                "desc": "Mixed forest and grassland with perennial waterholes frequented by tigers.",
                "gypsiesPerShift": 20
            },
            {
                "id": "khitauli",
                "name": "Khitauli Zone (Core)",
                "type": "Core",
                "popular": false,
                "desc": "Known for wild elephants, blue bull (nilgai), and sloth bears.",
                "gypsiesPerShift": 16
            },
            {
                "id": "dhamokhar",
                "name": "Dhamokhar Buffer",
                "type": "Buffer",
                "popular": false,
                "desc": "Active buffer corridor with steady tiger movements.",
                "gypsiesPerShift": 20
            }
        ],
        "keyFauna": [
            "Bengal Tiger",
            "Indian Leopard",
            "Sloth Bear",
            "Chital",
            "Barking Deer",
            "Indian Wolf"
        ],
        "bookingAdvanceDays": 120,
        "rules": [
            "Tala zone permits are released in limited daily quotas and book out weeks in advance",
            "Wednesday evening safari is closed across all MP national parks"
        ],
        "facts": {
            "area": "1,536 sq. km (Core: 716 km\u00b2)",
            "established": 1968,
            "gatesCount": "6 Tourism Gates",
            "coreGates": 3,
            "bufferGates": 3,
            "nearestAirport": "Jabalpur Airport (JLR) ~165 km",
            "nearestRailway": "Umaria (UMR) ~32 km \u00b7 Katni (KTE) ~100 km",
            "weeklyOff": "Wednesday evening safari closed across all gates",
            "sightingRate": "95% Tiger Sighting Density"
        },
        "naturalistNote": {
            "quote": "Bandhavgarh has the highest density of Royal Bengal Tigers in the world. When you drive down the bamboo corridors of Tala, the hair on your arms stands on end.",
            "author": "Pushpendra Singh",
            "role": "Bandhavgarh Heritage Guide (17 Years)"
        },
        "story": "Steeped in mythological lore from the Ramayana, Bandhavgarh takes its name from the legendary hill fortress said to have been gifted by Lord Rama to his brother Lakshmana ('Bandhav' brother, 'Garh' fort). Geologically formed of 32 hillocks surrounded by dense sal forests and bamboo ravines, the park holds the distinction of having the world's highest tiger breeding density.",
        "dayOnSafari": [
            {
                "time": "05:45 AM",
                "title": "Dawn Entry at Tala Gate",
                "desc": "Check-in at the iconic Tala barrier. Chill in the air, winding through towering sal trees under the shadow of the ancient fort."
            },
            {
                "time": "07:00 AM",
                "title": "Visit Shesh Shaiya & Chakradhara Meadow",
                "desc": "Gaze upon the 10th-century reclining Vishnu statue, tracking tigers that frequently cross the Chakradhara grasslands."
            },
            {
                "time": "11:30 AM",
                "title": "Midday Relax & Photography Review",
                "desc": "Return to resort for lunch, editing high-speed continuous bursts of tiger action shots, and pool relaxation."
            },
            {
                "time": "03:00 PM",
                "title": "Afternoon Drive in Magdhi or Khitauli",
                "desc": "Explore mixed bamboo valleys and Sukhi Dam, spotting wild elephants, leopards, and sloth bears."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "October to February",
                "temp": "6\u00b0C \u2013 24\u00b0C",
                "desc": "Cold morning temperatures with heavy forest mist. Splendid lighting for sal forest photography.",
                "badge": "Crisp Morning"
            },
            "summer": {
                "months": "March to June",
                "temp": "28\u00b0C \u2013 44\u00b0C",
                "desc": "Dried bamboo and leafless trees make tiger sightings exceptionally easy around waterholes.",
                "badge": "High Sighting"
            },
            "monsoon": {
                "months": "July to September",
                "temp": "24\u00b0C \u2013 32\u00b0C",
                "desc": "Core gates closed for rainy season; buffer gates remain open.",
                "badge": "Buffer Open"
            }
        },
        "howToReach": {
            "air": "Jabalpur Airport (165 km / 3.5 hrs drive) with direct flights from Delhi, Mumbai, and Hyderabad.",
            "rail": "Umaria Railway Station (32 km / 45 mins drive) or Katni Junction (100 km / 2 hrs drive).",
            "road": "Connected via state highways from Jabalpur (165 km), Katni (100 km), and Khajuraho (240 km)."
        },
        "gates": [
            {
                "name": "Tala Gate (Core)",
                "type": "Core",
                "entry": "Tala Village",
                "distance": "At Tala Hub"
            },
            {
                "name": "Magdhi Gate (Core)",
                "type": "Core",
                "entry": "Magdhi Checkpost",
                "distance": "8 km from Tala"
            },
            {
                "name": "Khitauli Gate (Core)",
                "type": "Core",
                "entry": "Khitauli Village",
                "distance": "12 km from Tala"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
                "caption": "Tiger relaxing on ancient rocks in Bandhavgarh"
            }
        ],
        "reviews": [
            {
                "author": "Ananya Sen",
                "location": "Kolkata",
                "rating": 5,
                "time": "2 weeks ago",
                "text": "Bandhavgarh is pure heaven for tiger lovers. In 4 safaris we saw 7 different tigers! The Tala zone permit is worth every penny."
            }
        ],
        "faqs": [
            {
                "q": "Is Wednesday afternoon safari closed in Bandhavgarh?",
                "a": "Yes, following Madhya Pradesh Forest Department policy, all national parks in MP (including Bandhavgarh, Kanha, and Pench) are closed for safaris on Wednesday afternoons."
            },
            {
                "q": "Which zone is best for tiger sighting in Bandhavgarh?",
                "a": "Tala Zone is world-famous for the highest tiger density and historic monuments like Shesh Shaiya. Magdhi and Khitauli zones are also extremely productive with high tiger and leopard sightings."
            },
            {
                "q": "Can tourists visit the ancient Bandhavgarh Fort?",
                "a": "Due to recent conservation and security directives, regular Gypsy routes do not climb the hilltop fort itself; however, the lower reaches and the iconic 10th-century reclining Vishnu statue (Shesh Shaiya) are included in Tala zone safaris."
            },
            {
                "q": "What is the advance booking window for Bandhavgarh?",
                "a": "Permits open 120 days in advance on the MP Forest Department portal. Tala zone permits sell out within minutes of release, so booking early is crucial."
            }
        ]
    },
    {
        "id": "kanha",
        "slug": "kanha-national-park",
        "name": "Kanha Tiger Reserve",
        "shortName": "Kanha",
        "state": "Madhya Pradesh",
        "location": "Mandla & Balaghat Districts",
        "established": 1955,
        "badge": "Inspiration for Jungle Book",
        "heroImage": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80",
        "rating": 4.91,
        "reviewsCount": 760,
        "sightingIndex": 92,
        "bestSeason": "October to June",
        "headline": "Vast Sal Meadows & The Real Jungle Book Experience",
        "tagline": "The pristine jewel of Central India where Mowgli, Bagheera, and Shere Khan came to life.",
        "desc": "The crown jewel of Central India that inspired Rudyard Kipling's The Jungle Book. Sprawling green meadows, bamboo corridors, and towering sal forests harbor healthy tiger populations, rare hardground barasingha deer, and leopards in a pristine, untouched wilderness.",
        "pricing": {
            "gypsyCore": 7600,
            "gypsyBuffer": 5400,
            "canterSeat": 1850,
            "foreignerGypsy": 12800,
            "guideFee": 1000,
            "cameraFee": 400
        },
        "safariModes": [
            "Gypsy (6 Guests)",
            "Canter (Select Zones)"
        ],
        "shifts": [
            {
                "id": "morning",
                "name": "Morning Safari",
                "timing": "06:00 AM - 10:00 AM"
            },
            {
                "id": "evening",
                "name": "Evening Safari",
                "timing": "02:30 PM - 06:00 PM"
            }
        ],
        "zones": [
            {
                "id": "kanha-zone",
                "name": "Kanha Zone (Core)",
                "type": "Core",
                "popular": true,
                "desc": "Open sprawling meadows where the rare Hardground Barasingha thrives.",
                "gypsiesPerShift": 25
            },
            {
                "id": "kisli",
                "name": "Kisli Zone (Core)",
                "type": "Core",
                "popular": true,
                "desc": "Dense sal forest canopy with high predator activity.",
                "gypsiesPerShift": 25
            },
            {
                "id": "mukki",
                "name": "Mukki Zone (Core)",
                "type": "Core",
                "popular": true,
                "desc": "Southern entrance, breathtaking landscape and quiet safari tracks.",
                "gypsiesPerShift": 25
            }
        ],
        "keyFauna": [
            "Bengal Tiger",
            "Hardground Barasingha (Swamp Deer)",
            "Indian Gaur",
            "Leopard",
            "Dhole"
        ],
        "bookingAdvanceDays": 120,
        "rules": [
            "Entry permit requires original government ID verification at forest gate",
            "Wednesday afternoon core safari remains closed as per MP forest guidelines"
        ],
        "facts": {
            "area": "2,074 sq. km (Core: 940 km\u00b2)",
            "established": 1955,
            "gatesCount": "3 Main Gate Portals",
            "coreGates": 3,
            "bufferGates": 2,
            "nearestAirport": "Jabalpur (JLR) ~160 km \u00b7 Raipur (RPR) ~250 km",
            "nearestRailway": "Gondia (G) ~145 km \u00b7 Jabalpur (JBP) ~160 km",
            "weeklyOff": "Wednesday evening closed",
            "sightingRate": "92% Wildlife Density"
        },
        "naturalistNote": {
            "quote": "Standing in the Kanha meadows at sunrise as hundreds of golden barasinghas graze in mist while a tiger emerges from sal woods is the true soul of India's wild forests.",
            "author": "Mahesh Baghel",
            "role": "Kanha Forest Naturalist (20 Years)"
        },
        "story": "Renowned globally as the backdrop of Rudyard Kipling's immortal classic The Jungle Book, Kanha is considered one of the finest managed sanctuaries in the world. It is the sole refuge where the endangered Hardground Barasingha (Rucervus duvaucelii branderi) was miraculously brought back from the verge of extinction. Massive sal forests and sweeping maidans (grasslands) create an unmatched wilderness tapestry.",
        "dayOnSafari": [
            {
                "time": "05:45 AM",
                "title": "Dawn Gate Entry at Khatia or Mukki",
                "desc": "Chilly morning air as Gypsies queue for permit checks. The forest opens into vast dew-kissed meadows."
            },
            {
                "time": "06:30 AM",
                "title": "Cruising the Kanha Meadows",
                "desc": "Observe huge herds of Barasingha and Indian Gaur (Bison) while listening for Chital and Langur danger barks."
            },
            {
                "time": "11:30 AM",
                "title": "Jungle Lodge Relaxation",
                "desc": "Hot lunch, reading in hammocks under mahua trees, and reviewing morning camera captures."
            },
            {
                "time": "02:45 PM",
                "title": "Afternoon Drive to Bamni Dadar (Sunset Point)",
                "desc": "Panoramic vistas over the Maikal range as big cats begin their evening prowl."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "October to February",
                "temp": "2\u00b0C \u2013 22\u00b0C",
                "desc": "Frosty mornings with sub-zero dips in meadows; exceptional misty photography.",
                "badge": "Frost & Mist"
            },
            "summer": {
                "months": "March to June",
                "temp": "25\u00b0C \u2013 42\u00b0C",
                "desc": "Dry heat concentrates wildlife around waterholes.",
                "badge": "Peak Sighting"
            },
            "monsoon": {
                "months": "July to September",
                "temp": "22\u00b0C \u2013 30\u00b0C",
                "desc": "Closed for monsoon breeding season.",
                "badge": "Closed"
            }
        },
        "howToReach": {
            "air": "Jabalpur Airport (160 km / 3.5 hrs) or Raipur International Airport (250 km / 5 hrs).",
            "rail": "Gondia Junction (145 km) or Jabalpur Junction (160 km).",
            "road": "Smooth state highways connecting Jabalpur, Mandla, and Balaghat."
        },
        "gates": [
            {
                "name": "Khatia Gate (Kisli & Kanha)",
                "type": "Core",
                "entry": "Khatia Village",
                "distance": "Mandla Road"
            },
            {
                "name": "Mukki Gate",
                "type": "Core",
                "entry": "Mukki Hub",
                "distance": "Balaghat Road"
            },
            {
                "name": "Sarhi Gate",
                "type": "Core",
                "entry": "Northern Forest",
                "distance": "North of Reserve"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
                "caption": "Hardground Barasingha in Kanha meadows"
            }
        ],
        "reviews": [
            {
                "author": "Siddharth Menon",
                "location": "Chennai",
                "rating": 5,
                "time": "3 weeks ago",
                "text": "Kanha is the most scenic forest in India. Seeing a tiger walking across the wide open grassland was truly majestic."
            }
        ],
        "faqs": [
            {
                "q": "What makes Kanha unique among Indian tiger reserves?",
                "a": "Kanha is the only place in the world to see the rare Hardground Barasingha deer, and its sweeping meadows combined with dense sal forest create the most visually stunning wildlife park in Asia."
            },
            {
                "q": "Are core gates closed on Wednesday afternoons in Kanha?",
                "a": "Yes, as per Madhya Pradesh state forest regulations, all core safari gates are closed on Wednesday afternoons across Kanha."
            },
            {
                "q": "Which gate should I choose in Kanha \u2014 Khatia or Mukki?",
                "a": "Khatia gate accesses the Kisli and Kanha core zones from the Mandla side. Mukki gate is situated on the Balaghat side and offers serene, less crowded sal woodlands. Both have exceptional tiger sighting track records."
            },
            {
                "q": "How far is Kanha from Jabalpur and Raipur airports?",
                "a": "Kanha is approximately 160 km (3.5 hours drive) from Jabalpur Airport and about 250 km (5 hours drive) from Raipur International Airport."
            }
        ]
    },
    {
        "id": "pench",
        "slug": "pench-national-park",
        "name": "Pench Tiger Reserve",
        "shortName": "Pench",
        "state": "Madhya Pradesh & Maharashtra",
        "location": "Seoni & Chhindwara",
        "established": 1977,
        "badge": "Real Mowgli Land",
        "heroImage": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
        "thumbImage": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80",
        "rating": 4.87,
        "reviewsCount": 650,
        "sightingIndex": 91,
        "bestSeason": "October to June",
        "headline": "Traverse the Meandering Pench River & Teakwood Forests",
        "tagline": "Rich prey base and frequent tiger sightings make Pench an intimate safari haven.",
        "desc": "Straddling the scenic forested borders of Madhya Pradesh and Maharashtra, Pench is framed by the serene Pench River. Renowned for open teakwood canopies, active predator corridors, rich prey density, and intimate wildlife safaris tracking tigers and elusive wild dogs.",
        "pricing": {
            "gypsyCore": 7200,
            "gypsyBuffer": 5000,
            "canterSeat": 1750,
            "foreignerGypsy": 12200,
            "guideFee": 900,
            "cameraFee": 400
        },
        "safariModes": [
            "Gypsy (6 Guests)"
        ],
        "shifts": [
            {
                "id": "morning",
                "name": "Morning Safari",
                "timing": "06:00 AM - 10:00 AM"
            },
            {
                "id": "evening",
                "name": "Evening Safari",
                "timing": "02:30 PM - 06:00 PM"
            }
        ],
        "zones": [
            {
                "id": "turia",
                "name": "Turia Gate (Core)",
                "type": "Core",
                "popular": true,
                "desc": "The most productive gate in MP Pench, famous for Collarwali tiger cubs lineage.",
                "gypsiesPerShift": 30
            },
            {
                "id": "karmajhiri",
                "name": "Karmajhiri Gate (Core)",
                "type": "Core",
                "popular": false,
                "desc": "Quiet and pristine, wonderful birdlife along waterholes.",
                "gypsiesPerShift": 15
            },
            {
                "id": "rukhad",
                "name": "Rukhad Buffer",
                "type": "Buffer",
                "popular": false,
                "desc": "Scenic hill forest buffer; night safaris offered.",
                "gypsiesPerShift": 20
            }
        ],
        "keyFauna": [
            "Bengal Tiger",
            "Indian Leopard",
            "Wild Dog",
            "Chital",
            "Wild Boar",
            "Indian Wolf"
        ],
        "bookingAdvanceDays": 120,
        "rules": [
            "Turia permits book out rapidly on weekends and long holidays",
            "Carry binocular and zoom lens for birds and elusive canopies"
        ],
        "facts": {
            "area": "1,180 sq. km (Core: 411 km\u00b2 MP side)",
            "established": 1977,
            "gatesCount": "5 Tourism Gates",
            "coreGates": 3,
            "bufferGates": 2,
            "nearestAirport": "Dr. Babasaheb Ambedkar Int'l Airport, Nagpur (NAG) ~95 km",
            "nearestRailway": "Nagpur Junction (NGP) ~90 km \u00b7 Seoni (SEY) ~30 km",
            "weeklyOff": "Wednesday evening closed on MP side",
            "sightingRate": "91% Big Cat Sighting Index"
        },
        "naturalistNote": {
            "quote": "Pench's open teak forests allow you to spot wildlife from great distances. Watching a tigress hunt with her cubs along the Pench riverbed is an intimate wilderness experience.",
            "author": "Sunil Uikey",
            "role": "Pench Wildlife Guide (14 Years)"
        },
        "story": "Pench National Park derives its name from the pristine Pench River that flows north to south through the park, dividing it into nearly equal eastern and western halves. The undulating terrain is covered with dry mixed forest and magnificent teak canopies. Pench is celebrated as the authentic geographic setting for Rudyard Kipling's Seeonee wolf-pack stories in The Jungle Book.",
        "dayOnSafari": [
            {
                "time": "05:45 AM",
                "title": "Check-in at Turia Gate",
                "desc": "Just 2 hours drive from Nagpur airport, queue at the vibrant Turia barrier."
            },
            {
                "time": "06:30 AM",
                "title": "Tracking Along the Pench River",
                "desc": "Explore Alikatta grasslands and water tanks where tigers often drink in golden morning light."
            },
            {
                "time": "11:30 AM",
                "title": "Midday Pool & Forest Lodge Lunch",
                "desc": "Relax in comfortable eco-resorts with views of the buffer canopy."
            },
            {
                "time": "03:00 PM",
                "title": "Afternoon Game Drive in Karmajhiri",
                "desc": "Quiet, less traveled tracks; frequent leopard sightings on rocky hillocks."
            }
        ],
        "seasonGuide": {
            "winter": {
                "months": "October to February",
                "temp": "10\u00b0C \u2013 26\u00b0C",
                "desc": "Pleasant and refreshing. Great for birdwatching and photography.",
                "badge": "Pleasant"
            },
            "summer": {
                "months": "March to June",
                "temp": "28\u00b0C \u2013 44\u00b0C",
                "desc": "Peak tiger sightings as water dries up.",
                "badge": "High Sighting"
            },
            "monsoon": {
                "months": "July to September",
                "temp": "24\u00b0C \u2013 32\u00b0C",
                "desc": "Closed for monsoon breeding season.",
                "badge": "Closed"
            }
        },
        "howToReach": {
            "air": "Nagpur International Airport (95 km / 2 hours drive via NH44).",
            "rail": "Nagpur Junction (90 km / 2 hours drive via NH44).",
            "road": "Smooth 4-lane NH44 highway connects directly from Nagpur to Turia gate."
        },
        "gates": [
            {
                "name": "Turia Gate (Core)",
                "type": "Core",
                "entry": "Turia Village",
                "distance": "90 km from Nagpur"
            },
            {
                "name": "Karmajhiri Gate (Core)",
                "type": "Core",
                "entry": "Karmajhiri",
                "distance": "120 km from Nagpur"
            },
            {
                "name": "Rukhad Gate (Buffer)",
                "type": "Buffer",
                "entry": "Rukhad Sanctuary",
                "distance": "100 km from Nagpur"
            }
        ],
        "gallery": [
            {
                "url": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
                "caption": "Tiger in open teak forest of Pench"
            }
        ],
        "reviews": [
            {
                "author": "Rahul Trivedi",
                "location": "Mumbai",
                "rating": 5,
                "time": "1 week ago",
                "text": "Very convenient to reach from Nagpur airport. We saw Collarwali's daughter with two cubs at Alikatta. Pure thrill!"
            }
        ],
        "faqs": [
            {
                "q": "How far is Pench from Nagpur Airport?",
                "a": "Pench (Turia Gate) is only 90 km from Nagpur Airport, which takes less than 2 hours on the smooth 4-lane National Highway 44. This makes Pench the most accessible tiger reserve in India from a major airport."
            },
            {
                "q": "Which gate is most famous in Pench?",
                "a": "Turia Gate is the most celebrated and productive entrance on the Madhya Pradesh side, world-famous as the home of the legendary tigress Collarwali (who raised 29 cubs)."
            },
            {
                "q": "Does Pench offer night safaris?",
                "a": "Yes, night safaris are conducted in the Rukhad buffer and wolf sanctuary areas on the periphery of the park, offering a chance to spot leopards, hyenas, and owls after dark."
            },
            {
                "q": "Is Pench divided between two states?",
                "a": "Yes, Pench spans across both Madhya Pradesh (Seoni and Chhindwara districts) and Maharashtra (Nagpur district). The MP side (Turia, Karmajhiri) is the most widely visited for tiger safaris."
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PARKS_DATA };
}
