// export type List = {
//   id: number;
//   user: string;
//   title: string;
//   body: [
//     {
//       category: Category["name"];
//       items: Item[];
//     },
//   ];
// };

export type List = {
  id: number;
  user: string;
  title: string;
  items: ListItem[];
};

export type Category = {
  name: string;
  code: string;
};

export type Item = {
  id: number;
  name: string;
  category: Category["name"];
};

export type ListItem = Item & {
  checked: boolean;
};
