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

    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.innerText=`
    You have completed the task Fix Mobile Button issue at ${newtime}
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
    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.innerText=`
    You have completed the task Add Dark Mode at ${newtime}
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
    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.innerText=`
    You have completed the task Optimize Home Page at ${newtime}
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
    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.innerText=`
    You have completed the task Add new emoji 🤲 at ${newtime}
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
    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.innerText=`
    You have completed the task Integrate OpenAI API at ${newtime}
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
    let time= new Date();
    let newtime=time.toLocaleTimeString();

    const container=document.getElementById("show");
    const p=document.createElement("p");
    p.innerText=`
    You have completed the task Improve Job searching at ${newtime}
    `
    container.appendChild(p);
})