const adminHandler = async (req, res, next) => {
  try {
    const { role } = req.params.tokenPayload;
    if (role !== "admin") {
      throw new Error("No tiene persmisos");
    }
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
