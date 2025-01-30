const createChapter = (title, chap, img,) => ({ title, chap, img });

const chapters = {
    0: {
      title: "Through the Looking-Glass",
      year: "1871"
    },

    1: createChapter("Looking-Glass House", "I", "https://placehold.co/25"),
    2: createChapter("The Garden of Live Flowers", "II", "https://placehold.co/25"),
    3: createChapter("Looking-Glass Insects", "III", "https://placehold.co/25"),
    4: createChapter("Tweedledum and Tweedledee", "IV", "https://placehold.co/25"),
    5: createChapter("Wool and Water", "V", "https://placehold.co/25"),
    6: createChapter("Humpty Dumpty", "VI", "https://placehold.co/25"),
    7: createChapter("The Lion and the Unicorn", "VII", "https://placehold.co/25"),
    8: createChapter("It's My Own Invention", "VIII", "https://placehold.co/25"),
    9: createChapter("Queen Alice", "IX", "https://placehold.co/25"),
    10: createChapter("Shaking", "X", "https://placehold.co/25"),
    11: createChapter("Waking", "XI", "https://placehold.co/25"),
    12: createChapter("Which Dreamed It?", "XII", "https://placehold.co/25")
}

export default chapters;