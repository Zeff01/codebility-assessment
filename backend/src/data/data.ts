export interface TodosType {
  id?: number | undefined;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export let todos: TodosType[] = [
  {
    id: 1,
    title: "Ominiscient Readers Viewpoint",
    completed: true,
    createdAt: new Date(),
  },

  {
    id: 2,
    title: "Solo Leveling",
    completed: false,
    createdAt: new Date(),
  },

  {
    id: 3,
    title: "Top Tier Providence",
    completed: false,
    createdAt: new Date(),
  },

  {
    id: 4,
    title: "The End of the Beginning",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Greatest Estate Developer",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: 6,
    title: "On your Eternity",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: 7,
    title: "The Horizon",
    completed: true,
    createdAt: new Date(),
  },
  {
    id: 7,
    title: "The Legend of the Northern Blade",
    completed: false,
    createdAt: new Date(),
  },
];
