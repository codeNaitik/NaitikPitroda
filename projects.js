const MyProjects = [

   
   
    {
        id:1,
        img: "./certi/tech_gigi_coding_round.png",
        title:"Tech Gig open coding contest round",
        description:"I get an participation certificate from Tech Gig open coding contest round, they have given some coding promblems and solve it within givne time, I have solve that question with an correct approach within given time.",

    },
    {
        id:2,
        img: "./certi/tech_gigi_coding_round.png",
        title:"Tech Gig open coding contest round",
        description:"I get an participation certificate from Tech Gig open coding contest round, they have given some coding promblems and solve it within givne time, I have solve that question with an correct approach within given time.",

    },
    {
        id:3,
        img: "./certi/tech_gigi_coding_round.png",
        title:"Tech Gig open coding contest round",
        description:"I get an participation certificate from Tech Gig open coding contest round, they have given some coding promblems and solve it within givne time, I have solve that question with an correct approach within given time.",

    },
    {
        id:4,
        img: "./certi/tech_gigi_coding_round.png",
        title:"Tech Gig open coding contest round",
        description:"I get an participation certificate from Tech Gig open coding contest round, they have given some coding promblems and solve it within givne time, I have solve that question with an correct approach within given time.",

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



