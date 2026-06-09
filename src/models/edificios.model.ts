export interface edificios {
    id: number;
    construction: string;
    architect: string;
    images: ImageGallery;
    name: string;
    location: Location;
    category: string;
    style: string;
    district: string;
    address: string;
    link: Link;
    description: string;
}

interface Link {
  maps: string;
  website: string;
}

interface Location {
  lat: number;
  lng: number;
}

interface ImageGallery {
  exterior: string;
  interior: string;
}