const restaurantsData = [
  {
    id: 1,
    name: "Sushi Master",
    description: "Découvrez l'art du sushi avec des ingrédients frais et des techniques traditionnelles. Notre chef japonais prépare chaque plat avec soin pour offrir une expérience culinaire authentique. Profitez de nos makis, sashimis et tempuras dans une ambiance zen et raffinée. Idéal pour les amateurs de cuisine japonaise.",
    origin: "Japon",
    specialties: ["Sushi", "Sashimi", "Tempura"],
    address: "123 Rue des Sushis, Quartier Ginza, Tokyo, Japon",
    hours: [
      "Lundi : 11h - 22h",
      "Mardi : 11h - 22h",
      "Mercredi : 11h - 22h",
      "Jeudi : 11h - 22h",
      "Vendredi : 11h - 23h",
      "Samedi : 11h - 23h",
      "Dimanche : 11h - 22h"
    ],
    mapCoordinates: [35.6895, 139.6917],
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Maki California",
        price: 8.99,
        description: "Crevettes, avocat, concombre, enroulés dans du riz et des algues.",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 2,
        name: "Sashimi Saumon",
        price: 12.99,
        description: "6 pièces de saumon frais tranchées avec précision.",
        image: "https://images.unsplash.com/photo-1582451714641-6d4c2e1d7b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 3,
        name: "Tempura Udon",
        price: 14.99,
        description: "Soupe de nouilles udon avec des crevettes tempura croustillantes.",
        image: "https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      }
    ]
  },
  {
    id: 2,
    name: "Pizza Roma",
    description: "Savourez l'authenticité de la cuisine italienne avec nos pizzas artisanales. Préparées avec des ingrédients frais et une pâte faite maison, nos pizzas sont cuites au four à bois pour un goût inégalé. Découvrez également nos pâtes et desserts italiens dans une ambiance chaleureuse.",
    origin: "Italie",
    specialties: ["Pizza", "Pasta", "Tiramisu"],
    address: "45 Via Roma, Centre historique, Rome, Italie",
    hours: [
      "Lundi : 10h - 21h",
      "Mardi : 10h - 21h",
      "Mercredi : 10h - 21h",
      "Jeudi : 10h - 21h",
      "Vendredi : 10h - 22h",
      "Samedi : 12h - 23h",
      "Dimanche : 12h - 23h"
    ],
    mapCoordinates: [41.9028, 12.4964],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Margherita",
        price: 9.99,
        description: "Sauce tomate, mozzarella, basilic frais.",
        image: "https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 2,
        name: "Quattro Formaggi",
        price: 12.99,
        description: "Mélange de 4 fromages italiens fondants.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 3,
        name: "Diavola",
        price: 11.99,
        description: "Sauce tomate, mozzarella, salami piquant.",
        image: "https://images.unsplash.com/photo-1594007659356-9c9e1d8b3b3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      }
    ]
  },
  {
    id: 6,
    name: "Le Bistrot Français",
    description: "Découvrez la cuisine française traditionnelle avec nos plats raffinés. Préparés avec des ingrédients de qualité, nos plats vous offriront une expérience culinaire authentique.",
    origin: "France",
    specialties: ["Coq au Vin", "Ratatouille", "Crème Brûlée"],
    address: "123 Rue de Paris, Paris, France",
    hours: [
      "Lundi : 12h - 22h",
      "Mardi : 12h - 22h",
      "Mercredi : 12h - 22h",
      "Jeudi : 12h - 22h",
      "Vendredi : 12h - 23h",
      "Samedi : 12h - 23h",
      "Dimanche : 12h - 21h"
    ],
    mapCoordinates: [48.8566, 2.3522],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Coq au Vin",
        price: 15.99,
        description: "Poulet mijoté dans une sauce au vin rouge avec des légumes.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 2,
        name: "Ratatouille",
        price: 12.99,
        description: "Mélange de légumes mijotés dans une sauce tomate.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 3,
        name: "Crème Brûlée",
        price: 6.99,
        description: "Dessert à base de crème vanillée avec une croûte de sucre caramélisé.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: 3,
    name: "Burger House",
    description: "Plongez dans l'univers des burgers gourmets avec des ingrédients de qualité. Nos burgers sont préparés avec des steaks hachés frais, des légumes croquants et des sauces maison. Accompagnez-les de nos frites croustillantes pour une expérience complète.",
    origin: "États-Unis",
    specialties: ["Burgers", "Fries", "Milkshakes"],
    address: "789 Burger Street, Manhattan, New York, États-Unis",
    hours: [
      "Lundi : 10h - 23h",
      "Mardi : 10h - 23h",
      "Mercredi : 10h - 23h",
      "Jeudi : 10h - 23h",
      "Vendredi : 10h - 23h",
      "Samedi : 10h - 23h",
      "Dimanche : 10h - 23h"
    ],
    mapCoordinates: [40.7128, -74.0060],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Classic Burger",
        price: 8.99,
        description: "Steak haché, laitue, tomate, oignon, sauce maison.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 2,
        name: "Cheese Burger",
        price: 9.99,
        description: "Steak haché, cheddar fondu, laitue, tomate.",
        image: "https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 3,
        name: "Bacon Burger",
        price: 10.99,
        description: "Steak haché, bacon croustillant, fromage, sauce BBQ.",
        image: "https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      }
    ]
  },
  {
    id: 4,
    name: "Taco Fiesta",
    description: "Découvrez les saveurs vibrantes du Mexique avec nos tacos authentiques. Préparés avec des ingrédients frais et des épices traditionnelles, nos plats vous transporteront directement à Mexico.",
    origin: "Mexique",
    specialties: ["Tacos", "Guacamole", "Quesadillas"],
    address: "456 Calle de los Tacos, Mexico City, Mexique",
    hours: [
      "Lundi : 12h - 22h",
      "Mardi : 12h - 22h",
      "Mercredi : 12h - 22h",
      "Jeudi : 12h - 22h",
      "Vendredi : 12h - 23h",
      "Samedi : 12h - 23h",
      "Dimanche : 12h - 21h"
    ],
    mapCoordinates: [19.4326, -99.1332],
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Tacos al Pastor",
        price: 7.99,
        description: "Tacos garnis de porc mariné, ananas et coriandre.",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 2,
        name: "Quesadilla au Fromage",
        price: 5.99,
        description: "Tortilla grillée avec fromage fondu.",
        image: "https://images.unsplash.com/photo-1594007659356-9c9e1d8b3b3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 3,
        name: "Guacamole Maison",
        price: 4.99,
        description: "Avocats frais écrasés avec citron vert et épices.",
        image: "https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      }
    ]
  },
  {
    id: 7,
    name: "Sushi Zen",
    description: "Profitez de la fraîcheur et de la qualité de nos sushis préparés par des chefs expérimentés. Nos plats sont un mélange parfait de tradition et de modernité.",
    origin: "Japon",
    specialties: ["Sushi", "Sashimi", "Tempura"],
    address: "456 Rue des Sushis, Tokyo, Japon",
    hours: [
      "Lundi : 11h - 22h",
      "Mardi : 11h - 22h",
      "Mercredi : 11h - 22h",
      "Jeudi : 11h - 22h",
      "Vendredi : 11h - 23h",
      "Samedi : 11h - 23h",
      "Dimanche : 11h - 22h"
    ],
    mapCoordinates: [35.6895, 139.6917],
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Maki California",
        price: 8.99,
        description: "Crevettes, avocat, concombre, enroulés dans du riz et des algues.",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 2,
        name: "Sashimi Saumon",
        price: 12.99,
        description: "6 pièces de saumon frais tranchées avec précision.",
        image: "https://images.unsplash.com/photo-1582451714641-6d4c2e1d7b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 3,
        name: "Tempura Udon",
        price: 14.99,
        description: "Soupe de nouilles udon avec des crevettes tempura croustillantes.",
        image: "https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      }
    ]
  },
  {
    id: 8,
    name: "Pasta Bella",
    description: "Découvrez les saveurs de l'Italie avec nos pâtes fraîches et nos sauces maison. Chaque plat est préparé avec des ingrédients de qualité pour une expérience culinaire authentique.",
    origin: "Italie",
    specialties: ["Pasta", "Pizza", "Tiramisu"],
    address: "789 Via Roma, Rome, Italie",
    hours: [
      "Lundi : 10h - 21h",
      "Mardi : 10h - 21h",
      "Mercredi : 10h - 21h",
      "Jeudi : 10h - 21h",
      "Vendredi : 10h - 22h",
      "Samedi : 12h - 23h",
      "Dimanche : 12h - 23h"
    ],
    mapCoordinates: [41.9028, 12.4964],
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        price: 10.99,
        description: "Pâtes avec une sauce crémeuse au bacon et au parmesan.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 2,
        name: "Lasagne",
        price: 12.99,
        description: "Pâtes en couches avec une sauce à la viande et du fromage fondu.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 3,
        name: "Tiramisu",
        price: 6.99,
        description: "Dessert italien à base de café, de mascarpone et de cacao.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: 9,
    name: "Thai Delight",
    description: "Savourez les saveurs exotiques de la Thaïlande avec nos plats épicés et aromatiques. Chaque plat est préparé avec des ingrédients frais et des épices traditionnelles.",
    origin: "Thaïlande",
    specialties: ["Pad Thai", "Curry Vert", "Tom Yum"],
    address: "123 Bangkok Street, Bangkok, Thaïlande",
    hours: [
      "Lundi : 11h - 22h",
      "Mardi : 11h - 22h",
      "Mercredi : 11h - 22h",
      "Jeudi : 11h - 22h",
      "Vendredi : 11h - 23h",
      "Samedi : 11h - 23h",
      "Dimanche : 11h - 22h"
    ],
    mapCoordinates: [13.7563, 100.5018],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Pad Thai",
        price: 9.99,
        description: "Nouilles sautées avec des crevettes, des œufs et des légumes.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 2,
        name: "Curry Vert",
        price: 11.99,
        description: "Curry épicé avec du poulet, des légumes et du lait de coco.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 3,
        name: "Tom Yum",
        price: 8.99,
        description: "Soupe épicée aux crevettes avec des herbes aromatiques.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: 10,
    name: "Greek Taverna",
    description: "Découvrez les saveurs méditerranéennes avec nos plats grecs traditionnels. Préparés avec des ingrédients frais et des recettes authentiques, nos plats vous transporteront en Grèce.",
    origin: "Grèce",
    specialties: ["Gyros", "Moussaka", "Baklava"],
    address: "456 Athens Street, Athènes, Grèce",
    hours: [
      "Lundi : 12h - 22h",
      "Mardi : 12h - 22h",
      "Mercredi : 12h - 22h",
      "Jeudi : 12h - 22h",
      "Vendredi : 12h - 23h",
      "Samedi : 12h - 23h",
      "Dimanche : 12h - 21h"
    ],
    mapCoordinates: [37.9838, 23.7275],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Gyros",
        price: 8.99,
        description: "Viande grillée servie avec du pain pita, des légumes et de la sauce tzatziki.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 2,
        name: "Moussaka",
        price: 12.99,
        description: "Gratin d'aubergines avec de la viande hachée et une sauce béchamel.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 3,
        name: "Baklava",
        price: 5.99,
        description: "Pâtisserie feuilletée avec des noix et du miel.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: 11,
    name: "Kebab King",
    description: "Savourez les saveurs de la cuisine turque avec nos kebabs savoureux. Préparés avec des ingrédients frais et des épices traditionnelles, nos plats vous offriront une expérience culinaire authentique.",
    origin: "Turquie",
    specialties: ["Kebab", "Falafel", "Baklava"],
    address: "789 Istanbul Street, Istanbul, Turquie",
    hours: [
      "Lundi : 11h - 22h",
      "Mardi : 11h - 22h",
      "Mercredi : 11h - 22h",
      "Jeudi : 11h - 22h",
      "Vendredi : 11h - 23h",
      "Samedi : 11h - 23h",
      "Dimanche : 11h - 22h"
    ],
    mapCoordinates: [41.0082, 28.9784],
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Kebab d'Agneau",
        price: 9.99,
        description: "Viande d'agneau grillée servie avec du pain pita et des légumes.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 2,
        name: "Falafel",
        price: 7.99,
        description: "Boulettes de pois chiches frites servies avec une sauce tahini.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 3,
        name: "Baklava",
        price: 5.99,
        description: "Pâtisserie feuilletée avec des noix et du miel.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: 12,
    name: "Sushi Express",
    description: "Profitez de la fraîcheur et de la qualité de nos sushis préparés par des chefs expérimentés. Nos plats sont un mélange parfait de tradition et de modernité.",
    origin: "Japon",
    specialties: ["Sushi", "Sashimi", "Tempura"],
    address: "123 Rue des Sushis, Tokyo, Japon",
    hours: [
      "Lundi : 11h - 22h",
      "Mardi : 11h - 22h",
      "Mercredi : 11h - 22h",
      "Jeudi : 11h - 22h",
      "Vendredi : 11h - 23h",
      "Samedi : 11h - 23h",
      "Dimanche : 11h - 22h"
    ],
    mapCoordinates: [35.6895, 139.6917],
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Maki California",
        price: 8.99,
        description: "Crevettes, avocat, concombre, enroulés dans du riz et des algues.",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 2,
        name: "Sashimi Saumon",
        price: 12.99,
        description: "6 pièces de saumon frais tranchées avec précision.",
        image: "https://images.unsplash.com/photo-1582451714641-6d4c2e1d7b9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      },
      {
        id: 3,
        name: "Tempura Udon",
        price: 14.99,
        description: "Soupe de nouilles udon avec des crevettes tempura croustillantes.",
        image: "https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
      }
    ]
  },
  {
    id: 13,
    name: "Pasta Fresca",
    description: "Découvrez les saveurs de l'Italie avec nos pâtes fraîches et nos sauces maison. Chaque plat est préparé avec des ingrédients de qualité pour une expérience culinaire authentique.",
    origin: "Italie",
    specialties: ["Pasta", "Pizza", "Tiramisu"],
    address: "456 Via Roma, Rome, Italie",
    hours: [
      "Lundi : 10h - 21h",
      "Mardi : 10h - 21h",
      "Mercredi : 10h - 21h",
      "Jeudi : 10h - 21h",
      "Vendredi : 10h - 22h",
      "Samedi : 12h - 23h",
      "Dimanche : 12h - 23h"
    ],
    mapCoordinates: [41.9028, 12.4964],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        price: 10.99,
        description: "Pâtes avec une sauce crémeuse au bacon et au parmesan.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 2,
        name: "Lasagne",
        price: 12.99,
        description: "Pâtes en couches avec une sauce à la viande et du fromage fondu.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 3,
        name: "Tiramisu",
        price: 6.99,
        description: "Dessert italien à base de café, de mascarpone et de cacao.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  },
  {
    id: 14,
    name: "Thai Spice",
    description: "Savourez les saveurs exotiques de la Thaïlande avec nos plats épicés et aromatiques. Chaque plat est préparé avec des ingrédients frais et des épices traditionnelles.",
    origin: "Thaïlande",
    specialties: ["Pad Thai", "Curry Vert", "Tom Yum"],
    address: "789 Bangkok Street, Bangkok, Thaïlande",
    hours: [
      "Lundi : 11h - 22h",
      "Mardi : 11h - 22h",
      "Mercredi : 11h - 22h",
      "Jeudi : 11h - 22h",
      "Vendredi : 11h - 23h",
      "Samedi : 11h - 23h",
      "Dimanche : 11h - 22h"
    ],
    mapCoordinates: [13.7563, 100.5018],
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    menu: [
      {
        id: 1,
        name: "Pad Thai",
        price: 9.99,
        description: "Nouilles sautées avec des crevettes, des œufs et des légumes.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 2,
        name: "Curry Vert",
        price: 11.99,
        description: "Curry épicé avec du poulet, des légumes et du lait de coco.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      },
      {
        id: 3,
        name: "Tom Yum",
        price: 8.99,
        description: "Soupe épicée aux crevettes avec des herbes aromatiques.",
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
      }
    ]
  }
];

export default restaurantsData;
