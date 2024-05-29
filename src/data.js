export const API_KEY = 'AIzaSyDfC92J_pIQ4PuWPb5eW0rRe62HrQWYogU';

export const value_converter= (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"M";
    }
    else{
        return value;
    }
}