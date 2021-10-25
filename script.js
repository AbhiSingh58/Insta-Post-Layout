 const im = document.querySelector(".poimg");
        const heart = document.getElementById("heart")

        im.addEventListener("dblclick", () => {
            console.log("hi")
            heart.classList.replace("far", "fas");
            heart.style.color = "red";
            document.getElementById("pa").innerHTML = "Liked by You and 164 Others";
            im.classList.add('active');

            setInterval(() => {
                im.classList.remove('active');
            }, 2000);

        })

        heart.addEventListener("click", hearthandle);
        function hearthandle() {
            var att = heart.getAttributeNode("class").value
            if (att == 'far fa-heart') {
                heart.classList.replace("far", "fas");
                heart.style.color = "red";
                document.getElementById("pa").innerHTML = "Liked by You and 164 Others";

            }
            else if (att == 'fas fa-heart') {
                heart.classList.replace("fas", "far");
                heart.style.color = "white";
                document.getElementById("pa").innerHTML = "Liked by sn_gujjar and 163 Others";


            }

        }

