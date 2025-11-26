export type Post = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
  };
  
  export const posts: Post[] = [
    {
      id: "1",
      title: "Why Basketball Is the Best Cardio Workout",
      excerpt: "Basketball isn’t just fun — it’s also one of the best ways to improve endurance and burn calories.",
      content: `
        Basketball is a fast-paced sport that works your entire body. Whether you're playing a full game or just shooting around, you're constantly moving, jumping, and changing direction. This makes it an excellent cardio workout, improving your endurance, balance, and coordination. You don’t need to be a professional even 20–30 minutes of casual play can make a huge difference.
  
        If you're looking for a workout that doesn’t feel like a workout, basketball is one of the best options.
      `,
      image: "/images/basketball.png",
      date: "November 22, 2025"
    },
    {
      id: "2",
      title: "Top 5 Anime You Should Watch in 2025",
      excerpt: "From action to slice-of-life, here are five anime series you don’t want to miss this year.",
      content: `
        2025 is shaping up to be a great year for anime fans. New genres are emerging while old classics are returning.
  
        Here are my top recommendations:
        1. Blue Lock Season 2 — Intense, dramatic, and perfect for sports anime lovers.
        2. Solo Leveling — A visually stunning adaptation of the popular manhwa.
        3. Frieren: Beyond Journey’s End — A calm, emotional story that hits hard.
        4. Jujutsu Kaisen — Continues to deliver top-tier animation.
        5. Haikyuu!! Final Movie — The finale of one of the best sports anime ever.
  
        Whether you're new to anime or a long-time fan, these titles should definitely be on your list.
      `,
      image: "/images/anime.avif",
      date: "November 23, 2025"
    },
    {
      id: "3",
      title: "How to Make the Perfect Fried Rice",
      excerpt: "A simple but delicious recipe you can cook at home using common kitchen ingredients.",
      content: `
        Fried rice is one of the easiest and most versatile dishes you can make. The key to perfect fried rice is using day-old rice to prevent it from turning mushy.
  
        Basic ingredients:
        - Rice
        - Garlic
        - Eggs
        - Soy sauce
        - Vegetables (optional)
        - Meat or protein (optional)
  
        Start by heating oil in a pan, cook the garlic, scramble your eggs, add the rice, and season with soy sauce. Mix everything thoroughly and cook on high heat for the best flavor.
  
        Quick, easy, and satisfyingly perfect for busy days.
      `,
      image: "/images/rice.png",
      date: "November 24, 2025"
    },
    {
      id: "4",
      title: "Why Morning Walks Improve Your Mental Health",
      excerpt: "Walking early in the morning boosts mood, reduces stress, and increases energy levels.",
      content: `
        A 20–30 minute morning walk can make a huge difference in how you feel throughout the day. Walking helps release endorphins, which improve your mood and decrease stress levels. You also get natural sunlight exposure, which helps regulate your sleep cycle. It's one of the simplest self-care activities you can start instantly.
  
        If you're trying to build healthier habits in 2025, start with a daily walk.
      `,
      image: "/images/walk.png",
      date: "November 25, 2025"
    },
    {
      id: "5",
      title: "Beginner’s Guide to Strength Training",
      excerpt: "Strength training isn’t just for athletes — anyone can benefit from lifting weights.",
      content: `
        Strength training helps build muscle, improve posture, and boost metabolism. You don’t need fancy gym equipment to start; even bodyweight workouts can be very effective.
  
        Focus on fundamental movements:
        - Squats
        - Push-ups
        - Rows
        - Planks
  
        Start slow, use proper form, and be consistent. Over time, you’ll notice better strength, increased confidence, and improved overall fitness.
      `,
      image: "/images/workout.png",
      date: "November 26, 2025"
    }
  ];
  