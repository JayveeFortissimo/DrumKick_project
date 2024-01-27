const buttons = document.querySelectorAll('.Child button');


const audio = document.querySelector('audio');



buttons.forEach((inso,index)=>{

    inso.addEventListener('click',(e)=>{
       
      switch(index){
        case 0:
      audio.setAttribute('src','Sound/clap.wav');
      audio.play();
      console.log(index)
        break;

        case 1:
            audio.setAttribute('src','Sound/hihat.wav');
            audio.play();
            console.log(index)
        break;

        case 2:
            audio.setAttribute('src','Sound/Kick.wav');
            audio.play();
            console.log(index)
        break;

        case 3:
            audio.setAttribute('src','Sound/openhat.wav');
            audio.play();
            console.log(index)
        break;

        case 4:
            audio.setAttribute('src','Sound/boom.wav');
            audio.play();
            console.log(index)
        break;

        case 5:
            audio.setAttribute('src','Sound/ride.wav');
            audio.play();
            console.log(index)
        break;

        case 6:
            audio.setAttribute('src','Sound/snare.wav');
            audio.play();
            console.log(index)
        break;

        case 7:
            audio.setAttribute('src','Sound/tom.wav');
            audio.play();
            console.log(index)
        break;

        default:
            Swal.fire({
                title: "Invalid Clicks",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        break;


      }

    })
   
})





window.addEventListener('keydown',(e)=>{
   
    try{
        switch(e.key){
      
            case "a":
          audio.setAttribute('src','Sound/clap.wav');
          audio.load()
          audio.play();
       
            break;
    
            case "s":
                audio.setAttribute('src','Sound/hihat.wav');
                audio.load()
                audio.play();
              
            break;
    
            case "d":
                audio.setAttribute('src','Sound/Kick.wav');
                audio.load()
                audio.play();
               
            break;
    
            case "f":
                audio.setAttribute('src','Sound/openhat.wav');
                audio.load()
                audio.play();
                
            break;
    
            case "g":
                audio.setAttribute('src','Sound/boom.wav');
                audio.load();
                audio.play();
                
            break;
    
            case "h":
                audio.setAttribute('src','Sound/ride.wav');
                audio.load()
                audio.play();
                
            break;
    
            case "o":
                audio.setAttribute('src','Sound/snare.wav');
                audio.load()
                audio.play();
             
            break;
    
            case "h":
                audio.setAttribute('src','Sound/tom.wav');
                audio.load()
                audio.play();
               
            break;
    
            default:
                Swal.fire({
                    title: "Invalid Letters",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            break;
    
    
          
        }
    }catch(erro){
        console.log('heelo')
    }
   
})




