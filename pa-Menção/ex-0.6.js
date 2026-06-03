let listaDeLivros = [   
    {titulo: 'Orgulho e Preconceito',	
    autor: 'Jane Austen',
    ano: 1813},

    {titulo:'Jane Eyre',
    autor:'Charlotte Brontë',	
    ano:1847},

    {titulo:'O Morro dos Ventos Uivantes',
    autor:'Emily Brontë',	
    ano:1847},

    {titulo:'Como Eu Era Antes de Você',
    autor:'Jojo Moyes',	
    ano:2012},

    {titulo:'A Seleção',
    autor:'Kiera Cass',	
    ano:2012},

    {titulo:'Vermelho Branco e Sangue Azul',
    autor:'Casey McQuiston',	
    ano:2019},

    {titulo:'É Assim que Acaba',
    autor:'Colleen Hoover',	
    ano:2016},
]
	
function livrosDe2010 (biblioteca = []) {
    let livrosFiltrados = []
    for (let i = 0; i < biblioteca.length; i++) {
        if (biblioteca[i].ano > 2010) {
            livrosFiltrados.push(biblioteca[i])
        }
    }   
    return livrosFiltrados
}