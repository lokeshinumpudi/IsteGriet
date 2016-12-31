(function () {
    'use strict';

    angular
        .module('ISTE')
        .factory('isteData', isteData);

    isteData.$inject = ['$rootScope', '$http', "$q"];

    function isteData($rootScope, $http, $q) {

        var fbref = "https://istegriet-bb890.firebaseio.com/";
        var tempResCache = null;

        var allEvents = [];
        var workDoneByService = false;
        $rootScope["events"] = [];

        function cleanInput(input) {
            //input is data from firebase
            //so we remove firebase keys and return only the data
            //input.data , input.status , ...
            var output = [];
            var keys = Object.keys(input.data);
            keys.forEach(function (key) {
                var xevent = input.data[key];
                output.push(xevent);
            });

            return output;
        }
        var monthToNum = {
            "JAN": 0,
            "FEB": 1,
            "MAR": 2,
            "APR": 3,
            "MAY": 4,
            "JUN": 5,
            "JULY": 6,
            "AUG": 7,
            "SEPT": 8,
            "OCT": 9,
            "NOV": 10,
            "DEC": 11
        };

        function returndate(year, month, date) {
            month = monthToNum[month.toUpperCase()];
            var date = new Date(year, month, date);
            return date;
        }

        // End utilities




        var centerEvent = {};
        var searchData = [];

        // mela data
        var mela_main = {
            "title": "MELA-The Tech Carnival",
            "description": " MELA- The Tech Carnival organized aims to provide a platform for budding engineers to showcase their skills in a plethora of events designed to exercise their minds. MELA which stands for Music, Education, Literature, Arts consists of a series of events providing an opportunity for the students to exhibit their talents. ISTE MELA also takes the immense pride in introducing the inter-branch competition with the objective of developing the competitive spirit ",
            "description_para1": "This one day carnival was held on 30th March, 2016 involving the first year students. MELA conducted about 20 major competitions- officially broken into five categories – Technical, Non-Technical, Literary, Musical and Art Events. Coupled with a highly appreciated 'Android Workshop' MELA has become even more majestic and elegant.",
            "description_para2": "An enormous majority of participants were satisfied with the organization of the events. A large number of students applauded – both the quality of the events and also the management.",
            "date_full": "",
            "year": "2016",
            "month": "MAR",
            "day": "30",
            "title_img_src": "melamain.jpg",
            "event_link": "#/event/mela_main",
            "gallery": ["nt1.JPG", "ws3.jpg", "tech1.jpg", "music.jpg", "pc4.jpg", "lat2.jpg"],
            "imagedirectory": "images/mela/",
            "on_center_page": true,
            "hash": "uniquetothispage",
            "test_random_code": "",
            "registrationDetails": {
                "room_no": "1st Year block",
                "timings": "10am to 4 pm",
                "contact": "",
                "contact_no": "9000038040",

            }
        };

        // fill in rest of the events
        var mela_rest = [

            {
                "title": "Technical Events ",
                "description": " The main objective of MELA is to provide an opportunity for the students to showcase their technical skills. MELA included 7 technical events planned and organized at its best of quality. The events were decided keeping the interest and need of every student.",
                "topics": ["1. Paper Presentation", "2. Sci Cross", "3. Math Masti", "4. Decode and Connect", "5. Ram up the circuit", "6. Code war", "7.C-Monopoly", ],
                "description_para1": "The basic motto of the Paper presentation event was to provide an opportunity to build their technical knowledge, critical thinking and enhance their communication skills to a superlative level. The electrical students have shown a massive interest in participating in these events making them successful. Coding is only thing that helps you build yourself in this modern world. MELA has conducted two major events on coding to help the students improve their coding skills. Due to the enormous response from the students these events turned out spicy which included a lot of competition. This surely was a great attraction for MELA.",
                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "30",
                "title_img_src": "event.png",
                "event_link": "#/event/Technical_Events",
                "gallery": ["tech1.jpg", "tech2.jpg", "tech3.jpg", "tech4.jpg", "tech5.jpg"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "1st Year Block",
                    "timings": "10 am to 4 pm",
                    "contact_no": "90000380480",

                }
            }, {
                "title": "Android Workshop",
                "description": "Welcome all to the splash of awesomeness provided to you by ISTE. This workshop will bring out all the hidden creativity which was imprisoned in your inner mind. Thus unleash your power to make superb and useful apps for the world by attending this workshop. Because  'LIMITS EXISTS ONLY IN THE MIND'.Please register near help desk",
                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "29",
                "title_img_src": "androidmain.jpg",
                "event_link": "#/event/android_ws",
                "gallery": ["ws1.jpg", "ws2.jpg", "ws3.jpg", "ws4.jpg"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3605/06",
                    "timings": "10 am to 4 pm",
                    "contact_no": "90000380480",

                }
            }, {
                "title": "Paper Presentation ",
                "description": "Are you a person who is finding a platform to showcase your self-confidence and communication skills?Grab this oppurtunity where you can build your technical knowledge , critical thinking and enhance your communication skills to a top level with our paper presentation event on 30th March.",
                "topics": ["Make sure you follow these simple rules!!",
                    "1.Atmost 2 members per team and individual presentations are also accepted.",
                    "2.Make sure you submit your abstracts before the due date ,28th March.",
                    "3.Registration fee is Rs.200/- for non-ISTE and Rs.150/- for ISTE members.",
                    "4.Abstract should be submitted in IEEE format and should contain atleast 250 words.",
                    "5.Selected abstracts will get a confirmation mail regarding further details.",
                    "6.Participation certificates will be given.",
                    "NOTE: Abstracts should be mailed to grietistemela@gmail.com",
                    "Paper Presentation Domain:Any topic related on technology. ",
                ],

                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "30",
                "title_img_src": "ppt.png",
                "event_link": "#/event/ppt",
                "gallery": ["ppt1.jpg", "ppt 2.jpg", "ppt 3.jpg", "ppt 4.jpg"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3204",
                    "timings": "10 am to 12:30 pm",
                    "contact_no": "90000380480",

                }
            },




            {
                "title": "Non Technical",
                "description": " A festival is never a festival without fun and entertainment. MELA included 5 non technical events providing students all the joy and entertainment.",
                "topics": ["1.Ad-Mania", "2.Directions in the dark", "3.Crime Scene Investigation", "4Count down 60", "5.Moto Rush"],
                "description_para1": "They were equally planned and executed perfectly and hence managed to gather a large audience and left all the events extremely satisfied.",
                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "30",
                "title_img_src": "nontech.jpg",
                "event_link": "#/event/Non_Technical",
                "gallery": ["nt1.JPG", "nt2.JPG", "nt3.jpg", "nt4.jpg"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "1st Year Block",
                    "timings": "10 am to 4 pm",
                    "contact_no": "90000380480"
                }

            }, {
                "title": "Music",
                "description": "Music is an art form and cultural activity whose medium is sound and silence. Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything. ISTE has conducted two events under this category – Singing and Instrumentation.The students have shown a very good interest in coming up and performing in front of all the audience. Instrumentation also involved the classical instruments like harmonium which depicted the eminence in Indian music. However it remained the star event by attracting a huge audience that left the event extremely satisfied.",
                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "30",
                "title_img_src": "music.jpg",
                "event_link": "#/event/Music",
                "gallery": ["singing.jpg", "singing 3.jpg", "singing 2.jpg"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3605/06",
                    "timings": "12:30 pm to 4 pm",
                    "contact_no": "90000380480",
                }

            }, {
                "title": "Literature and Arts",
                "description": "The best platter of events brought infront of you to enjoy and dive into the plethora of technical and non-technical fun. The literature and arts part will set the groove and make you all Tap your feet asking with it.Thus grab this opportunity of excellent quality events offered to you by ISTE.Coz quality never goes out of style.*** only for first year students***letsmela",
                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "30",
                "title_img_src": "lat.jpg",
                "event_link": "#/event/literatureandarts",
                "gallery": ["lat.jpg", "lat1.jpg", "lat4.jpg", "lat3.jpg", "lat2.jpg"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3605/06",
                    "timings": "1pm to 4pm",
                    "contact_no": "90000380480",
                }

            }, {
                "title": "Photo Clickz",
                "description": "Welcome all to the REEL LIFE, where all your fantasies come to life. This is an awesome opportunity for u to showcase your photography skills and tell the world that you are the best. You have to take pictures of MELA from your camera and send us the top 10. Out of those the best picture would be selected and awarded. The last date for registration for this free event is on 29th.",
                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "30",
                "title_img_src": "photoclickz.png",
                "event_link": "#/event/photoclickz",
                "gallery": ["pc1.jpg", "pc2.jpg", "pc3.jpg", "pc4.jpg", "pc5.jpg"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "1st Year Block",
                    "timings": "10am to 4pm",
                    "contact_no": "90000380480",
                }

            }, {
                "title": "Rangoli",
                "description": "Add colours to your life with the rangoli competition held tomorrow from 3PM onwards. Intrested participants have to bring their own resources for the same.",
                "date_full": "",
                "year": "2016",
                "month": "MAR",
                "day": "29",
                "title_img_src": "rangoli.png",
                "event_link": "#/event/rangoli",
                "gallery": ["rangoli 2.jpg", "rangoli 3.jpg", "rangoli 4.jpg", "rangoli 5.jpg", "rangoli 6.jpg", "rangoli 7"],
                "imagedirectory": "images/mela/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "1st Year Block",
                    "timings": "After 3pm",
                    "contact_no": "90000380480",
                }

            },

            // end
        ];
        // mela data end


        // teams data start
        var names16 = [

            {
                "name": "K.Sai Rahul",
                "image_src": "rahul.jpg",
                "role": "President",
                "fb_url": "https://www.facebook.com/sairahul11",
                "imagedirectory": "images/core/"
            },

            {
                "name": "R.Shashank",
                "image_src": "shashank.jpg",
                "role": "Vice President",
                "fb_url": "https://www.facebook.com/shashank.r.patell?fref=ts",
                "imagedirectory": "images/core/"
            },

            {
                "name": "A.Rasagnya",
                "image_src": "rasna.jpg",
                "role": "Secretary",
                "fb_url": "https://www.facebook.com/rasagnya.reddy.35?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "C.Sneha Sree",
                "image_src": "sneha sree.jpg",
                "role": "Vice Secretary",
                "fb_url": "https://www.facebook.com/snehachundi?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "T.Raghavendra",
                "image_src": "raghavendra.jpg",
                "role": "Treasurer",
                "fb_url": "https://www.facebook.com/thoude.raghavendra?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "K.Naimisha",
                "image_src": "naimisha.JPG",
                "role": "Director(Events)",
                "fb_url": "https://www.facebook.com/",
                "imagedirectory": "images/core/"
            }, {
                "name": "V.Aishwarya",
                "image_src": "aishwarya.JPG",
                "role": "Director(Technical)",
                "fb_url": "https://www.facebook.com/aishwarya.varala?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Ch.Sahiti",
                "image_src": "sahiti.jpg",
                "role": "Event Manager",
                "fb_url": "https://www.facebook.com/sahiti.ch.1?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Sneha Kumari",
                "image_src": "kumari.jpg",
                "role": "Vice Event Manager",
                "fb_url": "https://www.facebook.com/sneha.kumari.7773631?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "G.Vamsi",
                "image_src": "vamsi.jpg",
                "role": "Member Relations",
                "fb_url": "https://www.facebook.com/vamsikrish815?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "I.Lokesh Chandra",
                "image_src": "lokesh.jpg",
                "role": "Web Master",
                "fb_url": "https://www.facebook.com/inumpudi.lokesh?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Shounak",
                "image_src": "shounak.jpg",
                "role": "Public Relations",
                "fb_url": "https://www.facebook.com/shounak.chatterjee.7?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "J.Alkeya",
                "image_src": "alekya.jpg",
                "role": "Marketing Head",
                "fb_url": "https://www.facebook.com/jonnalagadda.alekya?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Abid Sheik",
                "image_src": "abid.JPG",
                "role": "Creative Head",
                "fb_url": "https://www.facebook.com/shaiks13?fref=ts",
                "imagedirectory": "images/core/"
            },

            {
                "name": "A.Poojitha",
                "image_src": "poojitha.jpg",
                "role": "Event Logistics",
                "fb_url": "https://www.facebook.com/",
                "imagedirectory": "images/core/"
            }, {
                "name": "Sri Lakshmi",
                "image_src": "lakshmi.png",
                "role": "Content Creator",
                "fb_url": "https://www.facebook.com/srilakshmi.devi?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "K.Sai Krishna",
                "image_src": "sai krsihna.jpg",
                "role": "Tech Lead (ECE)",
                "fb_url": "https://www.facebook.com/saikrishna.kandagatla.5?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Y.Naveen Kumar",
                "image_src": "naveen.jpg",
                "role": "Tech Lead (EEE)",
                "fb_url": "https://www.facebook.com/yerrathotanaveen.yerrathotanaveen?fref=ts",
                "imagedirectory": "images/core/"
            },

            {
                "name": "Kuvalaya Datta",
                "image_src": "kuval.jpg",
                "role": "Tech Lead (CSE)",
                "fb_url": "https://www.facebook.com/kuvalaya.datta?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "A.Sowmya",
                "image_src": "sowmya.jpg",
                "role": "Tech Lead (Civil)",
                "fb_url": "https://www.facebook.com/sowmya.asadi?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Robin Phillip",
                "image_src": "robin.JPG",
                "role": "Resource Manager",
                "fb_url": "https://www.facebook.com/",
                "imagedirectory": "images/core/"
            },



        ];
        var names15 = [

            {
                "name": "Harsha vardhan",
                "image_src": "harsha.jpg",
                "role": "President",
                "fb_url": "https://www.facebook.com/harshavardhanreddyharsh?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "K.Sai Rahul",
                "image_src": "rahul.jpg",
                "role": "Vice President",
                "fb_url": "https://www.facebook.com/sairahul11",
                "imagedirectory": "images/core/"
            }, {
                "name": "Chinmaya Allu",
                "image_src": "chin.jpg",
                "role": "Secretary",
                "fb_url": "https://www.facebook.com/search/top/?q=Chinmaya%20Allu",
                "imagedirectory": "images/core/"
            },

            {
                "name": "A.Rasagnya",
                "image_src": "rasagnya.jpg",
                "role": "Vice Secretary",
                "fb_url": "https://www.facebook.com/rasagnya.reddy.35?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Vishall Boppana",
                "image_src": "vishal.jpg",
                "role": "Event Manager",
                "fb_url": "https://www.facebook.com/vishall.boppana?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "V.Aishwarya",
                "image_src": "aishwarya.JPG",
                "role": "Vice Event Manager",
                "fb_url": "https://www.facebook.com/aishwarya.varala?fref=ts",
                "imagedirectory": "images/core/"
            },

            {
                "name": "Pankaj Bharadwaj",
                "image_src": "pankaj.jpg",
                "role": "Treasurer",
                "fb_url": "https://www.facebook.com/pankajbharadwaj99?fref=ts",
                "imagedirectory": "images/core/"
            },



            {
                "name": "Mansoor",
                "image_src": "mansoor.jpg",
                "role": "Member Relations",
                "fb_url": "https://www.facebook.com/sn.mansoor?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "K.Naimisha",
                "image_src": "naimisha.JPG",
                "role": "Event Logistics",
                "fb_url": "https://www.facebook.com/",
                "imagedirectory": "images/core/"
            },

            {
                "name": "Prudhvi Reddy",
                "image_src": "prudhvi.jpg",
                "role": "Tech Lead (EEE)",
                "fb_url": "https://www.facebook.com/PrudhviReddy.Vemireddy?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Raj Vamshi",
                "image_src": "raj vamshi.jpg",
                "role": "Tech Lead (ECE)",
                "fb_url": "https://www.facebook.com/raj.vamshi.10?fref=ts",
                "imagedirectory": "images/core/"
            },

            {
                "name": "Anwar Sharieff",
                "image_src": "anwar.jpg",
                "role": "Tech Lead (CSE)",
                "fb_url": "https://www.facebook.com/AnwarSharieff?fref=ts",
                "imagedirectory": "images/core/"
            },

            {
                "name": "T.Raghavendra",
                "image_src": "raghavendra.jpg",
                "role": "Tech Lead (Civil)",
                "fb_url": "https://www.facebook.com/thoude.raghavendra?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "Mani Krishna",
                "image_src": "mani.jpg",
                "role": "Creative Head",
                "fb_url": "https://www.facebook.com/mani.k.sonu.7?fref=ts",
                "imagedirectory": "images/core/"
            },

            {
                "name": "Nithin",
                "image_src": "nithin.jpg",
                "role": "Content Writer",
                "fb_url": "https://www.facebook.com/nithinsai.peachara?fref=ts",
                "imagedirectory": "images/core/"
            },


        ];
        // edit items to be added to bold;
        //these words when found in the text will be highlighted
        var bolds = ["iste", "departmental", "Dr.Adapa Ramarao", "Dr. V.N Mani", "Dr. Y Vijayalatha", "'Android Workshop", "Tech talks", "Tech Zap",
            "Does the world need Nuclear Energy ?", "ideaz", "Paper presentations", "Rs.230/-"
        ];


        //Start logic 


        //service to get events data
        function getAllEvents() {
            return $http.get(fbref + "data/allEvents.json");
        }

        function AllEventsData() {

            var d = $q.defer();
            d.resolve(allEvents);

            // Make sure to reject this thing
            return d.promise;
        }



        //get data while in initial page
        getAllEvents().then(function (res) {
            tempResCache = res;
            allEvents = cleanInput(res);
            // //temp cache the results
            $rootScope["events"] = allEvents;
            doWork(allEvents);
        }, function (err) {
            console.log(err);
        }); //isteData.allEvents



        function getCenterEvent() {
            return centerEvent;
        }

        function getSearchData() {
            return searchData;
        }

        function doWork(allEvents, fromwhere) {

            var reg = new RegExp();
            var availablesingledata = [centerEvent, mela_main];
            var availablemultipledata = [allEvents, mela_rest];

            // Generate short description  and fulldate
            availablemultipledata.forEach(function (event) {
                event.forEach(function (each_event, index) {
                    event[index]["short_description"] = each_event.description.trim().split(" ", 30).join(" ") + " ...";
                    event[index]["fulldate"] = returndate(event[index].year, event[index].month, event[index].day);
                });
            });
            // now sort the data base on fulldate
            availablemultipledata.forEach(function (event, index) {
                // reasign after sorting
                availablemultipledata[index] = event.sort(function (a, b) {
                    if (a.fulldate < b.fulldate) {
                        return 1;
                    } else if (a.fulldate > b.fulldate) {
                        return -1;
                    }
                    return 0;
                });
            });
            // eND SORTING 

            // Well have a hard copy of all the events data for use in search
            if (searchData.length == 0) {
                for (var i = 0; i < allEvents.length; i++) {
                    searchData.push(allEvents[i]);
                }
            }


            // GET THE center event after sorting so well fetch the latest event always
            centerEvent = allEvents.shift();
            availablesingledata[0] = centerEvent;
            //add center post to tempcache
            $rootScope.events.push(centerEvent);
            //banner data short_description generation
            availablesingledata.forEach(function (event) {
                if (event == undefined) return;
                event["short_description"] = event.description.trim().split(" ", 150).join(" ") + " ...";
                event["fulldate"] = returndate(event.year, event.month, event.day);
            });

            //this highlights the text 
            bolds.forEach(function (eachbold) {
                // console.log(eachbold);
                // \\s:match whitespace , \\W: matches all that is not a word char [^A-Za-z0-9_]
                var name = "\\s" + eachbold + "\\s?\\W";
                reg.compile(name, "gi");
                //now loop over all our events data
                if (centerEvent != undefined) {
                    centerEvent.description = centerEvent.description.replace(reg, " <strong>" + eachbold + "</strong> ");
                }
                mela_main.description = mela_main.description.replace(reg, " <strong>" + eachbold + "</strong> ");
                availablesingledata.forEach(function (eachEvent) {
                    if (eachEvent == undefined) return;
                    if (eachEvent.description_para1) {
                        eachEvent.description_para1 = eachEvent.description_para1.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                    if (eachEvent.description_para2) {
                        eachEvent.description_para2 = eachEvent.description_para2.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                    if (eachEvent.description_para3) {
                        eachEvent.description_para3 = eachEvent.description_para3.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                }); //if
                allEvents.forEach(function (eachEvent, index) {
                    allEvents[index].description = eachEvent.description.replace(reg, " <strong>" + eachbold + "</strong> ");
                    if (allEvents[index].description_para1) {
                        allEvents[index].description_para1 = eachEvent.description_para1.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                    if (allEvents[index].description_para2) {
                        allEvents[index].description_para2 = eachEvent.description_para2.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                    if (allEvents[index].description_para3) {
                        allEvents[index].description_para3 = eachEvent.description_para3.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                }); //allEvents
                mela_rest.forEach(function (eachEvent, index) {
                    mela_rest[index].description = eachEvent.description.replace(reg, " <strong>" + eachbold + "</strong> ");
                    if (mela_rest[index].description_para1) {
                        mela_rest[index].description_para1 = eachEvent.description_para1.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                    if (mela_rest[index].description_para2) {
                        mela_rest[index].description_para2 = eachEvent.description_para2.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                    if (mela_rest[index].description_para3) {
                        mela_rest[index].description_para3 = eachEvent.description_para3.replace(reg, " <strong>" + eachbold + "</strong> ");
                    }
                });
            }); //bolds for each

            //mark work done by service
            workDoneByService = true;

        }; //doWork  only after fetching server data

        //special for mela
        //call do Work anyway
        // doWork([]);

        function isWorkAlreadyDone() {
            return workDoneByService === true;
        }

        //return the (no) of latest events
        function getRecentEvents(no) {
            var colors = ["teal","red","blue","yellow","violet","brown"]
            var no = no || 6;
            var recentEvents;
            var deferred = $q.defer();
            $http.get(fbref + "data/allEvents.json").then(function (res) {
                if (res.status == 200) {
                    var cleanedData = cleanInput(res);
                    cleanedData.forEach(function (event) {
                        event["fulldate"] = returndate(event.year, event.month, event.day);
                        event["short_description"] = event.description.trim().split(" ", 20).join(" ");
                        

                    });
                    //sort
                    cleanedData.sort(function (a, b) {
                        if (a.fulldate < b.fulldate) {
                            return 1;
                        } else if (a.fulldate > b.fulldate) {
                            return -1;
                        }
                        return 0;
                    }); //sort end
                    // console.log(cleanedData);
                    recentEvents = cleanedData.splice(0, no);

                    recentEvents.forEach(function (e,index){
                        e.color = colors[index];
                    });
                    deferred.resolve(recentEvents);
                } //res.status -if
            }, function (err) {

                deferred.reject(err);
            }); //$http get

            return deferred.promise;
        } //getRecentEvents

        var service = {
            centerEvent: getCenterEvent,
            searchData: getSearchData,
            doWork: doWork,
            cleanInput: cleanInput,

            returndate: returndate,
            isWorkAlreadyDone: isWorkAlreadyDone,
            getRecentEvents: getRecentEvents,

            allEvents: getAllEvents,
            names16: names16,
            names15: names15,
            mela_main: mela_main,
            mela_rest: mela_rest
        };
        return service;
    } //factory
})();