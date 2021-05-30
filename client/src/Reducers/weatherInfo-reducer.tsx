

let initialState = {
    loading : false,
    error: false,
    cities:[
        {
            id: 2459115,
            name:"new-york",
            displayName:"New York"
        },
        {
            id: 2379574,
            name:"chicago",
            displayName:"Chicago"
        },
        {
            id: 2442047,
            name:"los-angeles",
            displayName:"Los Angeles"
        },
        {
            id: 2487956,
            name:"san-francisco",
            displayName:"San Francisco"
        },
        {
            id: 2471217,
            name:"philadelphia",
            displayName: "Philadelphia"
        }
    ]
}


const weatherInfo = (state = initialState,action:any) =>{

    switch(action.type){
        case 'WEATHER_REPORT_SUCCESS':
            return {
                ...state,
                loading : false,
                error: false,
                cityWI:{...action.payload} 
            }
        case 'LOAD_SPINNER':
            return{
                ...state,
                error: false,
                loading : true
            }
        case 'STOP_SPINNER':
            return{
                ...state,
                error: true,
                loading : false
            }
        default:
            return state;
    }
}

export default weatherInfo