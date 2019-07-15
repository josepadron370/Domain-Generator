    //     let x = ["Mydog","Yourgrandma", "Hismother", "Heruncle"]
    //     let y = ["ate","toreup","burned", "threwaway" ]
    //     let z = ["myhomework","mycar","mybuspass","mybicycle"]
    //     let finalWord =[];
    //     for(t = 0; t < x.length; t++ ){
    //         for(r = 0; r < y.length; r++ ){
    //             for( e= 0; e < z.length; e++ ){
    //         finalWord.push(x[t]+y[r]+z[e] + ".com");
    //     }
    //     }
    //     }
    // document.getElementById("domain").innerHTML = finalWord;


            let x = ["Mydog","Yourgrandma", "Hismother", "Heruncle"]
        let y = ["ate","toreup","burned", "threwaway" ]
        let z = ["myhomework","mycar","mybuspass","mybicycle"]
        let finalWord ="";
        for(t = 0; t < x.length; t++ ){
            for(r = 0; r < y.length; r++ ){
                for( e= 0; e < z.length; e++ ){
            finalWord+=(x[t]+y[r]+z[e] + ".com"+"\n");

        }
        }
        }
    document.getElementById("domain").innerHTML = finalWord;