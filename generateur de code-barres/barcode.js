const generate_btn = document.querySelector('.generate');
const input = document.querySelector('.input');
const bar = document.querySelector('.bar')
const fill = document.querySelector('.fill');
const download = document.querySelector('.Download');

generate_btn.addEventListener('click', function(){
    if(input.value.length >0){
       if(input.value.length < 20){
            bar.innerHTML = '<svg id="barcode"></svg>';
            JsBarcode("#barcode", input.value);
            download.style.display = "block";
            fill.style.display = "none"; 
            bar.style.display = "block";
       }else{
            bar.style.display = "none";
            download.style.display = "none";
            fill.style.display = "block"
            fill.innerText = "The text is too long!"
       }
    }else{
        bar.style.display = "none";
        download.style.display = "none";
        fill.style.display = "block"
        fill.innerText = "Fill in the field!";
    }
});

function generatePdf(){

var opt = {
  margin:       1,
  filename:     `${input.value}.pdf`,
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'a6', orientation: 'landscape' }
};

html2pdf().set(opt).from(bar).save();

}
