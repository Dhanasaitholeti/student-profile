const DisplaySkills = ({studata,id}) => {
    return ( 
        <div className="Main-sec">
        {/*            <div className="logo-img" >
                       <img src={ studata[id].Gender==="F"?womenlogo:menlogo } alt="" /> 
                   </div> */}
            <div className="student-details">

            <section className="stu-name">
            <legend>ROLLNO:</legend>
            <p>{studata[id].ROLLNO}</p>
            </section>
            
            <section className="stu-programming-lan">
            <legend>Programming languages:</legend>
            <p>{studata[id].PROGRAMMING_LANGUAGES}</p>
            </section>

            <section className="stu-Github">
            <legend>Github_Link:</legend> 
            <p>{studata[id].GITHUB_LINK}</p>
            </section>

            <section className="stu-linkedin">
            <legend>SCB_CATEGORY:</legend> 
            <p>{studata[id].LINKEDIN_LINK}</p>
            </section>
                
                     
        </div>

        </div>
     );
}
 
export default DisplaySkills;