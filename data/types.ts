export interface Configuration {
  type: string;
  superArea: string;
  coveredArea?: string;
  carpetArea: string;
  price: string;
}

export interface Amenity {
  name: string;
  icon: string;
}

export interface Property {
  slug: string;
  category: string;
  featured: boolean;

  title: string;
  overview: string;

  developer: string;

  location: string;

  status: string;

  configurations: Configuration[];

  mainImage: string;

  gallery: string[];

  amenities: Amenity[];

  highlights: string[];

  mapLink: string;
}