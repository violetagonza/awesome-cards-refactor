"use strict";let clientData={palette:0,name:"",job:"",imgURL:"",email:"",phone:"",linkedin:"",github:""};const paletteA=getInputSelector(".js-radio-design-palette-1"),paletteB=getInputSelector(".js-radio-design-palette-2"),paletteC=getInputSelector(".js-radio-design-palette-3"),name=getInputSelector(".js-fill-name"),job=getInputSelector(".js-fill-job"),img=getInputSelector(".js-fill-file"),email=getInputSelector(".js-fill-email"),phone=getInputSelector(".js-fill-tel"),linkedin=getInputSelector(".js-fill-linkedin"),github=getInputSelector(".js-fill-github");function inputHandler(e){clientData.name=name.value,clientData.job=job.value,clientData.imgURL=img.value,clientData.email=email.value,clientData.phone=parseInt(phone.value),clientData.linkedin=linkedin.value,clientData.github=github.value,paintForm(),setInLS(),console.log(clientData)}function getInputSelector(e){return document.querySelector(e)}paletteA.addEventListener("change",paintColorsPalette),paletteB.addEventListener("change",paintColorsPalette),paletteC.addEventListener("change",paintColorsPalette),name.addEventListener("keyup",inputHandler),job.addEventListener("keyup",inputHandler),img.addEventListener("change",inputHandler),email.addEventListener("keyup",inputHandler),phone.addEventListener("keyup",inputHandler),linkedin.addEventListener("keyup",inputHandler),github.addEventListener("keyup",inputHandler);const namePreview=getInputSelector(".js-card-sample--card__title"),jobPreview=getInputSelector(".js-card-sample--card__subtitle"),imgPreview=getInputSelector(".js-card-sample--card__img"),emailPreview=getInputSelector(".js-email-preview"),phonePreview=getInputSelector(".js-tel-preview"),linkedinPreview=getInputSelector(".js-linkedin-preview"),githubPreview=getInputSelector(".js-github-preview");function paintForm(){""===clientData.name?namePreview.innerHTML="Nombre Apellido":namePreview.innerHTML=clientData.name,""===clientData.job?jobPreview.innerHTML="Front-end developer":jobPreview.innerHTML=clientData.job,emailPreview.setAttribute("href",`mailto: ${clientData.email}`),phonePreview.setAttribute("href",`tel: +34 ${clientData.phone}`),linkedinPreview.setAttribute("href",clientData.linkedin),githubPreview.setAttribute("href",clientData.github)}function paintColorsPalette(e){const t=e.currentTarget;t.classList.contains("js-radio-design-palette-1")?(addPalette1(),clientData.palette=1):t.classList.contains("js-radio-design-palette-2")?(addPalette2(),clientData.palette=2):t.classList.contains("js-radio-design-palette-3")&&(addPalette3(),clientData.palette=3),setInLS(),console.log(clientData)}function paintPaletteLS(){1===clientData.palette||0===clientData.palette?(addPalette1(),document.querySelector(".js-radio-design-palette-1").checked=!0):2===clientData.palette?(addPalette2(),document.querySelector(".js-radio-design-palette-2").checked=!0):3===clientData.palette&&(addPalette3(),document.querySelector(".js-radio-design-palette-3").checked=!0)}const linksCard=document.querySelectorAll(".js-card-sample--item__link");function addPalette1(){namePreview.classList.add("title--palette-1"),namePreview.classList.remove("title--palette-2","title--palette-3"),jobPreview.classList.add("subtitle--palette-1"),jobPreview.classList.remove("subtitle--palette-2","subtitle--palette-3");for(let e=0;e<linksCard.length;e++)linksCard[e].classList.add("link--palette-1"),linksCard[e].classList.remove("link--palette-2","link--palette-3")}function addPalette2(){namePreview.classList.add("title--palette-2"),namePreview.classList.remove("title--palette-1","title--palette-3"),jobPreview.classList.add("subtitle--palette-2"),jobPreview.classList.remove("subtitle--palette-1","subtitle--palette-3");for(let e=0;e<linksCard.length;e++)linksCard[e].classList.add("link--palette-2"),linksCard[e].classList.remove("link--palette-1","link--palette-3")}function addPalette3(){namePreview.classList.add("title--palette-3"),namePreview.classList.remove("title--palette-1","title--palette-2"),jobPreview.classList.add("subtitle--palette-3"),jobPreview.classList.remove("subtitle--palette-1","subtitle--palette-2");for(let e=0;e<linksCard.length;e++)linksCard[e].classList.add("link--palette-3"),linksCard[e].classList.remove("link--palette-1","link--palette-2")}function addValues(){name.value=clientData.name,job.value=clientData.job,email.value=clientData.email,phone.value=clientData.phone,github.value=clientData.github,linkedin.value=clientData.linkedin}function getFromLS(){const e=JSON.parse(localStorage.getItem("Data"));null!==e&&(clientData=e),paintForm(),paintPaletteLS(),addValues()}function setInLS(){localStorage.setItem("Data",JSON.stringify(clientData))}getFromLS();const buttonReset=document.querySelector(".js-card-sample--button");function confirmReset(){Swal.fire({html:' <h2 class="swal2-title" id="swal2-title" style="display: flex; font-size:1.25em; font-family: merriweather;">Se van a borrar los cambios, ¿está seguro?</h2>',width:400,showCancelButton:!0,cancelButtonColor:"#CB4335",cancelButtonText:"No, volver al editor",confirmButtonColor:"#28B463",confirmButtonText:"Si, borrar cambios",background:"#fff",backdrop:'\n\t\t\trgba(0,0,123,0.4)\n\t\t\turl("./assets/images/nyan-cat-2.gif")\n\t\t\tleft top\n\t\t\tno-repeat \n\t\t'}).then(resetForm)}function resetForm(){clientData.palette=0,clientData.name="",clientData.job="",clientData.imgURL="",clientData.email="",clientData.phone="",clientData.linkedin="",clientData.github="",name.value="",job.value="",email.value="",phone.value="",linkedin.value="",github.value="",document.querySelector(".js-card-created").classList.add("hidden"),setInLS(),paintForm(),paintPaletteLS(),handleButton()}buttonReset.addEventListener("click",confirmReset);const arrows=document.querySelectorAll(".js-arrow"),getDesignTitle=document.querySelector(".design--container__1"),getDesignSection=document.querySelector(".design--container__2");function hidDesignSection(e){getDesignSection.classList.toggle("hidden"),arrows[0].classList.toggle("closed")}getDesignTitle.addEventListener("click",hidDesignSection);const getFillTitle=document.querySelector(".js-fill-title"),getFillSection=document.querySelector(".js-fill--div");function hidFillSection(e){getFillSection.classList.toggle("hidden"),arrows[1].classList.toggle("closed")}getFillTitle.addEventListener("click",hidFillSection);const getShareTitle=document.querySelector(".js-share-title"),getShareSection=document.querySelector(".js-share--div");function hidShareSection(e){getShareSection.classList.toggle("hidden"),arrows[2].classList.toggle("closed")}getShareTitle.addEventListener("click",hidShareSection);const getInputName=document.querySelector(".js-fill-name"),getInputJob=document.querySelector(".js-fill-job"),getInputMail=document.querySelector(".js-fill-email"),getInputPhone=document.querySelector(".js-fill-tel"),getInputLinkedin=document.querySelector(".js-fill-linkedin"),getInputGithub=document.querySelector(".js-fill-github"),btn=document.querySelector(".js-btn");function handleButton(){""===getInputGithub.value||""===getInputJob.value||""===getInputName.value||""===getInputPhone.value||""===getInputMail.value||""===getInputLinkedin.value?btn.classList.remove("js-share--button"):btn.classList.add("js-share--button")}function hide(){document.querySelector(".js-card-created").classList.remove("hidden"),createCardURL()}function createCardURL(){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(clientData),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e)}))}btn.addEventListener("click",hide),paletteA.addEventListener("change",handleButton),paletteB.addEventListener("change",handleButton),paletteC.addEventListener("change",handleButton),name.addEventListener("keyup",handleButton),job.addEventListener("keyup",handleButton),img.addEventListener("change",handleButton),email.addEventListener("keyup",handleButton),phone.addEventListener("keyup",handleButton),linkedin.addEventListener("keyup",handleButton),github.addEventListener("keyup",handleButton);const shareURL=document.querySelector(".js-share-url");function showURL(e){e.success?shareURL.innerHTML="<a href="+e.cardURL+">"+e.cardURL+"</a>":shareURL.innerHTML="ERROR:"+e.error}