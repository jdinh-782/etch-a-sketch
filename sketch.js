function createGrid()
{
    let container = document.getElementById("container");
    container.style.background = "black";
    container.style.display = "inline-block";
    container.style.border = "5px solid black";

    let grid = document.createElement("div");

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(16, 30px)";
    grid.style.gridTemplateRows = "repeat(16, 30px)";
    grid.style.gridGap = "5px";

    container.appendChild(grid);

    for (let i = 0; i < 16; i++)
    {
        let row = document.createElement("tr");
        row.id = "row" + i;

        row.style.justifyContent = "center";
        row.style.alignItems = "center";
        row.style.display = "flex";
        row.style.fontFamily = "Arial";
        row.style.fontSize = "3rem";
        row.style.fontWeight = "bold";
        row.style.background = "white";

        //row.setAttribute("rel", "stylesheet");
        //row.setAttribute("href", "boxStyles.css");
        //row.setAttribute("type", "text/css");

        //document.getElementsByTagName("head")[0].append(row);

        //row.classList.add("cell");

        grid.appendChild(row);

        for (let j = 0; j < 16; j++)
        {
            let col = document.createElement("td"); 
            col.id = "col" + j;

            col.style.justifyContent = "center";
            col.style.alignItems = "center";
            col.style.display = "flex";
            col.style.fontFamily = "Arial";
            col.style.fontSize = "3rem";
            col.style.fontWeight = "bold";
            col.style.background = "white";

            //col.setAttribute("rel", "stylesheet");
            //col.setAttribute("href", "boxStyles.css");
            //col.setAttribute("type", "text/css");

            //document.getElementsByTagName("head")[0].append(col);
            grid.appendChild(col);
        }
    }

    let sketchButton = document.getElementById("sketchButton");
    sketchButton.style.display = "none";
}

