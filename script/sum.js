document.getElementById("id-1").addEventListener("click",function(){
    alert("Board updated Successfully")
    const amount=document.getElementById("minus").innerText;
    let convertedamount=parseInt(amount);
    convertedamount=convertedamount-1;
    
    document.getElementById("minus").innerText=convertedamount;

    const amount2=document.getElementById("plus").innerText;
    let convertedamount2=parseInt(amount2);
    convertedamount2=convertedamount2+1;
    document.getElementById("plus").innerText=convertedamount2;

    const btn=document.getElementById("id-1");
    btn.setAttribute('disabled',true);
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-[#CED6FF]");

    if(convertedamount===0){
        alert("congrats!!! You have completed all the current task");
    }

    const fixed=document.getElementById("fix-1").innerText;
    

    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.classList.add("bg-[#F4F7FF]","p-4","m-4","rounded-2xl","font-bold");
    p.innerText=`
    You have completed the task ${fixed} at ${newtime}
    `
    container.appendChild(p);
})

document.getElementById("id-2").addEventListener("click",function(){
    alert("Board updated Successfully")
    const amount=document.getElementById("minus").innerText;
    let convertedamount=parseInt(amount);
    convertedamount=convertedamount-1;
    
    document.getElementById("minus").innerText=convertedamount;

    const amount2=document.getElementById("plus").innerText;
    let convertedamount2=parseInt(amount2);
    convertedamount2=convertedamount2+1;
    document.getElementById("plus").innerText=convertedamount2;

    const btn=document.getElementById("id-2");
    btn.setAttribute('disabled',true);
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-[#CED6FF]");

    if(convertedamount===0){
        alert("congrats!!! You have completed all the current task");
    }
    const fixed=document.getElementById("fix-2").innerText;

    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.classList.add("bg-[#F4F7FF]","p-4","m-4","rounded-2xl","font-bold");
    p.innerText=`
    You have completed the task ${fixed} at ${newtime}
    `
    container.appendChild(p);


})

document.getElementById("id-3").addEventListener("click",function(){
    alert("Board updated Successfully")
    const amount=document.getElementById("minus").innerText;
    let convertedamount=parseInt(amount);
    convertedamount=convertedamount-1;
    
    document.getElementById("minus").innerText=convertedamount;

    const amount2=document.getElementById("plus").innerText;
    let convertedamount2=parseInt(amount2);
    convertedamount2=convertedamount2+1;
    document.getElementById("plus").innerText=convertedamount2;

    const btn=document.getElementById("id-3");
    btn.setAttribute('disabled',true);
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-[#CED6FF]");

    if(convertedamount===0){
        alert("congrats!!! You have completed all the current task");
    }
    const fixed=document.getElementById("fix-3").innerText;

    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.classList.add("bg-[#F4F7FF]","p-4","m-4","rounded-2xl","font-bold");
    p.innerText=`
    You have completed the task ${fixed} at ${newtime}
    `
    container.appendChild(p);

})

document.getElementById("id-4").addEventListener("click",function(){
    alert("Board updated Successfully")
    const amount=document.getElementById("minus").innerText;
    let convertedamount=parseInt(amount);
    convertedamount=convertedamount-1;
    
    document.getElementById("minus").innerText=convertedamount;

    const amount2=document.getElementById("plus").innerText;
    let convertedamount2=parseInt(amount2);
    convertedamount2=convertedamount2+1;
    document.getElementById("plus").innerText=convertedamount2;

    const btn=document.getElementById("id-4");
    btn.setAttribute('disabled',true);
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-[#CED6FF]");

    if(convertedamount===0){
        alert("congrats!!! You have completed all the current task");
    }
    const fixed=document.getElementById("fix-4").innerText;


    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.classList.add("bg-[#F4F7FF]","p-4","m-4","rounded-2xl","font-bold");
    p.innerText=`
    You have completed the task ${fixed} at ${newtime}
    `
    container.appendChild(p);
})

document.getElementById("id-5").addEventListener("click",function(){
    alert("Board updated Successfully")
    const amount=document.getElementById("minus").innerText;
    let convertedamount=parseInt(amount);
    convertedamount=convertedamount-1;
    
    document.getElementById("minus").innerText=convertedamount;

    const amount2=document.getElementById("plus").innerText;
    let convertedamount2=parseInt(amount2);
    convertedamount2=convertedamount2+1;
    document.getElementById("plus").innerText=convertedamount2;

    const btn=document.getElementById("id-5");
    btn.setAttribute('disabled',true);
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-[#CED6FF]");

    if(convertedamount===0){
        alert("congrats!!! You have completed all the current task");
    }
    const fixed=document.getElementById("fix-5").innerText;

    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.classList.add("bg-[#F4F7FF]","p-4","m-4","rounded-2xl","font-bold");
    p.innerText=`
    You have completed the task ${fixed} at ${newtime}
    `
    container.appendChild(p);
    
})

document.getElementById("id-6").addEventListener("click",function(){
    alert("Board updated Successfully")
    const amount=document.getElementById("minus").innerText;
    let convertedamount=parseInt(amount);
    convertedamount=convertedamount-1;
    
    document.getElementById("minus").innerText=convertedamount;

    const amount2=document.getElementById("plus").innerText;
    let convertedamount2=parseInt(amount2);
    convertedamount2=convertedamount2+1;
    document.getElementById("plus").innerText=convertedamount2;

    const btn=document.getElementById("id-6");
    btn.setAttribute('disabled',true);
    btn.classList.remove("bg-[#3752FD]");
    btn.classList.add("bg-[#CED6FF]");

    if(convertedamount===0){
        alert("congrats!!! You have completed all the current task");
    }
    const fixed=document.getElementById("fix-6").innerText;

    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.classList.add("bg-[#F4F7FF]","p-4","m-4","rounded-2xl","font-bold");
    p.innerText=`
    You have completed the task ${fixed} at ${newtime}
    `
    container.appendChild(p);
})

document.getElementById("clear-history").addEventListener("click",function(){
    document.getElementById("show").innerHTML="";
})

document.getElementById("color-change").addEventListener("click",function(){
    document.body.style.backgroundColor='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
})

document.getElementById("page").addEventListener("click",function(){
    window.location.href="./answer.html";
})