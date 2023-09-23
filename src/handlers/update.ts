import prisma from "../db";

export const getUpdates = async (req, res) => {
  const product = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
    if (!product) {
        return res.status(401).json({ msg: "product not found" });
    }
    const updates = product.reduce((allUpdates: { id: string; createdAt: Date; updatedAt: Date; title: string; body: string; version: string | null; asset: string | null; productId: string; }[], product) => {
        return [...allUpdates, ...product.updates];
      },[]);
    res.json({ data: updates });
}

export const getSingleUpdate = async (req, res) => {
  const id = req.params.id;
  const update = await prisma.update.findFirst({
    where: {
      id: id,
      productId: req.product.id,
    },
  });
  if (!update) {
    return res.status(404).json({ msg: "update not found" });
  }
  res.json({ data: update });
};

const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId
    },
  });
  if (!product) {
    return res.status(401).json({ msg: "product not found" });
  }
  const update = await prisma.update.create({
    data: req.body,
  });
  res.json({ data: update });
};

export { createUpdate };

export const updateUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where:{
        id: req.user.id,
        },
    include: {
        updates: true,
        },
    })
    if (!product) {
        return res.status(401).json({ msg: "product not found" });
    }
    const update = await prisma.update.update({
        where: {
            id: req.params.id,
        },
        data: req.body,
    });
    res.json({ data: update });
  }

export const deleteUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      updates: true,
    },
  });
    if (!product) {
        return res.status(401).json({ msg: "product not found" });
    }
    const update = await prisma.update.delete({
        where: {
            id: req.params.id,
        },
    });
    res.json({ data: update });
};
