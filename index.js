    window.onload = async function () {
    let OrijinalData = await fetch("data.json");
    let TransferedData = await OrijinalData.json();

    //Bootstrap Verileri
    let card = document.querySelector("#rowDiv");

    let mainMenu = document.querySelector("#mainMenu")


     TransferedData.forEach((item, index) => {

        // TAG OLUŞTUR
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let buyBtn = document.createElement("button");

        // İÇERİKLER
        img.src = item.src;
        p.innerHTML = item.description;
        h1.innerHTML = item.price;
        buyBtn.innerHTML = "Satın Al"
        buyBtn.setAttribute("id",item.id)
        // APPENDCHİLD EKLE
        let div = document.createElement("div");
        div.setAttribute("class", "mouse-items");
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(buyBtn)

        // MAİNCONTAİNER'A GÖNDER
        card.appendChild(div)

        buyBtn.addEventListener("click", () => {
         
            // TAG OLUŞTUR
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let deleteBtn = document.createElement("button");

        // İÇERİKLER
        img.src = item.src;
        p.innerHTML = item.description;
        h1.innerHTML = item.price;
        deleteBtn.innerHTML = "Ürünü Sil"
    
        // APPENDCHİLD EKLE
        let div = document.createElement("div");
        div.setAttribute("class", "mouse-items");
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(deleteBtn);

        // MAİNCONTAİNER'A GÖNDER
        basket.appendChild(div)
         
        deleteBtn.addEventListener("click",()=>{
            div.remove()
        })
        });
    });

    //Menü Kısmı
    mainMenu.addEventListener("click", () => {
        card.innerHTML = ""
        TransferedData.forEach((item, index) => {

            // TAG OLUŞTUR
            let img = document.createElement("img");
            let h1 = document.createElement("h1");
            let p = document.createElement("p");
            let buyBtn = document.createElement("button");

            // İÇERİKLER
            img.src = item.src;
            p.innerHTML = item.description;
            h1.innerHTML = item.price;
            buyBtn.innerHTML = "Satın Al"

            // APPENDCHİLD EKLE
            let div = document.createElement("div");
            div.setAttribute("class", "mouse-items");
            div.appendChild(img);
            div.appendChild(h1);
            div.appendChild(p);
            div.appendChild(buyBtn)

            // MAİNCONTAİNER'A GÖNDER
            card.appendChild(div)

        })
    });
    //Mouse-Filter
    let mouse = document.querySelector("#mouse");
    mouse.addEventListener("click", () => {
        card.innerHTML = ""
        TransferedData.filter((item, index) => {
            if (item.category === "gamer-mouse") {
                // TAG OLUŞTUR
                let img = document.createElement("img");
                let h1 = document.createElement("h1");
                let p = document.createElement("p");
                let buyBtn = document.createElement("button");

                // İÇERİKLER
                img.src = item.src;
                p.innerHTML = item.description;
                h1.innerHTML = item.price;
                buyBtn.innerHTML = "Satın Al"

                // APPENDCHİLD EKLE
                let div = document.createElement("div");
                div.setAttribute("class", "mouse-items");
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(p);
                div.appendChild(buyBtn)

                // MAİNCONTAİNER'A GÖNDER
                card.appendChild(div)
            }
        });
    });

    //Keyboard-Filter
    let keyboard = document.querySelector("#keyboard");
    keyboard.addEventListener("click", () => {
        card.innerHTML = ""
        TransferedData.filter((item, index) => {
            if (item.category === "gamer-keyboard") {
                // TAG OLUŞTUR
                let img = document.createElement("img");
                let h1 = document.createElement("h1");
                let p = document.createElement("p");
                let buyBtn = document.createElement("button");

                // İÇERİKLER
                img.src = item.src;
                p.innerHTML = item.description;
                h1.innerHTML = item.price;
                buyBtn.innerHTML = "Satın Al"

                // APPENDCHİLD EKLE
                let div = document.createElement("div");
                div.setAttribute("class", "mouse-items");
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(p);
                div.appendChild(buyBtn)

                // MAİNCONTAİNER'A GÖNDER
                card.appendChild(div)
            }
        });
    });

    //Keyboard-Filter
    let headSet = document.querySelector("#headSet");
    headSet.addEventListener("click", () => {
        card.innerHTML = ""
        TransferedData.filter((item, index) => {
            if (item.category === "gamer-headSet") {
                // TAG OLUŞTUR
                let img = document.createElement("img");
                let h1 = document.createElement("h1");
                let p = document.createElement("p");
                let buyBtn = document.createElement("button");

                // İÇERİKLER
                img.src = item.src;
                p.innerHTML = item.description;
                h1.innerHTML = item.price;
                buyBtn.innerHTML = "Satın Al"

                // APPENDCHİLD EKLE
                let div = document.createElement("div");
                div.setAttribute("class", "mouse-items");
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(p);
                div.appendChild(buyBtn)

                // MAİNCONTAİNER'A GÖNDER
                card.appendChild(div)
            }
        });
    });

    //Keyboard-Filter
    let pc = document.querySelector("#pc");
    pc.addEventListener("click", () => {
        card.innerHTML = ""
        TransferedData.filter((item, index) => {
            if (item.category === "gamer-pc") {
                // TAG OLUŞTUR
                let img = document.createElement("img");
                let h1 = document.createElement("h1");
                let p = document.createElement("p");
                let buyBtn = document.createElement("button");

                // İÇERİKLER
                img.src = item.src;
                p.innerHTML = item.description;
                h1.innerHTML = item.price;
                buyBtn.innerHTML = "Satın Al"

                // APPENDCHİLD EKLE
                let div = document.createElement("div");
                div.setAttribute("class", "mouse-items");
                div.appendChild(img);
                div.appendChild(h1);
                div.appendChild(p);
                div.appendChild(buyBtn)

                // MAİNCONTAİNER'A GÖNDER
                card.appendChild(div)
            }
        });
    });

    let sepetBtn = document.querySelector("#sepetBtn");
    let basket = document.querySelector(".basket");
    sepetBtn.addEventListener("click", () => {
        if (basket.style.display === "block") {
            basket.style.display = "none"
        } else {
            basket.style.display = "block"
        }
    })

}