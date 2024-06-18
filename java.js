const data = [
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4',features: ['Drag Headshot','One Time Apply','Unable To By(By Checking)','Fully AI Control','100% No Ban Issue(Even Patch)','Android & IOS']},
     {imgsrc: 'image/p2.jpeg',Video:'video/P2.png',features: [' CUSTOM REGEDIT','EMULATORS','FPS LOCK UPTP 160','EMU SETTINGS','MONITOR FIX','LESS RECOIL REGEDIT','2X SECRET','PREMIUM TWEAKS']},
    {imgsrc: 'image/DLL.jpg',Video:'video/mod_view.mp4',features: ['DLL INJECT PANELL','FULLY HIDDEN IN STREAM','NO LOGIN PAGE','100%ANTIBAN','CUSTOMIZE HOTKEY FEATURES','NOBODY CAN FIND PANEL IN PC CHECK','AIMBOT DRAG','SNIPER SCOPE','TRANSPARENT LOCATION']},
    {imgsrc: 'image/p3.png',Video:'video/mod_view.mp4',features: [' ᴀɪᴍʟᴏᴄᴋ ʀᴇɢ ᴇᴅɪᴛ ᴘᴀʀᴀ ꜱᴇɴꜱɪ','• ᴀɴᴛɪʙᴀɴ & ᴀɴᴛɪʙʟᴀᴄᴋʟɪꜱᴛ','• ᴀɪᴍʟᴏᴄᴋ','• ᴀɪᴍʟᴏᴄᴋ','ɴᴏʀᴍᴀʟ ꜱᴄʀᴏᴘᴇ ᴀɪᴍ','• ᴀʟᴏᴋ ꜰɪx']},
    {imgsrc: 'image/p5.png',Video:'video/mod_view.mp4',features: ['REDWIN EMULATORS','Best paid emulator','red win runs smooth on low end pc','red win give dtable FBS 160','NO aim shake','no crash',]},
    {imgsrc: 'image/p4.jpg',Video:'video/mod_view.mp4',features: ['ULTRA EGO FPS','Best paid emulator','red win runs smooth on low end pc','red win give dtable FBS 160','NO aim shake','no crash',]},
     {imgsrc: 'image/p6.jpg',Video:'video/mod_view.mp4',features: ['ULTRA EGO FPS','Best paid emulator','red win runs smooth on low end pc','red win give dtable FBS 160','NO aim shake','no crash',]},
      {imgsrc: 'image/p7.jpg',Video:'video/mod_view.mp4',features: ['ULTRA EGO FPS','Best paid emulator','red win runs smooth on low end pc','red win give dtable FBS 160','NO aim shake','no crash',]},





    ]
    

 
function addProduct(src,featureTexts,Video) {
    
    const details=`
Hi,
I Need a Product From You👇
*Product Details:*
ο ${featureTexts.join('\nο ')}

*Link* : ${window.location.hostname+'/product/'+src};
`   
const url="https://api.whatsapp.com/send?phone=9345916715&text="+encodeURIComponent(details)
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.classList.add('hidden');
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image');
            const img = document.createElement('img');
            img.src = src;
            imageDiv.appendChild(img);
            const featuresList = document.createElement('li');
            featuresList.classList.add('features');
            featuresList.textContent = 'Features:';
            featureTexts.forEach(text => {
                const p = document.createElement('p');
                p.textContent = text;
                featuresList.appendChild(p);
            });
            const button=document.createElement('div')
            button.classList='btn_cont'
            const link=document.createElement('a')
            link.href=url;
            link.textContent='Buy Now'
            link.classList='btn'
            button.appendChild(link)

            const span_con=document.createElement('div')
            span_con.classList='span_con'
            const span=document.createElement('a')

            span.href=Video
            span.textContent='Mod Preview'
            span_con.appendChild(span)


            productDiv.appendChild(imageDiv);
            productDiv.appendChild(featuresList);
            productDiv.appendChild(span_con)
            productDiv.appendChild(button);
            const container = document.querySelector('.pro_container');
            container.appendChild(productDiv);
        }

data.map(items=>addProduct(items.imgsrc,items.features,items.Video))

let observer;
try{
 observer =new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')

        }
    })
})

}
catch(e){
    hidden_ele=document.querySelectorAll('.hidden');

    hidden_ele.forEach((ele)=>{
            ele.classList.add('show')

    })
}

hidden_ele=document.querySelectorAll('.hidden');
hidden_ele.forEach(el=>observer.observe(el))