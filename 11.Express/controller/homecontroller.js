// const homeController = (req, res) => {
//   res.render("index");
// };

const homeController = (req, res) => {
  const data = {
    name: "Prity",
    userId: 380,
  };
  res.render("index", data);
};

export { homeController };
