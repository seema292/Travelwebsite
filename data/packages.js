// Wildlife Holiday Packages Data
// Curated multi-day itineraries across India's premier tiger reserves

const PACKAGES_DATA = [
    {
        id: "pkg-corbett-wilderness",
        title: "Corbett Tiger Quest & Riverside Retreat",
        parkId: "jim-corbett",
        parkName: "Jim Corbett National Park",
        duration: "3 Days / 2 Nights",
        nights: 2,
        days: 3,
        pricePerPerson: 14500,
        originalPrice: 17500,
        badge: "Most Popular",
        category: "Tiger Safari",
        rating: 4.9,
        reviewsCount: 340,
        featuredImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
        highlights: [
            "2 Exclusive 4x4 Gypsy Safaris in Bijrani & Jhirna Core Zones",
            "Stay at 4-Star Riverside Luxury Resort with Swimming Pool & Lawn",
            "All Meals Included: Buffet Breakfast, Lunch, High Tea & Dinner",
            "Guided Nature Walk Along Kosi River with Naturalist",
            "All Forest Permits, Gypsy Charges, Driver DA & Guide Fees Included"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Ramnagar & Check-in at Riverside Resort",
                desc: "Arrive at Ramnagar. Check-in to your 4-star luxury jungle lodge with welcome drink. After a delicious lunch, relax by the river or poolside. Evening tea with bonfire and wildlife documentary screening by a senior naturalist. Dinner and overnight stay."
            },
            {
                day: 2,
                title: "Dawn Safari in Core Zone & Leisure Afternoon",
                desc: "Early morning 5:30 AM wake-up call for your 1st Gypsy Safari into the Bijrani core zone. Track the Royal Bengal Tiger, wild elephants, and spotted deer through sal groves. Return to resort for breakfast. In the afternoon, embark on an escorted nature walk along the Kosi riverbed. Evening bonfire and stargazing."
            },
            {
                day: 3,
                title: "Morning Safari in Jhirna / Dhela & Departure",
                desc: "Set out for your 2nd Gypsy Safari into Jhirna or Dhela zone. Excellent chances of sloth bears, sambar, and rare birds. Return for hearty brunch, check-out with memorable safari photographs, and drive onward."
            }
        ],
        inclusions: [
            "2 Jungle Gypsy Safaris in Corbett Core Zones",
            "2 Nights accommodation on twin sharing basis",
            "All meals (2 Breakfasts, 2 Lunches, 2 Dinners)",
            "Forest permit entry tickets & vehicle toll",
            "Government registered forest guide fees",
            "Pick up & drop from resort to safari entry gate"
        ],
        exclusions: [
            "Any airfare or train fare to Ramnagar",
            "DSLR camera commercial permit charges",
            "Personal expenses like laundry, minibar, tips"
        ]
    },
    {
        id: "pkg-tadoba-apex-predator",
        title: "Tadoba Apex Predator Expedition",
        parkId: "tadoba",
        parkName: "Tadoba Andhari Tiger Reserve",
        duration: "4 Days / 3 Nights",
        nights: 3,
        days: 4,
        pricePerPerson: 22800,
        originalPrice: 26500,
        badge: "High Tiger Sighting",
        category: "Predator Special",
        rating: 4.95,
        reviewsCount: 280,
        featuredImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80",
        highlights: [
            "4 Open 4x4 Gypsy Safaris (2 Core Moharli/Kolara + 2 Buffer Agarzari)",
            "1 Thrilling Buffer Night Safari for Nocturnal Wildlife",
            "Eco-luxury Wilderness Lodge Stay with Naturalist Assistance",
            "Nagpur Airport / Railway Station Return Transfers Included"
        ],
        itinerary: [
            {
                day: 1,
                title: "Nagpur Pickup & Transfer to Tadoba",
                desc: "Private AC transfer from Nagpur (140 km / 3 hours). Check-in at forest resort near Moharli. Evening orientation session on Tadoba's dominant tiger lineages. Dinner and night rest."
            },
            {
                day: 2,
                title: "Twin Safaris: Morning Core + Evening Moharli",
                desc: "Morning core safari tracking tigers near Telia Dam. Afternoon safari focusing on lake shores and bamboo thickets for leopards and wild dogs. Return for culinary dinner."
            },
            {
                day: 3,
                title: "Morning Core Safari & Evening Agarzari Night Safari",
                desc: "Dawn safari in Kolara or Navegaon. Afternoon rest. At 7:00 PM, embark on the thrilling Buffer Night Safari to spot civets, leopards, owls, and nocturnal predators."
            },
            {
                day: 4,
                title: "Morning Safari & Transfer to Nagpur",
                desc: "Final morning safari to capture lasting wildlife memories. Hearty breakfast, check-out, and AC transfer back to Nagpur for your return flight/train."
            }
        ],
        inclusions: [
            "4 Day Safaris + 1 Night Safari in dedicated 4x4 Gypsy",
            "3 Nights eco-resort accommodation with all meals",
            "Nagpur - Tadoba - Nagpur private transfer",
            "All forest entry permits and forest guide fees"
        ],
        exclusions: [
            "Travel insurance",
            "Expenses of personal nature"
        ]
    },
    {
        id: "pkg-ranthambore-royal-trail",
        title: "Ranthambore Royal Fort & Tiger Odyssey",
        parkId: "ranthambore",
        parkName: "Ranthambore National Park",
        duration: "3 Days / 2 Nights",
        nights: 2,
        days: 3,
        pricePerPerson: 16500,
        originalPrice: 19800,
        badge: "Heritage & Wildlife",
        category: "Tiger Safari",
        rating: 4.88,
        reviewsCount: 310,
        featuredImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
        highlights: [
            "2 Jeep Safaris across Ranthambore Zones 1 to 5",
            "Guided Exploration of 10th-Century UNESCO Ranthambore Fort",
            "Heritage Havelis or Luxury Tented Jungle Camp Stay",
            "Rajasthani Cultural Evening with Live Folk Music & Chulha Cuisine"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Sawai Madhopur & Heritage Welcome",
                desc: "Arrive at Sawai Madhopur station. Check-in to heritage safari camp. Afternoon excursion to the magnificent Ranthambore Fort overlooking Padam Lake. Evening traditional Rajasthani dinner."
            },
            {
                day: 2,
                title: "Morning & Afternoon Safaris in Zones 1-5",
                desc: "Dawn safari in prime tiger zone. Witness big cats resting under ancient banyan trees. Return for gourmet lunch. Afternoon second safari exploring lake banks and ancient royal hunting ruins."
            },
            {
                day: 3,
                title: "Morning Village Safari & Departure",
                desc: "Early breakfast, souvenir shopping at Dastkar Ranthambore women's cooperative, and transfer to Sawai Madhopur railway station."
            }
        ],
        inclusions: [
            "2 Safaris in 6-seater Gypsy with verified forest naturalist",
            "2 Nights heritage resort stay with breakfast and dinner",
            "Guided Ranthambore Fort entry and transfers"
        ],
        exclusions: [
            "Alcoholic beverages and laundry"
        ]
    },
    {
        id: "pkg-kaziranga-rhino-safari",
        title: "Kaziranga Big Five Rhino & Brahmaputra Explorer",
        parkId: "kaziranga",
        parkName: "Kaziranga National Park",
        duration: "4 Days / 3 Nights",
        nights: 3,
        days: 4,
        pricePerPerson: 19800,
        originalPrice: 23500,
        badge: "UNESCO Heritage",
        category: "Rhino & Birding",
        rating: 4.93,
        reviewsCount: 220,
        featuredImage: "https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=800&q=80",
        highlights: [
            "2 Gypsy Safaris in Bagori & Kohora Ranges",
            "1 Morning Dawn Elephant Safari for Close Rhino Encounters",
            "Stay at Authentic Assamese Tea Heritage Bungalow",
            "Visit to Kaziranga National Orchid & Biodiversity Park"
        ],
        itinerary: [
            {
                day: 1,
                title: "Guwahati Arrival & Scenic Drive to Kaziranga",
                desc: "Pick-up from Guwahati Airport (GAU). Scenic 4-hour drive past lush Brahmaputra valleys and emerald tea gardens. Check-in and Assamese traditional dinner."
            },
            {
                day: 2,
                title: "Dawn Elephant Ride & Central Kohora Gypsy Safari",
                desc: "5:30 AM elephant safari in Western Range getting within a few meters of one-horned rhinos and wild buffalos. Afternoon open Gypsy safari in Central Kohora Range."
            },
            {
                day: 3,
                title: "Eastern Agoratoli Birding Safari & Tea Garden Walk",
                desc: "Morning safari in Agoratoli backwaters; view pelicans, storks, and eagles. Afternoon visit to Kaziranga Orchid Park and traditional Bihu dance show."
            },
            {
                day: 4,
                title: "Breakfast & Return Transfer to Guwahati",
                desc: "Leisurely breakfast overlooking the tea estate, followed by drive back to Guwahati Airport."
            }
        ],
        inclusions: [
            "1 Elephant Safari + 2 Gypsy Safaris in Kaziranga",
            "3 Nights tea heritage lodge stay with all meals",
            "Guwahati return private transfers",
            "Forest conservation fees & entry taxes"
        ],
        exclusions: [
            "Airfare to Guwahati"
        ]
    },
    {
        id: "pkg-gir-lion-pride",
        title: "Gir Asiatic Lion Trail & Saurashtra Wilderness",
        parkId: "gir-lion",
        parkName: "Gir National Park",
        duration: "3 Days / 2 Nights",
        nights: 2,
        days: 3,
        pricePerPerson: 15200,
        originalPrice: 18000,
        badge: "Only in India",
        category: "Lion Special",
        rating: 4.9,
        reviewsCount: 195,
        featuredImage: "https://images.unsplash.com/photo-1614027164847-1b28caa1407c?auto=format&fit=crop&w=800&q=80",
        highlights: [
            "2 Open Gypsy Safaris on Authentic Gir Jungle Trails",
            "Excursion to Devalia Safari Interpretation Park",
            "Eco-Cottage Stay Amidst Famous Kesar Mango Orchards",
            "Authentic Kathiyawadi Cuisine Experience"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Sasan Gir & Devalia Safari",
                desc: "Arrive at Sasan Gir from Rajkot / Diu / Ahmedabad. Check-in to mango orchard resort. Afternoon visit to Devalia Safari Park. Dinner with folk music."
            },
            {
                day: 2,
                title: "Dawn & Evening Gir Jungle Trail Safaris",
                desc: "Two action-packed safaris tracking Asiatic Lion prides with experienced Maldhari trackers and forest guides."
            },
            {
                day: 3,
                title: "Morning Village Walk & Departure",
                desc: "Visit local Siddi tribal village or Somnath Temple, then onward journey."
            }
        ],
        inclusions: [
            "2 Gir Trail Safaris + 1 Devalia Park entry",
            "2 Nights stay with all meals",
            "Forest permit permits & vehicle guide fees"
        ],
        exclusions: [
            "Travel to/from Sasan Gir"
        ]
    },
    {
        id: "pkg-mp-golden-triangle",
        title: "Central India Tiger Epic: Bandhavgarh + Kanha",
        parkId: "bandhavgarh",
        parkName: "Bandhavgarh & Kanha Reserves",
        duration: "6 Days / 5 Nights",
        nights: 5,
        days: 6,
        pricePerPerson: 38500,
        originalPrice: 44000,
        badge: "Ultimate Safari",
        category: "Grand Wildlife Tour",
        rating: 4.98,
        reviewsCount: 160,
        featuredImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
        highlights: [
            "6 Deep Core Gypsy Safaris (3 in Bandhavgarh + 3 in Kanha)",
            "Stay at Two Premier Wildlife Lodges of Central India",
            "Private 4x4 Inter-Park Scenic Transfers Included",
            "Highest Overall Tiger Sighting Success Rate in Asia"
        ],
        itinerary: [
            {
                day: 1,
                title: "Jabalpur Arrival & Drive to Bandhavgarh",
                desc: "Pickup from Jabalpur Airport / Railway station. 4-hour scenic drive to Bandhavgarh. Check-in and evening brief."
            },
            {
                day: 2,
                title: "Twin Safaris in Bandhavgarh Core Zones",
                desc: "Full day wildlife action in Tala and Magdhi zones."
            },
            {
                day: 3,
                title: "Morning Bandhavgarh Safari & Transfer to Kanha",
                desc: "Final morning safari in Bandhavgarh, followed by lunch and 5-hour scenic drive to the sal forests of Kanha."
            },
            {
                day: 4,
                title: "Kanha Core Safaris (Mukki & Kisli)",
                desc: "Two safaris in Kanha meadows tracking Barasingha deer, gaurs, and tigers."
            },
            {
                day: 5,
                title: "Kanha Zone Safari & Sunset at Bamni Dadar",
                desc: "Safari exploring Sunset Point and tribal Gond villages."
            },
            {
                day: 6,
                title: "Breakfast & Transfer to Jabalpur Airport",
                desc: "Check-out and transfer to Jabalpur with stop at Dhuandhar Marble Rocks waterfall."
            }
        ],
        inclusions: [
            "6 Private Gypsy Safaris across both parks",
            "5 Nights luxury jungle lodge accommodation with all meals",
            "All transfers in private AC vehicle",
            "All permits, guides, and taxes"
        ],
        exclusions: [
            "Airfare to/from Jabalpur"
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PACKAGES_DATA };
}
