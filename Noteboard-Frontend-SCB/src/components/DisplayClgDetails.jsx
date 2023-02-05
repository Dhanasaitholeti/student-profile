const DisplayClgDetails = ({studata,id}) => {
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
            
            <section className="stu-Campus">
            <legend>Campus:</legend>
            <p>{studata[id].CAMPUS}</p>
            </section>

            <section className="stu-Brach">
            <legend>Branch:</legend> 
            <p>{studata[id].BRANCH}</p>
            </section>

            <section className="stu-category">
            <legend>SCB_CATEGORY:</legend> 
            <p>{studata[id].SCB_CATEGORY}</p>
            </section>
                
            <section className="stu-Team">
            <legend>SCB_TEAM:</legend>
            <p>{studata[id].SCB_TEAM}</p>
            </section>

            <section className="stu-Email">
            <legend>INTERNSHIPS:</legend>
            <p>{studata[id].INTERNSHIPS}</p>
            </section> 
            
        </div>

        </div>
     );
}
 
export default DisplayClgDetails;