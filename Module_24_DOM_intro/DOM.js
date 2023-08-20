console.log('Hello from JS');
// console.log(document);
// console.log(document.body);
// console.log(document.head);

const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.margin = '15px';
    section.style.backgroundColor = 'lightgreen';
    section.style.backgroundColor = 'lightgreen';
    section.style.borderRadius = '15px';
    section.style.padding = '20px';
}