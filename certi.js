const MyProjects = [

    {
        id:2,
        img: "./certi/solana.jpg",
        title:"Solana blockchain development ",
        description:"Got selected in Solana blockchain development bootcamp learned about solana fundamentals, working, rust and more",

    }, {
        id:2,
        img: "./certi/productM.jpg",
        title:"Associate Product Management ",
        description:"Learned about product management tools, cycles, methods and builded a group project in improvement of android application 'Kindle' ",

    },
   
    {
        id:1,
        img: "./certi/tech_gigi_coding_round.png",
        title:"Tech Gig open coding contest round",
        description:"I get an participation certificate from Tech Gig open coding contest round, they have given some coding promblems and solve it within givne time, I have solve that question with an correct approach within given time.",

    },
    {
        id:2,
        img: "./certi/certi14_social_syco_.png",
        title:"Wesleyan University: Social Psychology",
        description:"I have been 'HONORS' badge Using this certificate of social Psychology",

    },
    {
        id:4,
        img: "./certi/certi11_awre_ai.jpeg",
        title:"AI aware",
        description:"Talks about Human Intelligence Helps to differentiate AI and non-AI machines, and Unravel popular misconceptions around the technology.",

    },
    {
        id:3,
        img: "./certi/certi1_googlecloud.png",
        title:"Google Cloud : Introduction to identity",
        description:"Cloud Identity is an Identity as a Service (IDaaS) solution that centrally manages users and groups. skills taught in this course are IDM- Identity management ,Security Assertion Markup Language (SAML), Cloud Computing.Establish a Cloud Identity domain for their organization or personal domain. Add users in order to practice user lifecycle management. Modify user permissions to gain an understanding of core Cloud Identity features. Add mobile devices within the Google Mobile Management module. Modify mobile management policy sets to gain familiarity with product options. Navigate the Reports module, and practice running reports. Explore and apply different security protocols to the domain.",

    },
    {
        id:4,
        img: "./certi/exp3_webtraining.png",
        title:"Web Development Training- Internshala",
        description:"I have done an 8-weeks web development Training through Internshala. I have learned about Html, Css, Bootstrap, php, Mysql. I have created an E-commerece website using this course. Created an Blogging website using bootstrap, html, css.",

    },
    {
        id:4,
        img: "./certi/certi13_ux.png",
        title:"UX-User Experience- CALARTS",
        description:"Learned what is UX. Analysing an app and having study of its UX. Mapping, Testing, envisioning, learn to build sitemap, building wireframes and linking it and creating an Application.",

    },{
        id:4,
        img: "./certi/certi4_UI.png",
        title:"CalArts- Visual elements of User Interface Design",
        description:"I have learned about style,speed,compostion,structure, color, shape ,Imagery, typography, icons. selecting size of an button, color compostion plays an very important role in UI. this all things make and website/application interactive and creative for users.",

    },{
        id:4,
        img: "./certi/certi5_game.png",
        title:"BitDegree- Making a game using unity",
        description:"learned how to make games using unity and created an small mini game using these.",

    },

    {
        id:4,
        img: "./certi/certi6_google_mar.png",
        title:"Google fundamentals of digital marketing certificate",
        description:"I have cleared this fundamentals of digital marketing exam and got htis certificate. learned about SEO, SMM, solving real life promblems example and giving quiz for it. also learned about Tools related to digital marketing.",

    },

    {
        id:4,
        img: "./certi/Certi10_aiaprr.jpeg",
        title:"AI apprectiate",
        description:"Describes the different domains of AI, their impact on various industries Elaborates about the principles of responsible AI and AI ethics.AI related concepts explained through engaging activities and quizzes.",

    },

    {
        id:4,
        img: "./certi/certi11_awre_ai.jpeg",
        title:"AI aware",
        description:"Talks about Human Intelligence Helps to differentiate AI and non-AI machines, and Unravel popular misconceptions around the technology.",

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



