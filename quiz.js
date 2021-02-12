
let qcm = [
    {
        q : 'chismi?',
        r : 1,
        rs : [{repanse : 'ali' , number : 0},{repanse: 'iskander' , number :1 },{repanse : 'mohammed' , number : 3 }]
    },
    {
        q : 'chesm book ',
        r : 2,
        rs : [{repanse : 'MohammedAli' , number : 0},{repanse: 'khalil' , number :1 },{repanse : 'naji' , number : 3 }]
    },
    {
        q : 'chesm khouk ',
        r : [0,1],
        rs : [{repanse : 'ali' , number : 0},{repanse: 'mohamed' , number :1 },{repanse : 'iskander' , number : 3 }]
    }
];



/*
 q : question
 r : reponse
 */
function quiz() {
    const numQ = Math.floor(Math.random() * 3);
    const  q = qcm[numQ];
    q.rs.map((v,i)=> console.log(i ,'-', v.repanse));
    let r = prompt(q.q);
    //console.log("Repanse " , q.r);
    return q.r == r || ( q.r instanceof Array && q.r.includes(+r)) ? "great" : "ghalet";

}

console.log(quiz());
