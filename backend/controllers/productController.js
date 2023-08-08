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

    // let attributesCondition = []
    // if(req.query.attributes) {}

    //Search'as per search bar'a
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

    const searchQuery = req.params.searchQuery || "";
    let searchCondition = {};
    if (searchQuery) {
      queryCondition = true;
      searchCondition = { $text: { $search: searchQuery } };
    }

    if (queryCondition) {
      query = {
        $and: [
          priceCondition,
          ratingCondition,
          categoryCondition,
          searchCondition,
        ],
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
      // console.log(sort);
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

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("reviews")
      .orFail();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const adminGetProducts = async (req, res, next) => {
  try {
    const products = await Product.find({})
      .sort({ category: 1 })
      .select("name price category");
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

const adminDeleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).orFail();
    await product.deleteOne();
    res.json({ message: "Product removed succesfully" });
  } catch (error) {
    next(error);
  }
};

const adminCreateProduct = async (req, res, next) => {
  try {
    const product = new Product();
    const { name, description, stockCount, price, category, attributes } =
      req.body;
    product.name = name;
    product.description = description;
    product.stockCount = stockCount;
    product.price = price;
    product.category = category;
    if (attributes.length > 0) {
      attributes.map((item) => {
        product.attributes.push(item);
      });
    }
    await product.save();
    res.json({
      message: "Product created succesfully",
      productId: product._id,
    });
  } catch (error) {
    next(error);
  }
};

const adminUpdateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).orFail();
    const { name, description, stockCount, price, category, attributes } =
      req.body;
    product.name = name || product.name;
    product.description = description || product.description;
    product.stockCount = stockCount || product.stockCount;
    product.price = price || product.price;
    product.category = category || product.category;
    if (attributes.length > 0) {
      product.attrs = [];
      attributes.map((item) => {
        product.attributes.push(item);
      });
    } else {
      product.attrs = [];
    }
    await product.save();
    res.json({
      message: "Product was updated succesfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  adminGetProducts,
  adminDeleteProduct,
  adminCreateProduct,
  adminUpdateProduct,
};
