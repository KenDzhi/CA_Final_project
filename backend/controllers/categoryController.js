const Category = require("../models/CategoryModel");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: "asc" }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(400).send("Category input is required");
    }
    const categoryExists = await Category.findOne({ name: category });
    if (categoryExists) {
      res.status(400).send("Category already exists");
    } else {
      const categoryCreated = await Category.create({
        name: category,
      });
      res.status(201).send({ categoryCreated: categoryCreated });
    }
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    if (req.params.category !== "Choose a category") {
      const categoryExists = await Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      await categoryExists.deleteOne();
      res.json({ categoryDeleted: true });
    }
  } catch (error) {
    next(error);
  }
};

const saveAttribute = async (req, res, next) => {
  const { key, value, categoryChoosen } = req.body;
  if (!key || !value || !categoryChoosen) {
    return res.status(400).send("All inputs are required");
  }
  try {
    const category = categoryChoosen;
    const categoryExists = await Category.findOne({ name: category }).orFail();
    //Einama per kategoriju array. Jei Attributo pavadinimas neegzistuoja, einama toliau ir i attributu array pushinamas naujas key ir jo value
    //Jei atributas egzistuoja, sukuriamas naujas array su attributo values,
    //ir viskas sukeliama i nauja array uztikrinant kad visi values yra unikalus
    if (categoryExists.attributes.length > 0) {
      let keyDoesNotExist = true;
      categoryExists.attributes.map((item, i) => {
        if (item.key === key) {
          keyDoesNotExist = false;
          let copyAttributesValues = [...categoryExists.attributes[i].value];
          copyAttributesValues.push(value);
          let newAttributeValues = [...new Set(copyAttributesValues)];
          categoryExists.attributes[i].value = newAttributeValues;
        }
      });
      if (keyDoesNotExist) {
        categoryExists.attributes.push({ key: key, value: [value] });
      }
    } else {
      categoryExists.attributes.push({ key: key, value: [value] });
    }
    await categoryExists.save();
    let cat = await Category.find({}).sort({ name: "asc" });
    return res.status(201).json({ categoriesUpdates: cat });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAttribute };
