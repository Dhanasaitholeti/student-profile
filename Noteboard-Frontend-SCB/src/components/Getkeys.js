const Getkeys = (arr) => {
    let mainarr=[]
    for(let item=0;item<arr.length;item++) {
        mainarr.push(arr[item].ROLLNO)      
    }
    return ( mainarr );
}
 
export default Getkeys;