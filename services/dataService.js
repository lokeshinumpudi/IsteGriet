(function () {
    'use strict';

    angular
        .module('ISTE')
        .factory('isteData', isteData);

    isteData.$inject = ['$rootScope'];

    function isteData($rootScope) {

        $rootScope["events"] = [];

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

        var centerEvent = {};
        var searchData = [];
        // fill in rest of the events

        var allEvents = [{
                "title": "Introduction Session",
                "description": " The Introduction session of ISTE i.e. Indian Society for Technical Education was held on 14-8-2014. The first membership drive has seen as many as 400 students register for the student chapter.             \
The mission of ISTE is to provide exposure to the students about the myriad options they can opt for in the field of Technical education, but at the same time ISTE provides assistance with various non-technical fields for the overall personality development of a student. \
During the intro session, all the specifications of the plethora of opportunities one can avail at ISTE, was discussed with the students, followed by events to set up interaction among the students. \
The whole experience was enriched with the presence of Dr. Jandhyala.N.Murthy, The principal and Dr.Adapa Ramarao, Dean, Counselling & Career Guidance and their invaluable speeches. ",
                "date_full": "",
                "year": "2014",
                "month": "AUG",
                "day": "14",
                "title_img_src": "title1.jpg",
                "event_link": "#/event/Introduction_Session",
                "gallery": ["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg", "g5.jpg", "g6.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "bolds": ["iste", "Dr. Jandhyala.N.Murthy"],
                "registrationDetails": {
                    "room_no": "3605 / 06",
                    "timings": "1 pm to 4 pm",
                    "contact": "Harshavardhan",
                    "contact_no": "9160637470",

                }
            }, {
                "title": "Technical Talk On 'Water Level Indicator' ",
                "description": " As the mission of ISTE is to provide exposure to the students about the myriad options they can opt for in the field of Technical education, ISTE GRIET started a new wing Tech talks . In these Tech talks students will be exposed to different technologies and diverse topics which they would not be able to cover in their academic schedule.On 27th October,2014 ISTE student chapter had its first tech talk on the topic “Water Level Indicator”.  Around 30 students attended the session, and the session received positive feedback to conduct such events further.",
                "date_full": "",
                "year": "2014",
                "month": "OCT",
                "day": "27",
                "title_img_src": "title2.jpg",
                "event_link": "#/event/Water_Level_Indicator",
                "gallery": ["g7.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3601",
                    "timings": "1 pm to 4 pm",
                    "contact_no": "9014074488",

                }
            },



            {
                "title": "Debate Competition",
                "description": " Debate is an essential tool for developing and maintaining democracy and open societies. More than a mere verbal or performance skill, debate embodies the ideals of reasoned argument, tolerance for divergent points of view and rigorous self-examination.\
The debate was conducted on the topic “ Does the world need Nuclear Energy ?” on 11th November 2014.  A total of 10 groups registered for the competition, each group up to maximum of 2 students. Three members of the faculty were the judges for the event.\
Winners of the event was the team of J.Vivek(ECE-3) and G.Uttej Reddy(EEE-3).",
                "date_full": "",
                "year": "2014",
                "month": "NOV",
                "day": "11",
                "title_img_src": "title3.jpg",
                "event_link": "#/event/Debate_Competition",
                "gallery": ["g8.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3602",
                    "timings": "1 pm to 4 pm",
                    "contact_no": "9014074488",
                }

            }, {
                "title": "Tech Zap 2015",
                "description": " As part of rapid internet growth in the last 10 years, most of the events are now happening online like webinars etc. The ISTE Student Chapter of GRIET has as many as 1000 viewers on its facebook page and its website. To encourage students to use the internet in a resourceful manner , a quiz competition' Tech Zap ' was conducted online.The quiz was created using google forms and responses were collected. The quiz started at 7:30 pm and within 30 minutes more than 80 responses were collected.",
                "date_full": "",
                "year": "2015",
                "month": "JAN",
                "day": "28",
                "title_img_src": "title4.jpg",
                "event_link": "#/event/Online_Quiz",
                "gallery": ["title10.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "",
                    "timings": "7:30pm",
                    "contact_no": "9014074488",
                }

            },
            //event5
            {
                "title": "Technical Talk on “ Role of Manufacturing Engineering and Advanced Electronics”.",
                "description": "Guest Lectures influence the students in choosing the correct career path and educate students about the bridge between the industry and college. ISTE’s first guest lecture was delivered by Dr. V.N Mani (Scientist-E) of Centre for Materials for Electronics Technology (C- MET). The Guest lecture was focused on  “ Role of Manufacturing Engineering and Advanced Electronics”.The session was on 11th February, 2015 for about 2 hours. A total of 60 students attended the session. The session was graced by Dr. Y Vijayalatha (Head of Department IT). The session was followed by questions from the students to the speaker.",
                "date_full": "",
                "year": "2015",
                "month": "FEB",
                "day": "11",
                "title_img_src": "title5.jpg",
                "event_link": "#/event/Technical_Talk",
                "gallery": ["g9.jpg", "g10.jpg", "g11.jpg", "g14.jpg", "g12.jpg", "g13.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "4312",
                    "timings": "12:30pm-3:30pm",
                    "contact_no": "9014074488",
                }

            },
            //event6
            {
                "title": "Technical Talk on “Career Guidance”",
                "description": "A correct choice during the student life leads to a proper career option. Advanced Academic Center(AAC) GRIET in association with ISTE GRIET Student Chapter hosted a talk on career guidance by renowned IPS officer Dr. R.S Praveen Kumar , Secretary- APSWREIS. The session was graced by Dr. Adapa Rama Rao, Dean of Counseling and Career Guidance.Students were encouraged to make the right choices in life and to overcome their weakness. The speaker also shared some of his previous work and life experiences. Almost 100 students attended and were benefitted from the session. The session had concluded with an interactive session between the students and the speaker.",
                "date_full": "",
                "year": "2015",
                "month": "FEB",
                "day": "23",
                "title_img_src": "title6.jpg",
                "event_link": "#/event/Career_Guidance",
                "gallery": ["g15.jpg", "g16.jpg", "g17.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "4312",
                    "timings": "12:30pm-3:30pm",
                    "contact_no": "9014074488",
                }

            },
            //event7
            {
                "title": "IDEAZ'15",
                "description": "ISTE student chapter conducted an erudite event called ideaz on April 17th i.e (17-04-15).The basic motto of this event was to help students realize the significant role of paper presentations and how they help in building their career. Paper presentations provide a beautiful platform to share your cognizance. It helps in dealing with your confidence issues when it comes to speak in front of a huge audience.\
The participants were given a choice to choose either from the topics of their own interest or from the topics that were well informed in advance. We had a nice turn up for the event. It was overwhelming to see the enthusiasm of the participants. While they presented we had a team of experts in the judge’s panel to examine them and provide scores accordingly. Based on expert’s decision the winners were awarded with certificates.\
",
                "description_para1": "The first prize was bagged by G.Uttej Reddy. This is one of the finest events conducted by the student body. At the end of the day we were able to help the participants overcome their fears and turned them into a bold and confident speakers and the result is adequate.",
                "date_full": "",
                "year": "2015",
                "month": "OCT",
                "day": "14",
                "title_img_src": "title7.jpg",
                "event_link": "#/event/ideaz",
                "gallery": ["g19.jpg", "g20.jpg", "g21.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "2312",
                    "timings": "12:30pm-3:30pm",
                    "contact_no": "9014074488",
                }

            },
            //event8
            {
                "title": "Design Sprint",
                "description": "It is estimated that there are around 1.75 billion smart phone users worldwide and more than 100 billion apps have been downloaded only from the apple app store till It date. These increasing numbers have caught the eye of today’s generation and many have decided to contribute to these growing numbers. Sometimes students may have very interesting ideas but they hesitate to share them because of fear of rejection and failure.",
                "description_para1": "In order to break this taboo the ISTE Student Chapter conducted an event called‘DESIGN SPRINT’ on  30th July,2015 .The main objective in conducting this event was to bringout the ingenious ideas hidden among the students. The event started of with the participants designing the basic structure of an application. The students worked in teams of four to design the layout of an app along with the special features it provides under the guidance of the technical leads of ISTE Student Chapter. Later the students were given an opportunity to present their ideas to the audience which helped them in conquering stage fear.Informal feedback from the audience was positive. They said that it was really a new learning experience as they got to work in a teams and came to know about the apps designed by other students as well.",
                "description_para2": "Out of all the 23 teams that came up with visionary and productive ideas team Nick, team J2NS and team Flash Horns were awarded the first second and third places respectively.",
                "date_full": "",
                "year": "2015",
                "month": "JULY",
                "day": "30",
                "title_img_src": "title8.jpg",
                "event_link": "#/event/Design_Sprint",
                "gallery": ["g22.jpg", "g23.jpg", "g24.jpg", "g25.jpg", "g26.jpg", "g27.jpg", "g28.jpg", "g29.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3302",
                    "timings": "01:30pm-3:30pm",
                    "contact_no": "9014074488",
                }

            },
            //event9
            {
                "title": "Code Sprint",
                "description": "To create an app it is just not enough to design the layout, adding life to that application can be done only by coding it. ‘CODE SPRINT ‘a sequel of design sprint was conducted by ISTE on 8th August 2015.",
                "description_para1": "The event was about educating the student about the thing to be kept in mind while designing a new application and steps to be followed in coding. Mr. Venkat Dinesh who is a member of “Google Developer Group(GDG) Hyderabad was invited to give a lecture on app designing. He enlightened the students about the software that is being used in recent times for app development and gave a detailed explanation about one of the famous software i.e Android digital studio.",
                "description_para2": "It was a hand-on session where the students got to explore the software and learnt how to code using it. Almost 70 students showed up for the event who said that they were very much enthralled with the session and requested to conduct more such educative  sessions and in the future.",
                "date_full": "",
                "year": "2015",
                "month": "AUG",
                "day": "08",
                "title_img_src": "title9.jpg",
                "event_link": "#/event/Code_Sprint",
                "gallery": ["g35.jpg", "g30.jpg", "g31.jpg", "g32.jpg", "g33.jpg", "g34.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "1108",
                    "timings": "01:30pm-4:00pm",
                    "contact_no": "9014074488",
                }

            },
            //event10
            {
                "title": "Tech Zap",
                "description": " As part of rapid internet growth in the last 10 years, most of the events are now happening online like webinars etc. The ISTE Student Chapter of GRIET has as many as 1000 viewers on its facebook page and its website. To encourage students to use the internet in a resourceful manner , a quiz competition ' Tech Zap ' was conducted online.The quiz was created using google forms and responses were collected. The quiz started at 7:30 pm and within 30 minutes more than 80 responses were collected.",
                "date_full": "",
                "year": "2015",
                "month": "AUG",
                "day": "28",
                "title_img_src": "title10.jpg",
                "event_link": "#/event/Tech_zap",
                "gallery": ["title4.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "",
                    "timings": "7:30pm",
                    "contact_no": "9014074488",
                }

            },
            //event11
            {
                "title": "Membership Drive",
                "description": "After the membership drive in February 2014, new memberships were welcomed during 29th,30th and 31st October. The drive focused on the different kinds of events ISTE Student Chapter conducted and the events which would be conducted in the coming days.",
                "description_para1": "Approximately 400 students registered for membership during the drive making ISTEthe largest student body of GRIET.",
                "date_full": "",
                "year": "2015",
                "month": "OCT",
                "day": "31",
                "title_img_src": "title11.jpg",
                "event_link": "#/event/Membership_Drive_2015",
                "gallery": ["g36.jpg", "g39.jpg", "g38.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "1st Year Block",
                    "timings": "9am-4pm",
                    "contact_no": "9014074488",
                }

            },
            //event12
            {
                "title": "Core Committee Selections 2016",
                "description": "ISTE GRIET is conducting selections for all the people out there.Dont miss this chance to become a integral part of ISTE family.We are eagerly waiting to meet you guys.",
                "date_full": "",
                "year": "2016",
                "month": "JAN",
                "day": "22",
                "title_img_src": "title12.jpg",
                "event_link": "#/event/Core_committee_Selections_2016",
                "gallery": ["g40.jpg", "g41.jpg", "g42.jpg", "g44.jpg", "g43.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "4412",
                    "timings": "1pm-4pm",
                    "contact_no": "9014074488",
                }

            },
            //event13
            {
                "title": "Core Committee Selections 2015",
                "description": "Do you want to organize the events like us ??? Do you want to join us ??? Do you want to be a part of our committee???? If its Yes,Don't miss the opportunity attend our selections and become a integral part of largest technical body in GRIET",
                "date_full": "",
                "year": "2015",
                "month": "MAR",
                "day": "14",
                "title_img_src": "title13.jpg",
                "event_link": "#/event/Core_committee_Selections_2015",
                "gallery": ["g45.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3412",
                    "timings": "12:30pm-4pm",
                    "contact_no": "9014074488",
                }
            },
            //event14
            {
                "title": "Arduino Session",
                "description": "Over the years Arduino has been the brain of thousands of projects, from everyday objects to complex scientific instruments. Due to its simple and flexible features, it has become the initial tool for the beginners to implement their ideas and to develop different projects and applications. In order to prove that it’s a great tool for the students ISTE Student chapter has conducted an “ARDUINO SESSION” on 11th February, 2016 by Mr.Naveen Kumar for the first year students.",
                "description_para1": "The main objective of the session was to train the students with hands on experience to handle basic electronic and electrical concepts. Around 60 students participated in the session. The session started with a detailed introduction of how an Arduino works and later with the advantages of it. The students were filled with satisfaction which made the session receive a huge positive response.",
                "date_full": "",
                "year": "2016",
                "month": "FEB",
                "day": "12",
                "title_img_src": "title14.jpg",
                "event_link": "#/event/Arduino_session",
                "gallery": ["g46.jpg", "g48.jpg", "g47.jpg", "g49.jpg", "g50.jpg", "g51.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "2102",
                    "timings": "1pm-4pm",
                    "contact_no": "9000038040",
                }


            },
            //event15
            {
                "title": "Digital Marketing",
                "description": "We have always had marketing. Ever since the middle ages when shops put up hand-carved wooden signs, the benefits of marketing have been clear: to help people who want to do business with you find you. As the years passed, people also changed. Now we find more people “search first , ask questions later” enthusiasts, search engine optimization, search engine marketing, and public relations emerged as contenders for the advertising which gave rise to the new era of marketing. ",
                "description_para1": "ISTE student chapter has a Tech talk on ‘Digital Marketing’ on 13th February, 2016 by Mr.Vishal Boppanna from NETELIXIR. Around 120 students have attended the session from various branches. The session was concluded with an interactive session with lot of questions coming up from the students which showed their interest in the field of marketing. The session was highly appreciated by the audience which made the event successful.",
                "date_full": "",
                "year": "2016",
                "month": "FEB",
                "day": "13",
                "title_img_src": "title15.jpg",
                "event_link": "#/event/Digital_Marketing",
                "gallery": ["g52.jpg", "g53.jpg", "g54.jpg", "g55.jpg", "g56.jpg", "g57.jpg", "g58.jpg", "g60.jpg", "g61.jpg", "g62.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "3302",
                    "timings": "1pm-4pm",
                    "contact_no": "9000038040",
                }

            },
            //event16
            {
                "title": "Pic-O-mentry",
                "description": "They say a picture speaks a thousand words but these thousand words differ from person to person and each will have a different version of it. To enhance the creative skills among students and bring out their potential of expression ISTE Student Chapter conducted a non technical event called Picomentry from 25th Feb to 4th march 2016. ",
                "description_para1": "Here the students were told to write a story on the picture of their choice irrespective of the genere. A drop was placed at the library for one week where the participants dropped their stories along with the picture. The event was only for the students of 1st year where 10 people participated. Out of all the interesting and amazing stories Sanjuktha Raychudhuri won the first prize. ",
                // "description_para2":"Here are the results of the most awaiting event PICOMENTRY..!!Congratulations to the winners.https://drive.google.com/open…https://drive.google.com/open…",
                "date_full": "",
                "year": "2016",
                "month": "FEB",
                "day": "25",
                "title_img_src": "title16.jpg",
                "event_link": "#/event/Pic-O-mentry",
                "gallery": ["title16.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "1st Year Block",
                    "timings": "10am-4pm",
                    "contact_no": "9000038040",
                }
            },
            //event 17

            {
                "title": "Fast And Furious",
                "description": "People recognize themselves in commodities but find their soul in AUTOMOBILES. Calling all the automobile nerds out! ISTE GRIET SB presents 'Fast and Furious', an automobile design competition being held on 15th July. The main objective is to design your own futuristic locomotive with the present technology.",
                "description_para1": "There is no entry fee and you should send in your designs either by a paper or a PowerPoint presentation. For more details, view the poster below or contact ISTE",
                // "description_para2":"Here are the results of the most awaiting event PICOMENTRY..!!Congratulations to the winners.https://drive.google.com/open…https://drive.google.com/open…",
                "date_full": "",
                "year": "2016",
                "month": "JULY",
                "day": "15",
                "title_img_src": "title17.jpg",
                "event_link": "#/event/fast_and_furious",
                "gallery": ["g63.jpg", "g64.jpg", "g65.jpg", "g66.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "4404",
                    "timings": "11am-1pm",
                    "contact_no": "9000038040",
                }

            },
            //event 18
            {
                "title": "Industrial Visit to RTTC",
                "description": "ISTE GRIET SB is back with another departmental event and this time its for the E.C.E students.We have planned an industrial visit to RTTC(B.S.N.L) at gachibowli on 11-08-2016.Transportation will be provided.This is an amazing opportunity to get practical knowledge in the latest equipment being used",
                "description_para1": "Register yourself via provided link : <a target='blank' href='https://docs.google.com/forms/d/e/1FAIpQLScLF4lrMl6pYcgA_QRZjq4iKtHjaCAU1qEa9blRuttcGcqFpg/viewform?c=0&w=1'>Click to register</a>",
                "description_para2": "NOTE:Limited Registrations. Registration Fee : Rs.230/-",
                "date_full": "",
                "year": "2016",
                "month": "AUG",
                "day": "11",
                "title_img_src": "title18.jpg",
                "event_link": "#/event/industrial_visit_rttc",
                "gallery": ["title18.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "",
                    "timings": "10:00 to 1:30",
                    "contact_no": "9014074488",
                }

            },
            //event 19
            {
                "title": "Code Auction",
                "description": "ISTE GRIET SB presents you with another departmental event 'CODE AUCTION' with a slightly different play for the students of CSE and IT departments providing you the perfect opportunity to improve your coding skills and be one of the best coders in the department. Interesting right?All the participants will be given some virtual money initially.Every question will have a certain base price and certain points to earn.They need to buy the questions in order to solve it within the time specified.Points will be awarded accordingly. The team with the highest score will be the winner.",
                "description_para1": "All you have to do is come and register for it. *Don't miss this opportunity*<a target='blank' href='https://goo.gl/forms/nz3k4FrnIpam1zZ43'>Click here to register</a> <p> Below are the winners</p>",
                "description_para2": "<ol><li>T.Praveen, A Vamsi, B Arun (CSE-3rd year)</li> <li>K. Amini Krishna, Sai Datta (CSE-2nd year)</li><li>D.Bala Sundeep Krishna, B.Sai Abhinay (CSE-3rd yr)</li></ol>",
                "date_full": "",
                "year": "2016",
                "month": "SEPT",
                "day": "28",
                "title_img_src": "title19.jpg",
                "event_link": "#/event/code_auction",
                "gallery": ["g68.jpg", "g69.jpg", "g70.jpg"],
                "imagedirectory": "images/",
                "on_center_page": true,
                "hash": "uniquetothispage",
                "test_random_code": "",
                "registrationDetails": {
                    "room_no": "2305",
                    "timings": "12:00 to 2:00",
                    "contact_no": "9014074488",
                }

            },



            // end
        ];

        // events data end


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
            "gallery": ["nt1.jpg", "ws3.jpg", "tech1.jpg", "music.jpg", "pc4.jpg", "lat2.jpg"],
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
                "gallery": ["nt1.jpg", "nt2.jpg", "nt3.jpg", "nt4.jpg"],
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
                "description": "The best platter of events brought infront of you to enjoy and dive into the plethora of technical and non-technical fun. The literature and arts part will set the groove and make you all Tap your feet asking with it.Thus grab this opportunity of excellent quality events offered to you by ISTE.Coz quality never goes out of style.*** only for first year students***#letsmela",
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
                "image_src": "Raghavendra.jpg",
                "role": "Treasurer",
                "fb_url": "https://www.facebook.com/thoude.raghavendra?fref=ts",
                "imagedirectory": "images/core/"
            }, {
                "name": "K.Naimisha",
                "image_src": "naimisha.jpg",
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
                "role": "Public Relations",
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
                "image_src": "Raghavendra.jpg",
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
        var bolds = ["iste", "Dr.Adapa Ramarao", "Dr. V.N Mani", "Dr. Y Vijayalatha", "'Android Workshop", "Tech talks", "Tech Zap",
            "Does the world need Nuclear Energy ?", "ideaz", "Paper presentations", "Rs.230/-"
        ];

        console.time("highlight");
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
        for (var i = 0; i < allEvents.length; i++) {
            searchData.push(allEvents[i]);
        }

        // GET THE center event after sorting so well fetch the latest event always
        centerEvent = allEvents.shift();
        // cache the event
        $rootScope["events"].push(centerEvent);
        availablesingledata[0] = centerEvent;
        //banner data short_description generation
        availablesingledata.forEach(function (event) {
            event["short_description"] = event.description.trim().split(" ", 150).join(" ") + " ...";
            event["fulldate"] = returndate(event.year, event.month, event.day);
        });

       


        bolds.forEach(function (eachbold) {
            // console.log(eachbold);
            // \\s:match whitespace , \\W: matches all that is not a word char [^A-Za-z0-9_]
            var name = "\\s" + eachbold + "\\s?\\W";
            reg.compile(name, "gi");
            //now loop over all our events data
            centerEvent.description = centerEvent.description.replace(reg, " <strong>" + eachbold + "</strong> ");
            mela_main.description = mela_main.description.replace(reg, " <strong>" + eachbold + "</strong> ");
            availablesingledata.forEach(function (eachEvent) {
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

        // console.timeEnd("highlight");
        // console.log(allEvents);
        // console.log(centerEvent);
        var service = {
            centerEvent: centerEvent,
            searchData: searchData,

            allEvents: allEvents,
            names16: names16,
            names15: names15,
            mela_main: mela_main,
            mela_rest: mela_rest
        };
        return service;
    } //factory
})();