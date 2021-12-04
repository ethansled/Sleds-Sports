window.onload = function(){
    document.getElementById('usComments').innerHTML
}

const usComments = document.getElementById('usComments');
document.getElementById('pComments').addEventListener('click', function (ev) 
{
   addComment(ev);
})

var postButton = document.getElementById('pComments');
var commentText = document.getElementById('commentZone');
var commentButton = document.getElementById('lComment');

commentButton.onclick = function Comment(){
    commentText.style.display = "block";
    postButton.style.display = "block";
    postButton.onclick = function HideCommentBox(){
        commentText.style.display = "none";
        postButton.style.display = "none";
    }
}

function addComment(ev) {
    let commentText;
    let wrapDiv;
    const textBox = document.createElement('div');
    const reply = document.createElement('button');
    reply.className = 'reply';
    reply.innerHTML = 'Reply';
    reply.style.marginLeft = "50%";
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';

    if(createClass(ev.target.parentElement, 'conta')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        commentText = document.getElementById('commentZone').value;
        document.getElementById('commentZone').value = '';
        textBox.innerHTML = commentText;
        wrapDiv.append(textBox, reply, likeButton, deleteButton);
        usComments.appendChild(wrapDiv);
        textBox.style.background = "#2d3436";

    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, reply, likeButton, deleteButton);
        textBox.style.background = "#2d3436";
    }   
}


function createClass(element, className) {
    return element.className.split(' ').indexOf(className) > -1;
}

document.getElementById('usComments').addEventListener('click', function (e) {
    if (createClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Post Reply';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';       
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);     
        textArea.style.backgroundColor = "#2d3436";        
    } else if(createClass(e.target, 'addReply')) {
        addComment(e); 
    } else if(hasClass(e.target, 'likeComment')) {
        const likeBtnValue = e.target.innerHTML;
        e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});

