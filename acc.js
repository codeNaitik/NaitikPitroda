const MyProjects = [

   
    {
        id:1,
        img: "./acc/etab_lor.png",
        title:"Letter of Recommendation by ETAB ",
        description:"",

    }, {
        id:1,
        img: "./acc/nandini.png",
        title:"Letter of Recommendation by Madam Dr. Nandini Chaudhari  ",
        description:"",
    }, {
        id:1,
        img: "./acc/nitesh.png",
        title:"Letter of Recommendation by Sir Dr. Nitesh Sureja  ",
        description:"",
    }, {
        id:1,
        img: "./acc/shivam.png",
        title:"Letter of Recommendation by Sir Dr. Shivam upadhyay ",
        description:"",
    },
    {
        id:1,
        img: "./acc/NEO ca LOR_page-0001.png",
        title:"NATIONAL ENGINEERING OLYMPIAD (NEO), LETTER OF RECOMMENDATION ",
        description:"As a Social Media Marketing Intern of an well known organisation National Enginnering Olympiad (NEO). Throughout this internship I have worked very hard and smart completed all assigned tasks within given time also generated leads for them. Being a 'Top Performer' I have got an Letter of Recommendation from company.",

    },
    {
        id:2,
        img: "./acc//gsf_LOR.png",
        title:"Web designing Intern at Gramm Swaraj Foundation, LETTER OF RECOMMENDATION ",
        description:"As a Web designing Intern at Gramm Swaraj Foundation. Throughout this internship I have worked very hard and smart completed all assigned tasks within given time. Being a 'Good Performer' I have got an Letter of Recommendation from company.",

    },
    {
        id:3,
        img: "./acc/appreciation.png",
        title:"Certificate Of Appreciation by Internshala",
        description:"Got an <b>'Certificate Of Appreciation'</b> by Internshala. For representing thier organization among student bodies in campus. Helping students to get thier Field Internship and training course in pandemic. ",

    },
    {
        id:4,
        img: "./acc/exp7_iim.jpeg",
        title:"IIM Bangalore Vista business summit'21 ",
        description:"IIM Bangalore Vista business summit'21 is now one of Asia’s largest business festivals. Vista is an opportunity to learn, grow, and battle your wits out with the brightest minds across all domains within business and management. Vista Campus Ambassador program is an internship opportunity that is provided by Team Vista of IIM Bangalore. Ambassadors helps to connect Vista to the students in their own campus and explore business webinar, programs, contest."


    },
    {
        id:5,
        img:"./exp/Campus_Captain Card (1).gif",
        title:"Campus Captain at Coding Minutes",
        description:"After successfully cracking Application form and Interview. I got selected as Campus captain at coding minutes. Looking forward to see more :)"
    },
    // {
    //     id:6,
    //     img:"./acc/c++_badge.png",
    //     title:"C++ language badge, Hackerrank",
    //     description:" I have received a badge from 'Hackerrank' on solving c++ promblem among the platform. Increase in solving promblem increase rating and it lead's to stars."
    // },
    // {
    //     id:7,
    //     img:"./acc/c_badge.png",
    //     title:"C langauge badge, Hackerrank",
    //     description:"I have received a badge from 'Hackerrank' on solving c language promblem's among the platform. Increase in solving promblem increase rating and it lead's to stars."
    // },
    {
        id:8,
        img:"./acc/Badge red flag with logo.png",
        title:"Azure developer league 2021 badge",
        description:"Microsoft is conducting Azure Developer League, which is a gamified, self-paced technical upskilling challenge built on top of Microsoft Learn through which you can advance your career, earn recognition, and validate your technical knowledge for current and future industry job-roles."
    },
    {
        id:9,
        img:"./acc/AI apprectiate.jpeg",
        title:"Ai Apprectiate",
        description:"Describes the different domains of AI, their impact on various industries Elaborates about the principles of responsible AI and AI ethics.AI related concepts explained through engaging activities and quizzes. "
    },
    {
        id:10,
        img:"./acc/Ai aware.jpeg",
        title:"AI Aware",
        description:"Defines what is Artificial Intelligence,Talks about Human Intelligence Helps to differentiate AI and non-AI machines, and Unravel popular misconceptions around the technology."
    }, {
        id:11,
        img:"./acc/qwiklab1.png",
        title:"Google cloud Qwiklabs badge",
        description:"I got this Google cloud Qwiklabs badge after performing succesfully the foundational infrastructure tasks in qwiklabs."
    }, {
        id:12,
        img:"./acc/qwiklab2.png",
        title:"Google cloud Qwiklabs badge",
        description:"I got this Google cloud Qwiklabs badge after performing succesfully the lab Create and manage cloud resources in qwiklabs."
    },
    {
        id:13,
        img:"./acc/qwiklab3.png",
        title:"Baseline:infrastructure Google cloud Qwiklabs badge",
        description:"I got this Google cloud Qwiklabs badge after performing succesfully the lab basline: infrastructure in qwiklabs."
    },{
        id:14,
        img:"./acc/qwiklab4.jpg",
        title:"Google cloud essentials Qwiklabs badge",
        description:"I got this Google cloud Qwiklabs badge after performing succesfully the lab Google cloud essentials in qwiklabs."
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



