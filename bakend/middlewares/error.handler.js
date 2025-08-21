function errorHandler(err, req, res, next) {
  if (err.name === 'SequelizeValidationError') {
    const messages = err.errors.map(e => e.message);
    return res.status(400).json({ error: 'Validación fallida', messages });
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).json({ error: 'Conflicto de datos', message: 'Ya existe un registro con ese campo único' });
  }

  // Otros errores generales
  console.error('❌ Error inesperado:', err);
  return res.status(500).json({ error: 'Error interno del servidor' });
}

module.exports = errorHandler;