const commentData = document.getElementById("comment_data");
const addBtn = document.querySelector(".addBtn");
const allComments = document.querySelector(".all_comments");

addBtn.addEventListener("click", () => {
    const commentFirstDiv = document.createElement("div");
    commentFirstDiv.classList.add("comment_list");
    const commentSecondDiv = document.createElement("div");
    commentSecondDiv.classList.add("like_reply");
    const commentSecondDivFirstDiv = document.createElement("button");
    commentSecondDivFirstDiv.textContent = "like";
    const commentSecondDivSecondDiv = document.createElement("button");
    commentSecondDivSecondDiv.textContent = "reply";
    commentSecondDiv.appendChild(commentSecondDivFirstDiv);
    commentSecondDiv.appendChild(commentSecondDivSecondDiv);
    const commentThirdDiv = document.createElement("div");
    commentThirdDiv.classList.add("reply");
    const commentFourthDiv = document.createElement("div");
    commentFourthDiv.classList.add("like_reply");
    const commentFirstDivNestedFirstDiv = document.createElement("div");
    commentFirstDivNestedFirstDiv.classList.add("user_image")
    const userImg = document.createElement("img");
    const userImgSrc = document.createAttribute("src");
    userImgSrc.value = "/Avatar.png";
    const userImgWidth = document.createAttribute("width");
    userImgWidth.value = "40";
    userImg.setAttributeNode(userImgSrc);
    userImg.setAttributeNode(userImgWidth);
    const commentFirstDivNestedSecondDiv = document.createElement("div");
    const data = commentData.value;
    commentFirstDivNestedFirstDiv.appendChild(userImg);
    commentFirstDivNestedSecondDiv.textContent = data;
    commentFirstDivNestedSecondDiv.appendChild(commentSecondDiv);
    commentFirstDiv.appendChild(commentFirstDivNestedFirstDiv);
    commentFirstDiv.appendChild(commentFirstDivNestedSecondDiv);
    allComments.appendChild(commentFirstDiv);

})



{/* <div class="all_comments">
            <div class="comment_list">
                <div class="user_image">
                    <img src="Avatar.png" alt="" width="40">
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veritatis ab minus voluptatum exp
                    onsectetur adipisicing elit. Accusantium nostrum voluptas dicta rerum ad consequatur ipsum impedit
                    nemo, illum porro et quibusdam omnis!
                    nis!
                </div>
            </div>
            <div class="like_reply">
                <div>like</div>
                <div>reply</div>
            </div>
            <div class="reply">
                <div class="user_image">
                    <img src="Avatar.png" alt="" width="40">
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veritatis ab minus voluptatum exp
                    onsectetur adipisicing elit. Accusantium nostrum voluptas dicta rerum ad consequatur ipsum impedit
                    nemo, illum porro et quibusdam omnis!
                    nis!
                </div>
            </div>
            <div class="like_reply">
                <div>like</div>
                <div>reply</div>
            </div>
        </div> */}