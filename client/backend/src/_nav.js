export default {
  items: [
    {
      title: true,
      name: "ESPRIT ADMINSPACE"
    },
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      name: "Page Acceuil",
      icon:"fa fa-home",
      children: [
        {
          name: "Carrousel",
          icon: "fa fa-ellipsis-h",
          children: [
            {
              name: "Ajouter",
              url: "/ajouter",
              icon: "fa fa-plus"
            },
            {
              name: "Afficher",
              url: "/afficher",
              icon: "fa fa-bars"
            },
          ]
        },
      ]
    },
    {
      name: "Formations",
      icon: "fa fa-mortar-board",
      children: [
        {
          name: "Ajouter",
          url: "/ajouter",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/afficher",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "Evénements",
      icon: "fa fa-quote-right",
      children: [
        {
          name: "Ajouter",
          url: "/events/add",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/events/show",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "Actualités",
      icon: "fa fa-rss",
      children: [
        {
          name: "Ajouter",
          url: "/actualite/ajouter",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/actualite",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "Calendrier",
      icon:"fa fa-calendar"
    },
    {
      name: "Services de l'école",
      icon:"fa fa-rocket"
    },
    {
      name: "Presse",
      icon: "fa fa-newspaper-o",
      children: [
        {
          name: "Ajouter",
          url: "/presse/ajouter",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/presse",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "Club",
      icon: "fa fa-group",
      children: [
        {
          name: "Ajouter",
          url: "/club/ajouter",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/club",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "Slider",
      icon: "fa fa-home",
      children: [
        {
          name: "Ajouter",
          url: "/slider/ajouter",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/slider",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "Partenariat",
      icon: "fa fa-home",
      children: [
        {
          name: "Ajouter",
          url: "/partnership/ajouter",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/partnership",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "RDI",
      icon: "fa fa-home",
      children: [
        {
          name: "Ajouter",
          url: "/rdi/ajouter",
          icon: "fa fa-plus"
        },
        {
          name: "Afficher",
          url: "/rdi",
          icon: "fa fa-bars"
        },
      ]
    },
    {
      name: "Grille Tarifaire",
      icon:"fa fa-money"
    },
    {
      name: "Foyer",
      icon:"fa fa-university"
    },
    {
      name: "Vie étudiante",
      icon:"fa fa-group"
    },
  ]
};
