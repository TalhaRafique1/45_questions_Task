// it doesnot include tracks number :
// function make_album1(artistName : string, albumTitle : string){
//     return{artistName, albumTitle}
// }
// let album1 = make_album1("Ali zafar", "Psl song")
// let album2 = make_album1("Atif Aslam", "Ipl song")
// let album3 = make_album1("Asim Azhar", "Cpl song")
// console.log(album1);
// console.log(album2);
// console.log(album3);
// it include tracks number :
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = make_album2("Ali zafar", "Psl song", 30);
var album5 = make_album2("Atif Aslam", "Ipl song", 20);
var album6 = make_album2("Asim Azhar", "Cpl song");
console.log(album4);
console.log(album5);
console.log(album6);
