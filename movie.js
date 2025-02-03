// console.log("++++++++++++++++++++++ Using Class ++++++++++++++++++++++++++++")

// class videotype{
//     constructor(title,category,cast,price){
//         this.title = title
//         this.category = category
//         this.cast = cast
//         this.price = price 
//         this.numRents =0
//         this.vidRevenue = 0.0 

//     }
//     static totRevenue = 0 //prototype

//     displayinfo(){
//         console.log("Movie Name: "+this.title+"\n"+"Movie Category: "+this.category+" \n"+"Movie Cast: "+this.cast+"\n"+"Movie Price: "+this.price)
//     }

//      procRental(){
//         this.numRents = this.numRents+1;
//         this.vidRevenue = this.vidRevenue+this.price
//         videotype.totRevenue = videotype.totRevenue + this.price
//         // console.log(this.numRents)
//     }


// }

// const jungle = new videotype("The Jungle Book","entertainment",["mongli","lion"],300)
// const pushpa = new videotype("Pushpa","Action",["Allu Arjun","Rashmika Mandani"],500)
// const pheri = new videotype("Phir Hera Pheri","Comedi",["Akshay Kumar","Bipasha Bashu","Paresh Raval",""],250)

// jungle.displayinfo()
// pushpa.displayinfo()
// pheri.displayinfo()

// jungle.procRental()
// jungle.procRental()
// jungle.procRental()
// pushpa.procRental()
// pushpa.procRental()
// pheri.procRental()


// console.log("......Movie sell Information......")
// console.log(`The Jungle Book Movie \n number of rents: ${jungle.numRents} \n Total video revenue :${jungle.vidRevenue} `)
// console.log(`Pushpa Movie \n number of rents: ${pushpa.numRents} \n Total video revenue :${pushpa.vidRevenue} `)
// console.log(`Phir Hera Pheri Movie \n number of rents: ${pheri.numRents} \n Total video revenue :${pheri.vidRevenue} `)
// console.log(`Total Revenue: ${videotype.totRevenue}`)


// function StartMeUp() {
//     let videos = [];
// }

//.........................................Using Function..............................................................
function StartMeUp() {
    // e.preventDefault()

    let videos = [];

    videos[0] = new VideoType("The Jungle Book", "Entertainment", ["Neel Sethi", "Bill Murray ", " Ben Kingsley ", " Idris Elba ", " Lupita Nyong'o ", " Scarlett Johansson ", " Giancarlo Esposito "], 300)
    videos[1] = new VideoType("Pushpa", "Drama/Action", ["Allu Arjun", "Rashmika Mandani"], 500)
    videos[2] = new VideoType("Phir Hera Pheri", "Comedy", ["Akshay Kumar", "Bipasha Bashu", "Paresh Raval", "Sunil Shetty"], 250)
    videos[3] = new VideoType("Super30", "Eduction/Social", ["Hrithik Roshan", "Mrunal Thakur", "Pankaj Tripathi", "Aditya Shrivastv"], 200)


    for (let m = 0; m < 5; m++) {
        for (let n = 0; n < videos.length; n++) {
            videos[n].procRental()
        }
    }
    // videos[0].procRental()
    // videos[0].procRental()
    // videos[0].procRental()
    // videos[0].procRental()
    // videos[1].procRental()
    // videos[1].procRental()
    // videos[2].procRental()

    // for (let a = 0; a < videos.length; a++) {
    //     videos[a].displayinfo()
    // }
    // videos[1].displayinfo()
    // videos[2].displayinfo()

    console.log("......Movie sell Information......")

    let table1 = ``
    for (let k = 0; k < videos.length; k++) {
        // console.log(`Movie Name ${videos[k].title}\n number of rents: ${videos[k].numRents} \n Total video revenue :${videos[k].vidRevenue} `)
        table1 += `
        <tr>
                <td>Movie Name:</td>
                <td>${videos[k].title}</td>
            </tr>
            <tr>
                <td>Movie category:</td>
                <td>${videos[k].category}</td>
            </tr>
            <tr>
                <td>Movie Cast:</td>
                <td>${videos[k].castInfo}</td>
            </tr>
            <tr>
                <td>Movie Price:</td>
                <td>${videos[k].price}</td>
            </tr>
            <tr>
                <td>Movie Rents:</td>
                <td>${videos[k].numRents}</td>
            </tr>
            <tr>
                <td>Specific Movie Revenue: </td>
                <td>${videos[k].vidRevenue}</td>
            </tr>
            <tr>
            <td>_____________________________________________________________</td>
            <td>_____________________________________________________________</td>
            </tr>
            `;
    }
    document.getElementById("table1").innerHTML = table1

    document.getElementById("revenue").innerHTML = `Total Cinema Revenue is: `+VideoType.totRevenue

    //console.log(`Pushpa Movie \n number of rents: ${videos[1].numRents} \n Total video revenue :${videos[1].vidRevenue} `)
    //console.log(`Phir Hera Pheri Movie \n number of rents: ${videos[2].numRents} \n Total video revenue :${videos[2].vidRevenue} `)
    // console.log(`Total Revenue: ${VideoType.totRevenue}`)
    // document.getElementById("tot_revenue").innerHTML = VideoType.totRevenue

}

function VideoType(title, category, cast, price) {
    this.title = title
    this.category = category
    this.cast = cast
    this.price = price
    this.numRents = 0
    this.vidRevenue = 0.0
}

VideoType.totRevenue = 0;

VideoType.prototype.procRental = function () {
    this.numRents++;
    this.vidRevenue = this.vidRevenue + this.price
    // this.totRevenue = 0;
    VideoType.totRevenue = VideoType.totRevenue + this.price

    let l = this.cast
    // let join =  l.join(",")
    // console.log(join)
    // console.log(l)
    let length = l.length
    let castInfo = []
    if (length > 1) {
        for (let i = 0; i < length; i++) {
            castInfo.push(this.cast[i] + (`<br>`)) //use `<br>` for html page
        }
        this.castInfo = castInfo
    }

//     let table = ``
//     VideoType.prototype.displayinfo = function () {
//         // document.getElementById("name").innerHTML=this.title
//         // document.getElementById("category").innerHTML=this.category
//         // document.getElementById("cast").innerHTML=this.castInfo
//         // document.getElementById("price").innerHTML=this.price

//         // console.log(this.castInfo)
//         // document.write(`Movie Name:${this.title} \n Category: ${this.category} \n Cast: ${this.cast} \n Price: ${this.price}`)
//         table += `
//                 <tr>
//                 <td>Movie Name:</td>
//                 <td>${this.title}</td>
//             </tr>
//             <tr>
//                 <td>Movie category:</td>
//                 <td>${this.category}</td>
//             </tr>
//             <tr>
//                 <td>Movie Cast:</td>
//                 <td>${this.castInfo}</td>
//             </tr>
//             <tr>
//                 <td>Movie Price:</td>
//                 <td>${this.price}</td>
//             </tr>
//             <tr>
//             <td>_____________________________________________________________</td>
//             <td>_____________________________________________________________</td>
//             </tr>
//             `;

//             document.getElementById("table").innerHTML = table
//     }
}
// Window.onload = StartMeUp();



