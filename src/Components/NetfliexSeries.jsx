

const SeriesData = [
    {
      id: 1,
      title: "LA CASA DE PAPEL",
      genre: "Thrill, Crime",
      release_year: 2023,
      seasons: 3,
      episodes_per_season: 10,
      rating: 8.7,
      description:
        "In a dystopian future, a group of survivors discovers a portal to a new world, uncovering secrets that could change humanity forever.",
      cast: [
        {
          actor: "Jane Doe, Emily Johnson",
          character: "Mira, Ethan, Lara",
        },
        {
          actor: "John Smith",
          character: "Alex, Jack, Sarah",
        },
        {
          actor: "alexxx Doe",
          character: "Mia, Leo, Kate",
        },
      ],
      trailer_url: "https://www.netflix.com/watch/123456789",
      image_url: "https://static.themoscowtimes.com/image/article_1360/95/nacosKopie.JPG",
    },
    {
      id: 2,
      title: "STRANGER THINGS",
      genre: "Horror, Sci-Fi",
      release_year: 2022,
      seasons: 4,
      episodes_per_season: 8,
      rating: 9.0,
      description:
        "A group of kids uncover a series of supernatural mysteries in their small town.",
      cast: [
        {
          actor: "Winona Ryder",
          character: "Joyce Byers",
        },
        {
          actor: "David Harbour",
          character: "Jim Hopper",
        },
      ],
      trailer_url: "https://www.netflix.com/watch/987654321",
      image_url: "https://static.themoscowtimes.com/image/article_1360/95/nacosKopie.JPG",
    },
    {
      id: 3,
      title: "THE CROWN",
      genre: "Drama, Biography",
      release_year: 2020,
      seasons: 4,
      episodes_per_season: 10,
      rating: 8.6,
      description:
        "The story of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
      cast: [
        {
          actor: "Olivia Colman",
          character: "Queen Elizabeth II",
        },
        {
          actor: "Tobias Menzies",
          character: "Prince Philip",
        },
      ],
      trailer_url: "https://www.netflix.com/watch/1122334455",
      image_url: "https://static.themoscowtimes.com/image/article_1360/95/nacosKopie.JPG",
    },
    {
      id: 4,
      title: "BREAKING BAD",
      genre: "Crime, Drama, Thriller",
      release_year: 2023,
      seasons: 5,
      episodes_per_season: 13,
      rating: 9.5,
      description:
        "A chemistry teacher turned methamphetamine manufacturer partners with a former student.",
      cast: [
        {
          actor: "Bryan Cranston",
          character: "Walter White",
        },
        {
          actor: "Aaron Paul",
          character: "Jesse Pinkman",
        },
      ],
      trailer_url: "https://www.netflix.com/watch/2233445566",
      image_url: "https://static.themoscowtimes.com/image/article_1360/95/nacosKopie.JPG",
    },
  ];
  
  const style = {
    listStyle: "none",
    padding: "10px",
    color: "Darkgreen",
    display: "flex",
    gap: "10px"
  };
  
  const castStyle = {
    display: "grid",
  };

  import PropTypes from "prop-types";
   
  function NetfliexSeries() {
    return (
       <ul style={style}>
        {
        SeriesData.map((series,{title, release_year, image_url}) => {

          const firstCast = series.cast[0];
          const secondCast = series.cast[1];

          return (
              <li key={series.id}>
                <img width={300} src={series.image_url} alt={series.title} />
                <h2>{series.title}</h2>
                <p>Genre: {series.genre}</p>
                <p>Release year: {series.release_year}</p>
                <a
                  href={series.trailer_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Watch Now</button>
                </a>
                <div style={castStyle}>
                  <p>Actor: {firstCast.actor}</p>
                  <p>Character: {firstCast.character}, {secondCast.character}</p>
                </div>
              </li>
          );
        })}
         </ul>
    
    );
  }

  NetfliexSeries.PropTypes = {
    SeriesData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.id.isRequired,
      title: PropTypes.string.isRequired,
      release_year: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired}))
  }
  
  export default NetfliexSeries;