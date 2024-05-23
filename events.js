const MyProjects = [

    {
        id:1,
        img: "./events/wow.jpg",
        title:"Google WoW conference",
        description:"WOW conference of Google Developer Student Club WOW at Parul University ",

    },
    {
        id:1,
        img: "./events/awsday.jpg",
        title:"AWS community day",
        description:"Attended AWS community day with my friends and connected with many new peoples",

    }, {
        id:1,
        img: "./events/gdg_meetup.jpg",
        title:"Google Developer Group Baroda",
        description:"Attended Google Developer Group Baroda meetup",

    }, {
        id:1,
        img: "./events/polygon.jpg",
        title:"Polygon Conference",
        description:"Attended Polygon conference and learned about web3 and got to engage with web3 community",

    }, {
        id:1,
        img: "./events/gdgb.jpg",
        title:"Google Developer Group meetup",
        description:"Attended Google Developer Group Baroda meetup",

    }, {
        id:1,
        img: "./events/solana-event.jpg",
        title:"Solana meetup",
        description:"Had an meetup with Nas.io Nussier Hussan for solana ",

    }, 
    {
        id:1,
        img: "./events/dsc_wow.png",
        title:"Google Developer Student Club WOW",
        description:"Learned about UI/UX, flutter, cloud. Got roadmap for beginner. How to start initially and move forward.",

    },
    {
        id:2,
        img: "./events/event1_ai.png",
        title:"AI & its application, techxperts webisodes",
        description:"Learned about the artifical intelligence and how it will work and release human efforts, future of artifical intelligence how industry will work on it and its future scopes.",

    },
    {
        id:3,
        img: "./events/Event_svit.png",
        title:"Essay writing competiton organized by S.V.I.T college",
       

    },
    {
        id:4,
        img: "./events/event2_networking.png",
        title:"Networking and CCNA- Introduction to Networking",
        description:"Got knowledge of Networking and its basic. In this webinar it's an introudctin in this field showing how we can make carrier in this field future scope,demand, courses and exam required to get certified all stuff related to networking.",

    },
    {
        id:5,
        img:"./events/event3_5g.png",
        title:"Use of 5G technology in future telecommunication",
description:"In this webinar I learned about 5G technology how it will change world and help industry. How it will work in future telecommunication system."
    },
    {
        id:6,
        img:"./events/Event4_internshala.png",
        title:"How to keep yourself happy and importance of self-love",
description:"This webinar was different from tech webinar, it's about our self and happiness how we can make us happy and stay blessed and love yourself."
    },
    {
        id:7,
        img:"./events/EVent5_pledge.png",
        title:"E-waste pledge ministry of electronics and information technology",

    },
    {
        id:8,
        img:"./events/event_quiz_abdul.png",
        title:"National service scheme cell- Quiz on life of gandhiji",

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



