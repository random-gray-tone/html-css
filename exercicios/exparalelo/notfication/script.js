(async ()=>{
    
    let granted=false;
    if(Notification.permission==='granted'){
        granted=true   
    }
    if(Notification.permission!=='denied'){
        const permission= await Notification.requestPermission();
        granted=permission==='granted'?true:false;
    }
    
})()
function clica(){
    if(granted=true){
       var issoai= new Notification('Notificando o usuário',{
            body:'kkkkk',
            icon:'https://cdn-icons-png.freepik.com/256/1006/1006771.png'
        } );
    }
    issoai.addEventListener('click',()=>{
        location.href='pag02.html';
    })
}
function voltar(){
    location.href='index.html';
}