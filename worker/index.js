const axios = require('axios')
setInterval(() => {
    console.log('Fetching the new ips...!!!!!')
    const hostname = "http://server-cluster-ip-service.default.svc.cluster.local:3000";
    // const hostname = "http:10.0.195.163:32277";
    const url=`${hostname}/getserviceips`
    console.log(url)
    axios.get(url).then((response) => {
        console.log("---",response.data);
    }).catch((err) => {
        console.log('error occured',err.message)
    })
},2000)


