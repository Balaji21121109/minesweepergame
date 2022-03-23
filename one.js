let rows=2
///row size 

let cols=2  
// coloum size

let canvas = document.getElementById('canvas')
//gettin the elemnet from the div tag


let cells=new Map()
let revealeadkeys= new set()

let values = new Map([
    ['0-0', 1],
    ['0-1', 1],
    ['1-0', 1],
    ['1-1', 1],
])

function toKey(row,col){
    return row + '-'+col

}
function createButton(){
    canvas.style.width=rows*"100px"
    canvas.style.height=cols*"100px"
for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
 ///button has been created below
            let cells=document.createElement('button')
            cell.style.width= "35px"//button width
            cell.style.height="34px"//button height
            cell.onclick=()=>{
                revealcell(key)
            }
            canvas.appendChild(cell) /// all the buttons will apper in the div tag that is canvas
           let key = toKey(i,j)
           cells.set(key,cell)


        }

    }

}

function updateButton(){
   
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){

            ///button has been created 
            let key = toKey(i,j)
        let cell  =  cells.get(key)
        if(revealeadkeys.has(key)) {
            cell.disabled = true
            let value =values.get(key)
            cell.textContent=value.toString()

        }else{
            cell.disabled = false
            cell.textContent=''

        }

        }

    }

}
function revealcell(key){
revealeadkeys.add(key)
updateButton()
}

createButton()