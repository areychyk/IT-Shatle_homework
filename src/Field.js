import { useState } from "react";

const empty = {
    top: 0,
    left: 0
};
//  console.log (empty)

// console.log (cells)

const cells = [];
cells.push(empty);

const cellSize = 100;



function Field(props) {//////////////////

    var left = props.name % 4;
    var top = (props.name - left) / 4;

    cells.push({
        top: top,
        left: left
        

    });


    const [styles, getStyles] = useState({
        left: `${left * cellSize}px`,
        top: `${top * cellSize}px`
    })

    // console.log (styles)

    function move(index) {

        var cell = cells[index];
        console.log (cell)
        // console.log (cell)
        // const leftDiv = Math.abs(empty.left - cell.left);
        // const topDiv = Math.abs(empty.top - cell.top);
        // if (leftDiv + topDiv > 1) {
        //     return
        // }
        getStyles({
            left: `${empty.left * cellSize}px`,
            top: `${empty.top * cellSize}px`
        });
        console.log (empty)
        // console.log (styles)

        // cell.left = styles.left;
        // cell.top = styles.top;
        const emptyLeft = empty.left;
        const emptyTop = empty.top;
        empty.left = cell.left;
        empty.top = cell.top;
        cell.left = emptyLeft;
        cell.top = emptyTop;


        // const emptyLeft = empty.left;
        // const emptyTop = empty.top;
        // empty.left = cell.left;
        // empty.top = cell.top;
        // cell.left = emptyLeft;
        // cell.top = emptyTop;

    }


   
    const handClick = () => {
        move(props.name)


    }

    return (
        <div onClick={handClick} className='cell' style={styles}>
            {props.name}
        </div>
    )
}

export default Field
// {Number(props.name) + 1}



