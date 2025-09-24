function select()
{
    let stud_id = document.getElementById("sID").value ; 
    console.log(stud_id);
    if(localStorage.getItem(stud_id))
    {
        let stud_info =   JSON.parse(localStorage.getItem(stud_id)) ;

        stud_info.department = document.getElementById("dep").value ;
        
        localStorage.setItem(stud_id,JSON.stringify(stud_info)) ;
        alert("student department has been submitted sucssufely") ; 
    }
    else 
    {
        alert("Please Enter an exist ID");
    }



}

