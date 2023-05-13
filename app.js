function submit(){
    const get_Date = document.getElementById("get").value
    const get1_Date = document.getElementById("get1").value
    const get2_Date = +document.getElementById("get2").value;
    // console.log(get2_Date);
    const get3_Date = +document.getElementById("get3").value;
    const get4_Date = +document.getElementById("get4").value;
    const get5_Date = +document.getElementById("get5").value;
    const get6_Date = +document.getElementById("get6").value;
    var name = document.getElementById("name").innerHTML=get_Date
    const roll = document.getElementById("roll").innerHTML=get1_Date
    const grade = document.getElementById("grade")
    var total=get2_Date+get3_Date+get4_Date+get5_Date+get6_Date;
    var cal = +Math.round( total/500*100 +"%");
    
    const tot = document.getElementById("tot").innerHTML= "500" +"/"+total 
    var per = document.getElementById("Percentage").innerHTML=cal;
    if(per>=80 || per<=100){
        grade.innerHTML="A+"
    }
    else if(per>70 ||per<80){
        grade.innerHTML="A"
    }
    else if(per>60 ||per<70){
        grade.innerHTML="B"
    }
    else if(per>50 ||per<60){
        grade.innerHTML="C"
    }
    else{
            grade.innerHTML="Fail"
        
    }
    // const grade = +document.getElementById("grade")

//   document.write(cal)
//    console.log(cal);
   
    // swal({
//         swal({
//             title: "Congrulation " +get_Date,
//                 text: "You Are Pass",
//                 icon: "success",
//         })
// .then((get_Date) => {
//   swal(`Your Name is ${get_Date}`);
// });
    
    //     title: "Congrulation " +get_Date,
    //     text: "You Are Pass",
    //     icon: "success",
        
       
    //   });
    //   swal("hello")
    // console.log(get_Date);
    // console.log(get1_Date);
    // console.log(get2_Date);
    // console.log(get3_Date);
    // console.log(get4_Date);
    // console.log(get5_Date);
    // console.log(get6_Date);

}