console.log("Pokedex project by Miriam Luna...")
const fetchPokemon=()=>{
    const pokename = document.getElementById("name");
    let pokeinput = pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then(res=>{
        if(res.status != "200"){
            pokeimage(`http://pm1.narvii.com/6448/abef6f8bc30b53eae71a2a7d495ab1b5c9e9c025_hq.jpg`);
        }
        return res.json();
    }).then(data=>{
        let pokeImg = data.sprites.front_default;
        let pokeTipo = data.types[0].type;
        let pokeEstadistica = data.stats;
        let pokeMovimientos = data.moves;
        pokeimage(pokeImg);
        pokeType(pokeTipo);
        pokeStats(pokeEstadistica);
        pokeMoves(pokeMovimientos);
    })
}

fetchPokemon();

const pokeimage = (url)=>{
    const pokeimage = document.getElementById("pokImg");
    pokeimage.src = url;
}

const pokeType = (type) =>{
    document.getElementById("tipo").innerHTML = ' '+type.name;
}

const pokeStats =(stats)=>{
    let estadisticas = "\n";
    stats.forEach((stat)=>{
        estadisticas +=  stat.stat.name +" - "+ stat.base_stat +".\n";
    })
    document.getElementById("estadisticas").innerHTML = ' '+estadisticas;
}

const pokeMoves =(moves)=>{
    let movimientos = "\n";
    moves.forEach((move)=>{
        movimientos +=  move.move.name+".\n";
    })
    document.getElementById("moves").innerHTML = ' '+movimientos;
}