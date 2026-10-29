const series = [
  {
    id: 1,
    titulo: "Stranger Things",
    sinopse: "Um grupo de amigos investiga acontecimentos sobrenaturais e o desaparecimento de uma criança numa pequena cidade.",
    categoria: "Ficção científica",
    plataforma: "Netflix",
    ano: 2016,
    numeroTemporadas: 5,
    imagem: "https://static.tvmaze.com/uploads/images/original_untouched/595/1489169.jpg"
  },
  {
    id: 2,
    titulo: "Dark",
    sinopse: "O desaparecimento de duas crianças revela segredos familiares e ligações entre diferentes épocas.",
    categoria: "Ficção científica",
    plataforma: "Netflix",
    ano: 2017,
    numeroTemporadas: 3,
    imagem: "https://static.tvmaze.com/uploads/images/original_untouched/504/1262352.jpg"
  },
  {
    id: 3,
    titulo: "Fleabag",
    sinopse: "Uma jovem londrina enfrenta os desafios das relações pessoais, da família e da gestão de um café.",
    categoria: "Comédia",
    plataforma: "Prime Video",
    ano: 2016,
    numeroTemporadas: 2,
    imagem: "https://static.tvmaze.com/uploads/images/original_untouched/192/482341.jpg"
  },
  {
    id: 4,
    titulo: "The Marvelous Mrs. Maisel",
    sinopse: "Na Nova Iorque dos anos 1950, uma dona de casa descobre o seu talento para a comédia de palco.",
    categoria: "Comédia",
    plataforma: "Prime Video",
    ano: 2017,
    numeroTemporadas: 5,
    imagem: "https://static.tvmaze.com/uploads/images/original_untouched/456/1141825.jpg"
  },
  {
    id: 5,
    titulo: "Chernobyl",
    sinopse: "Uma dramatização do desastre nuclear de Chernobyl e dos esforços para limitar as suas consequências.",
    categoria: "Drama",
    plataforma: "HBO Max",
    ano: 2019,
    numeroTemporadas: 1,
    imagem: "https://static.tvmaze.com/uploads/images/original_untouched/193/482599.jpg"
  },
  {
    id: 6,
    titulo: "Succession",
    sinopse: "Os membros de uma família disputam o controlo de um poderoso grupo de comunicação social.",
    categoria: "Drama",
    plataforma: "HBO Max",
    ano: 2018,
    numeroTemporadas: 4,
    imagem: "https://static.tvmaze.com/uploads/images/original_untouched/453/1134275.jpg"
  }
];

export function guardar() {
    localStorage.setItem("series", JSON.stringify(series));
};

export function ler() {
    series = JSON.parse(localStorage.getItem("series"));
};