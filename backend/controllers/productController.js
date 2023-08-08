const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductsModel");

const getProducts = async (req, res, next) => {
  try {
    //Rusiavimas pagal kaina ir reitinga, etc.
    let query = {};
    let queryCondition = false;

    let priceCondition = {};
    if (req.query.price) {
      queryCondition = true;
      priceCondition = { price: { $lte: Number(req.query.price) } };
    }

    let ratingCondition = {};
    if (req.query.rating) {
      queryCondition = true;
      ratingCondition = { rating: { $in: req.query.rating.split(",") } };
    }

    let categoryCondition = {};
    const categoryName = req.params.categoryName || "";
    if (categoryName) {
      queryCondition = true;
      let a = categoryName.replaceAll(",", "/");
      let regEx = new RegExp("^" + a);
      categoryCondition = { category: regEx };
    }
    if (req.query.category) {
      queryCondition = true;
      let a = req.query.category.split(",").map((item) => {
        if (item) return new RegExp("^" + item);
      });
      categoryCondition = {
        category: { $in: a },
      };
    }

    let attributesCondition = []
    if(req.query.attributes) {
      
    }

    if (queryCondition) {
      query = {
        $and: [priceCondition, ratingCondition, categoryCondition],
      };
    }

    //Pagination
    const pageNumber = Number(req.query.pageNumber) || 1;

    //Rikiavimas pagal kaina/pavadinima/etc pagal zemejanti arba didejanti order'i
    let sort = {};
    const sortOption = req.query.sort || "";
    if (sortOption) {
      let sortOpt = sortOption.split("_");
      sort = { [sortOpt[0]]: Number(sortOpt[1]) };
      console.log(sort);
    }

    const totalProducts = await Product.countDocuments(query);
    const products = await Product.find(query)
      .skip(recordsPerPage * (pageNumber - 1))
      .sort(sort)
      .limit(recordsPerPage);

    res.json({
      products,
      pageNumber,
      pagintaionLinksNumber: Math.ceil(totalProducts / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getProducts;
