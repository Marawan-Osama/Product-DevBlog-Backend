import prisma from "../db";

//get all products
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  });
  if (!user) {
    return res.status(401).json({ msg: "User not found" });
  }
  res.json({ data: user.products });
};

//get one product
export const getSingleProduct = async (req, res) => {
  //   const user = await prisma.user.findUnique({
  //     where: { id: req.user.id },
  //     include: { products: true },
  //   });
  //   if (!user) {
  //     return res.status(401).json({ msg: "User not found" });
  //   }
  //   const product = user.products.find((product) => product.id === req.params.id);
  //   if (!product) {
  //     return res.status(404).json({ msg: "Product not found" });
  //   }
  //   res.json({ data: product });

  const id = req.params.id;
  const product = await prisma.product.findFirst({
    where: {
      id: id,
      belongsToId: req.user.id,
    },
  });
  if (!product) {
    return res.status(404).json({ msg: "Product not found" });
  }
  res.json({ data: product });
};

export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: product });
};

export const updateProduct = async (req, res) => {
  const product = await prisma.product.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({ data: product });
};

export const deleteProduct = async (req, res) => {
  const product = await prisma.product.delete({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
  });
  res.json({ data: product });
};
