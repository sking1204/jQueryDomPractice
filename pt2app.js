// $('#movie-form').on('submit',function(e){
    // e.preventDefault();     
    // let title = $("#title").val();
    // let review = $("#review").val(); 
    // let movielist =$('div ul').append(`<li>Title: ${title} <br> Rating: ${review}</li>`);
    // const id = `${title}-${review}`
    // movielist.append(`<button id=${id} class='delete-button'>Delete</button>`)
    // movielist.append(deleteButton);
// })


$('#submit-button').on('click',function(e){
    e.preventDefault();     
    let title = $("#title").val();
    let review = $("#review").val(); 
    let movielist =$('div ul').append(`<li>Title: ${title} <br> Rating: ${review}</li>`);
    const id = `${title}-${review}`
    movielist.append(`<button id=${id} class='delete-button'>Delete</button>`)
})

$('.delete-button').on('click',function(e){
    console.log('delete-button clicked');
    $('movielist').remove(e.target.parent);
    console.log(e);
})



// const deleteButton =document.createElement("button");
// deleteButton.innerText ="Delete"
// deleteButton.addEventListener("click", function(){
//     deleteButton.parentElement.remove();
// })