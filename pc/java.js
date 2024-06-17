const data = [
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4',features: ['Drag Headshot','One Time Apply','Unable To By(By Checking)','Fully AI Control','100% No Ban Issue(Even Patch)','Android & IOS']},
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['High-speed Processor', 'Long Battery Life', 'Sleek Design', 'High-Resolution Display', 'Water Resistant', 'Wireless Charging'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Advanced Camera System', 'Fast Charging', 'AI Integration', 'Multi-Touch Screen', 'Biometric Security', 'Expandable Storage'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4',features: ['Noise Cancellation', 'Bluetooth Connectivity', 'Ergonomic Fit', 'Sweat Resistant', 'Customizable Sound', 'Voice Assistant'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg',Video:'video/mod_view.mp4', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg',Video:'video/mod_view.mp4', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] }
    
    ]

 
function addProduct(src,featureTexts,Video) {
    
    const details=`
Hi,
I Need a Product From You👇
*Product Details:*
ο ${featureTexts.join('\nο ')}

*Link* : ${window.location.hostname+'/product/'+src}
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