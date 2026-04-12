export function board_node_creator(board){

let node  = document.createElement('div')

    for(let i = 0; i < 10;i++){
        let row = document.createElement('div')
        for (let j = 0; j < 10;j++){
            let value = document.createElement('button')
            if(typeof board[i][j] === 'object'){
            value.textContent = 'ship'
            }

            else{value.textContent = board[i][j]}
            value.dataset.id = `${[i, j]}`
            value.dataset.val = board[i][j]

            value.addEventListener('click', ()=>{
                value.style.backgroundColor = 'red'
            })
            row.appendChild(value)
        }
        node.appendChild(row)
    }
    return node
}