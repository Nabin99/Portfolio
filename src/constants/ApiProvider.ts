import { BASE_URL } from "./BaseUrl"
const ApiRoutes:any = {
    getWorks: "works/list/",
    postContact: "contact/"
}

const ApiProvider = (()=>{
    for(let x in ApiRoutes){
        ApiRoutes[x]=BASE_URL+ApiRoutes[x];
    }
    return{
        ...ApiRoutes,
    }
})();

export default ApiProvider;