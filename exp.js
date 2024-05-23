const MyProjects = [

   
    {
        id:1,
        img: "exp/exp23_iit.png",
        title:"Data Management Intern at IIT-Bombay (BharatGPT)",
        description:"Currently, Contributing to the BharatGPT project at the Indian Institute of Technology Bombay, funded by the Government of India. Collaborated with master's and PhD students and renowned professors on data management, specializing in LLM, multilingual models, and data cleaning. Led data collection efforts, acquiring 75,000 books. Developed extraction scripts, conducted research paper analysis, and enhanced multilingual models to bridge language barriers in India's diverse linguistic landscape.",

    },
    {
        id:1,
        img: "exp/exp25_iep.jpg",
        title:"Project Intern At Laurentian University, Sudbury, Canada",
        description:"Collaborated with Dr. Kalapdrum Passi, a Professor at Laurentian University in Sudbury, Canada, on a lung cancer prediction project. Developed a highly accurate predictive model leveraging Dr. Passi's mentorship and expertise, achieving a remarkable 98% accuracy rate. Led the identification and analysis of physical and health-related factors to predict the occurrence of lung cancer.",

    },
    {
        id:1,
        img: "exp/exp24_dfh.png",
        title:"Web Developer Intern Digital For Humanity",
        description:"Led development of the 'Proeducator' web app using React and Node.js, addressing data transmission hurdles via REST API integration. Demonstrated proactive problem-solving to ensure smooth user experience and client satisfaction.",

    },
    {
        id:1,
        img: "exp/exp17_GDSC.jpg",
        title:"Google Developer Student Club Web Development Leader",
        description:"As an Google Developer Student Club Web Development Leader may work is to organize events, Hackathon, quiz, podcast among college with core GDSC team member and mentoring student among campus.",

    },
    {
        id:2,
        img: "exp/exp22_etab.png",
        title:"Product Design and web developer Intern at Etab tech solution ",
        description:"Design the product from low fidelity UI to figma. Making prototypes, wireframes and colour palatte. Converting Figma design into code. Working on tech: React, Figma, UI/UX.",

    },
    {
        id:3,
        img: "./exp/exp18_swoc.png",
        title:"Script Winter of Code 2.0. (Open Source)",
        description:"Script Winter of Code 2.0 is and Open Source program for 3 months. That's why it is called winter code. Contributed in Healthbliss created an authentication page for user. Having immersive User interface. Adding alert feature in it. On invalid inputs or blank input it will alert user for it.",

    },
    {
        id:4,
        img: "./exp/exp21_gssoc.png",
        title:"Girl Script summer of code (GSSOC'22)",
        description:"Girl Script summer of code (GSSOC'22) is and <b>Open Source</b> program for 3 months. I have selected topics of web Development in both front-end and full stack projects. ",

    },
    {
        id:5,
        img: "./exp/EXP14_web_intern_GSF.png",
        title:"Web Development Intern at Gramm Swaraj Foundation",
        description:"Working on website on daily basis and updating it according to need. Worked on front-end technologies like Html, Css, Javascript, Bootstrap. Ensuring the feasibility of UI designs. Test for its experience.",

    },
    {
        id:6,
        img: "./exp/exp19_lueratech.png",
        title:"Web Development Intern at LUEURTECH SOFTWARE SOLUTIONS PVT. LTD.",
        description:"Successfully completed web Development internship at LUEURTECH SOFTWARE SOLUTIONS PVT. LTD. I have worked with front-end technologies and created imersive UI for them, added content for them and make it highly responsive. ",

    },
    {
        id:7,
        img: "./exp/exp3_webtraining.png",
        title:"Web development training: Internshala",


    },
    {
        id:8,
        img: "exp/exp10.jpg",
        title:"Business Development Intern at Mente-me Pvt.Ltd",
        description:"In this duration of Internship our work is to generate leads through Social Media, and representing organization among campus with student. Collabrating with college clubs, students bodies, placement cells.",

    },
    {
        id:9,
        img: "./exp/exp1_neo.png",
        title:"Social Media Marketing Intern at National Engineering Olypiad (NEO)",
        description:"As a Social Media Marketing Intern of an well known organisation National Enginnering Olympiad (NEO). Throughout this internship I have worked very hard and smart completed all assigned tasks within given time also generated leads for them. Being a 'Top Performer' I have got an Letter of Recommendation from company.",

    },
    {
        id:10,
        img: "./exp/exp7_iim.jpeg",
        title:"IIM BANGALORE VISTA'21 CAMPUS AMBASSADOR",
        description:"IIM Bangalore Vista business summit'21 is now one of Asia’s largest business festivals. Vista is an opportunity to learn, grow, and battle your wits out with the brightest minds across all domains within business and management. Vista Campus Ambassador program is an internship opportunity that is provided by Team Vista of IIM Bangalore. Ambassadors helps to connect Vista to the students in their own campus and explore business webinar, programs, contest.",

    },
    {
        id:11,
        img: "./exp/exp_12_coding_min.png",
        title:"Campus Captain at Coding Minutes",
        description:"After successfully cracking Application form and Interview. I got selected as Campus captain at coding minutes. Looking forward to see more :)",

    },
    {
        id:12,
        img: "./exp/Exp13_isp24.png",
        title:"Internshala student partner'24 (ISP'24)",
        description:"After successfully cracking Application form. I got selected as Internshala student partner'24 (ISP'24). Looking forward to see more :)",

    },
    {
        id:13,
        img: "./exp/exp9_yolo.jpg",
        title:"Campus Ambassador : Youth Online Learning Organization(YOLO)",
        description:"During this Internship I have worked on spreading awareness, researching socio-legal topics, social media marketing, sharing information in multiple pincode groups of facebook , participated in many intiatives such as onlinesafety, feesthemtoo, projectpaperbridge, mentalhealthmay, dalitlivesmatter, YOLOkids.",

    },
    {
        id:14,
        img: "./exp/exp8_iitbomb.jpg",
        title:"Entrepreneurship cell-IIT Bombay campus Ambassador",
        description:"It's an 6-months campus Ambassador internship currently going on.",

    },
    {
        id:15,
        img: "./exp/exp5_UN.png",
        title:"United Naitons V-force volunteer",
        description:"As a volunteer i have worked on bringing awareness among poeple by sharing valuable post in social media related to covid-19, performed given all tasks within given time period.",

    },
    {
        id:16,
        img: "./exp/exp11_tutoraj.jpg",
        title:"Marketing Internship at Tutoraj pvt ltd",
       

    },
    
   



]

