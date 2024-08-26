




async function ipTracker(ip) {
    const response = await fetch('http://ip-api.com/json/' + ip);
    const ipInfo = await response.json();


    
    let region = document.querySelector(".desc-location-info .regiao")
    let city = document.querySelector(".desc-location-info .city")


    let ipAddr = document.querySelector(".desc-ip-info")
    let timezone = document.querySelector(".desc-timezone-info")
    let isp = document.querySelector(".desc-isp-info")

    ipAddr.textContent = ipInfo.query
    region.textContent = ipInfo.region
    city.textContent = ipInfo.city
    isp.textContent = ipInfo.isp    
    

    const timezoneIpInfo = ipInfo.timezone;
    

    const date = new Date('2024-08-20T12:00:00-03:00'); // Data e hora específicas no formato ISO 8601
    const timezoneOffsetMinutes = date.getTimezoneOffset();
    const timezoneOffsetHours = timezoneOffsetMinutes / 60;

    timezone.textContent = " UTC -" + timezoneOffsetHours



    const lon = ipInfo.lon
    const lat = ipInfo.lat
    
    document.querySelector(".img-map").src = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${lon},${lat}&zoom=12.6&marker=lonlat:${lon},${lat};color:%23ff0000;size:small;text:1&scaleFactor=2&apiKey=7001a1f7b235484cbcebb3f42fe53402`
    console.log(ipInfo)
}


document.querySelector("#button-ip").addEventListener("click", ()=>{
let ipInput = document.querySelector("#input-ip").value
    
 ipTracker(ipInput)
})