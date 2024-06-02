# Desarrolladora model
class Desarrolladora
  include Mongoid::Document

  field :desarrolladora, type: String

  has_many :juegos
end

# Editorial model
class Editorial
  include Mongoid::Document

  field :nombre_editorial, type: String
  field :numero_de_titulos, type: Integer

  has_many :juegos
end

# Juego model
class Juego
  include Mongoid::Document

  field :titulo, type: String
  field :genero, type: String
  field :precio, type: Float

  belongs_to :desarrolladora
  belongs_to :editorial
end

# Crear una nueva desarrolladora
desarrolladora = Desarrolladora.create!(desarrolladora: "Team Cherry")

# Crear una nueva editorial
editorial = Editorial.create!(nombre_editorial: "Microsoft", numero_de_titulos: 3)

# Crear un nuevo juego
juego = Juego.create!(titulo: "Hollow Knight", genero: "Metroidvania", precio: 15.0, desarrolladora: desarrolladora, editorial: editorial)