const mycontent = document.querySelector(".content_div")

window.addEventListener("DOMContentLoaded", function(){

    const showInHtml = MyProjects.map((project, index)=>{
        return `
        
        <div class="py-3 mt-5">
            <div class="container-fluid" style="padding-top: 1px;padding-bottom: 1px;">
                <div class="row row-cols-1 row-cols-lg-2" style="margin: 0px;">
                    <div class="col align-self-center"><img class="img-fluid" data-aos="flip-up" data-aos-duration="4000" 
                    src="${project.img}"></div>
    
                    <div class="col align-self-center" style="margin-top: 20px;margin-bottom: 20px;">
    
                        <div class="text-center " data-aos="fade-up" data-aos-duration="1000" style="padding: 5px;">
    
                            <div class="linee" data-aos="zoom-in" data-aos-duration="2100" style="border: 10px solid white;border-radius: 5px;
                            padding-top: 10px;"></div>
    
                            <p data-aos="zoom-out" data-aos-duration="1000" style="font-size: 40px;color: white;padding-top: 11px;"><strong>
                            ${project.title}
                            
                            </strong><br></p>
    
                            <p data-aos="fade-down "  data-aos-duration="1250" data-aos-offset="200" style="color: rgb(228,228,228); font-size: 17px; text-align: justify; ">
                     ${project.description}
                             </p>
                          
                            <!-- <div class="button" >
                                <button class=" btnn btnn3" data-aos="zoom-in" data-aos-offset="100" data-aos-duration="2000">Download cv </button>
                            </div> -->
                            <div class="linee" data-aos="zoom-in" style="border: 10px solid white;border-radius: 5px;
                            padding-top: 10px;"></div>
                            
                            </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    mycontent.innerHTML = showInHtml
})



